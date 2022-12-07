from django.shortcuts import render
from rest_framework import viewsets
from django.http import *
from .serializers import *
from .models import *
import pandas as pd
from reportlab.pdfgen import canvas
import io
import json
from django.views.decorators.csrf import csrf_exempt
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
import numpy as np


# Create your views here.


class CourseView(viewsets.ModelViewSet):
    serializer_class = CourseSerializer
    queryset = Course.objects.all()
    

@csrf_exempt
def get_elective_courses(request):
    if request.method == "GET":
        courses = np.array(Course.objects.all().values_list('class_num', flat=True))
        unique_courses = list(np.unique(courses))
        unique_courses = [str(x) for x in unique_courses]
        return JsonResponse(unique_courses, safe=False)




@csrf_exempt
def delete_course(request, id):
    if request.method == 'DELETE':
        try:
            course = Course.objects.get(id=id)
            course.delete()
            return JsonResponse({'message': 'Course was sucessfully deleted'})
        except Course.DoesNotExist:
            return JsonResponse({'message': 'id does not exist'})
        

@csrf_exempt
def get_core_classes(request, track):
    if request.method == "GET":
        courses = list(Course.objects.filter(track=track).values_list('class_num', flat=True))
        return JsonResponse(courses, safe=False)


@csrf_exempt
def audit(request):
    data = request.POST.copy()
    track = int(data.get("track"))
    leveling_courses = str(data.get("leveling_courses"))
    leveling_courses = leveling_courses.split(',')


    leveling_courses = [item.strip() for item in leveling_courses]

    if len(leveling_courses) == 1 and leveling_courses[0] == '':
        leveling_courses = None

    full_track = ""

    if track == 70:
        track = "trad"
        full_track = "Traditional"
    if track == 50:
        track = "nat"
        full_track = "Networks and Telecommunication"
    if track == 30:
        track = "is"
        full_track = "Intelligent Systems"
    if track == 40:
        track = "ic"
        full_track = "Interactive Computing"
    if track == 60:
        track == "sys"
        full_track = "Systems"
    if track == 10:
        track = "ds"
        full_track = "Data Science"
    if track == 20:
        track = "cs"
        full_track = "Cybersecurity"


    extra_earned = 0

    core_hours = 0
    core_earned = 0     # required: 3.19

    leveling_courses_earned = 0

    elective_hours = 0
    elective_earned = 0 # required: 3.00

    total_hours = 0
    combined_earned = 0 # required: -

    required_other_elective_hours = 0
    required_elective_hours = 0
    required_core_hours = 0
    other_elective_hours = 0

    if track == "trad":
        required_elective_hours = 15
        required_core_hours = 15
        required_other_elective_hours = 3
    if track == "nat":
        required_elective_hours = 15
        required_core_hours = 15
        required_other_elective_hours = 3
    if track == "is":
        required_elective_hours = 15
        required_core_hours = 15
        required_other_elective_hours = 3
    if track == "ic":
        required_elective_hours = 15
        required_core_hours = 15
        required_other_elective_hours = 3
    if track == "sys":
        required_elective_hours = 15
        required_core_hours = 15
        required_other_elective_hours = 3
    if track == "ds":
        required_elective_hours = 15
        required_core_hours = 15
        required_other_elective_hours = 3
    if track == "cs":
        required_elective_hours = 15
        required_core_hours = 15
        required_other_elective_hours = 3

    df = pd.DataFrame(list(Course.objects.all().values()))
    core_classes = df.loc[(df['track'] == track)]
    core_classes = core_classes['class_num']

    file = None
    filename = ""
    for filename, file in request.FILES.items():
        name = request.FILES[filename].name
    

    file = request.FILES[filename].chunks()


    core_classes_taken = list()
    elective_courses_taken = list()
    leveling_courses_taken = list()

    classes_completed = list()

    lines = ""
    for tmp in file:
        tmp = tmp.decode("utf-8")
        lines = tmp.replace("\r", "")

    file_arr = lines.split("\n")

    name_found = False
    ecsc_found = False

    leveling_courses_hours = 0

    # now we can re implement out old processing to get back to where we were on the old branch
    for line in file_arr:

        if line.startswith("Name: ") and not(name_found):
            name_arr = line.split(":")
            name = name_arr[1].lstrip()
            name_found = True
            #print(name)

        if line.startswith("Student ID: "):
            id_arr = line.split(":")
            student_id = id_arr[1].lstrip()
            #print(student_id)


        if line.startswith("CS "):
            line_arr = line.split(" ")
            class_num = line_arr[1]

            if line_arr[len(line_arr) - 2] == '0.000':
                    continue

            # look up the class to see if it is a core class
            # if it is a core class for the corresponding track, add to core hours, otherwise add to elective
            #if df.loc[(df['Number'] == line_arr[1]) & (df['Track'] == track)].any().all():
            if core_classes[core_classes.isin([int(line_arr[1])])].any() and core_hours < required_core_hours:

                core_hours = core_hours + 3
                core_earned = core_earned + float(line_arr[len(line_arr) - 1])
                core_classes_taken.append(line_arr[1])
                classes_completed.append(line_arr[1])
                
                # now all core classes left are what we need to print
                core_classes = core_classes.loc[core_classes != int(line_arr[1])]
                continue
            
            if line_arr[1] in leveling_courses:
                leveling_courses_taken.append(line_arr[1])
                leveling_courses_hours = leveling_courses_hours + 3
                leveling_courses_earned = leveling_courses_earned + float(line_arr[len(line_arr) - 1])
                classes_completed.append(line_arr[1])
                leveling_courses.remove(line_arr[1].strip())
                continue

            if elective_hours < required_elective_hours:
                elective_hours = elective_hours + 3
                elective_earned = elective_earned + float(line_arr[len(line_arr) - 1])
                classes_completed.append(line_arr[1])
                elective_courses_taken.append(line_arr[1])
                #print("Elective Course: " + line_arr[1])
                continue

            if other_elective_hours < required_other_elective_hours:
                other_elective_hours = other_elective_hours + 3
                combined_earned = combined_earned + float(line_arr[len(line_arr) - 1])
                classes_completed.append(line_arr[1])
                elective_courses_taken(line_arr[1])
                continue


    core_gpa = core_earned / float(core_hours)
    elective_gpa = elective_earned / float(elective_hours)
    combined_gpa = (elective_earned + core_earned + combined_earned + leveling_courses_earned) / (other_elective_hours + elective_hours + core_hours + leveling_courses_hours)

    core_gpa = round(core_gpa, 3)
    elective_gpa = round(elective_gpa, 3)
    combined_gpa = round(combined_gpa, 3)


    #print("Core gpa: " + str(core_gpa))
    #print("Elective gpa: " + str(elective_gpa))
    #print("Combined gpa: " + str(combined_gpa))


    core_classes = core_classes.to_list()


    elective_courses_taken = [str(i) for i in elective_courses_taken]
    elective_courses_taken_str = ", CS ".join(elective_courses_taken)
    elective_courses_taken_str = "CS " + elective_courses_taken_str
    #print("Elective courses taken: " + elective_courses_taken_str)

    core_classes_taken = [str(i) for i in core_classes_taken]
    core_classes_taken_str = ", CS ".join(core_classes_taken)
    core_classes_taken_str = "CS " + core_classes_taken_str
    #print("Core classes taken: " + core_classes_taken_str)

    core_classes_left = [str(i) for i in core_classes_taken]
    core_courses_left_str = ", CS ".join(core_classes_left)
    core_courses_left_str = "CS " + core_courses_left_str
    #print(core_courses_left_str)


    leveling_courses_taken = [str(i) for i in leveling_courses_taken]
    leveling_courses_taken_str = ", CS ".join(leveling_courses_taken)
    leveling_courses_taken_str = "CS " + leveling_courses_taken_str
    #print("Leveling courses taken: " + leveling_courses_taken_str)

    leveling_courses_left_str = ""
    if len(leveling_courses) != 0:
        leveling_courses_left = [str(i) for i in leveling_courses]
        leveling_courses_left_str = ", CS ".join(leveling_courses_left)
        leveling_courses_left_str = "CS " + leveling_courses_left_str

    #print("Leveling courses left: " + leveling_courses_left_str)
 
    pre_reqs = 'N/A'
    if len(leveling_courses) == 0 and len(leveling_courses_taken) != 0:
        pre_reqs = leveling_courses_taken_str

    core_classes_needed = 0
    core_gpa_needed = -1
    if core_hours < required_core_hours:
        core_gpa_needed = ((required_core_hours * 3.19) - (core_earned * core_hours)) / (required_core_hours - core_hours)
        core_classes_needed = (required_core_hours - core_hours) / 3
    
    elective_courses_needed = 0
    elective_gpa_needed = -1
    if elective_hours < required_elective_hours:
        elective_gpa_needed = ((required_elective_hours * 3.0) - (elective_hours * elective_earned)) / (required_elective_hours - elective_hours)
        elective_courses_needed = (required_elective_hours - elective_hours) / 3

    core_gpa_needed_str = ""
    if core_gpa_needed > -1:
        core_gpa_needed = round(core_gpa_needed, 3)
        core_gpa_needed_str = "Core GPA requirement: student needs a GPA >= " + str(core_gpa_needed) + " in "  + str(core_classes_needed) + " of the following: " + core_courses_left_str

    elective_gpa_needed_str = ""
    if elective_gpa_needed > -1:
        elective_gpa_needed = round(elective_gpa_needed, 3)
        elective_gpa_needed_str = "Elective GPA requirement: student needs a GPA >= " + str(elective_gpa_needed) + " in " + str(int(elective_courses_needed)) + " valid elective courses"


    title = 'Audit Report'
    text_lines = [
        'Name: ' + name,
        'Plan: Master',
        'ID: ' + str(student_id),
        'Major: Computer Science',
        'Track: ' + full_track,
        '',
        'Core GPA: ' + str(core_gpa),
        'Elective GPA: ' + str(elective_gpa),
        'Combined GPA: ' + str(combined_gpa),
        ' ',
        'Core Courses: ' + core_classes_taken_str,
        'Elective Courses: ' + elective_courses_taken_str,
        ' ',
        'Leveling Courses and Pre-requisites from Admission Letter:'
        ' ',
        'Leveling/Pre-reqs left: ' + leveling_courses_left_str,
        'Leveling/Pre-reqs completed: ' + leveling_courses_taken_str,
        ' ',
        'Outstanding Requirements: '
        ' ',
        core_gpa_needed_str,
        elective_gpa_needed_str
    ]


    #pdfmetrics.registerFont(TTFont('Calibri', 'Calibri.ttf'))
    #pdfmetrics.registerFont(TTFont('CalibriBD', 'CalibriBd.ttf'))


    buffer = io.BytesIO()
    p = canvas.Canvas(buffer)

    p.setTitle(title)
    p.setFont('Helvetica', size=36)
    p.drawCentredString(300, 770, title)

    # Draw things on the PDF. Here's where the PDF generation happens.
    # See the ReportLab documentation for the full list of functionality.

    text = p.beginText(40, 680)
    text.setFont('Helvetica', size=14)
    for line in text_lines:
        text.textLine(line)
    p.drawText(text)

    # Close the PDF object cleanly, and we're done.
    p.showPage()
    p.save()

    # FileResponse sets the Content-Disposition header so that browsers
    # present the option to save the file.
    pdf_name = 'audit_report_' + str(student_id) + ".pdf"

    buffer.seek(0)
    return FileResponse(buffer, as_attachment=True, filename=pdf_name)









@csrf_exempt
def generate_degree_plan(request):
    if request.method != "POST":
        return Http404()

    data = request.POST.copy()

    track = str(data.get("track"))
    core = data.get("core").split(',')
    electives = data.get("electives").split(',')

    full_track = ""

    if track == "trad":
        full_track = "Traditional"
    if track == "nat":
        full_track = "Networks and Telecommunication"
    if track == "is":
        full_track = "Intelligent Systems"
    if track == "ic":
        full_track = "Interactive Computing"
    if track == "sys":
        full_track = "Systems"
    if track == "ds":
        full_track = "Data Science"
    if track == "cs":
        full_track = "Cybersecurity"

    print("fulll track: " + full_track)


    core_classes = [str(i) for i in core]
    core_classes_str = ", CS ".join(core_classes)
    core_classes_str = "CS " + core_classes_str

    elective_classes = [str(i) for i in electives]
    elective_classes_str = ", CS ".join(elective_classes)
    elective_classes_str = "CS " + elective_classes_str



    title = "Degree Plan"
    text_lines = [
        'Track: ' + full_track,
        '',
        ' '
        'Core Courses:'
        '   ' + core_classes_str,
        ' ',
        ' ',
        'Elective Courses:'
        '   ' + elective_classes_str,
    ]

    buffer = io.BytesIO()
    p = canvas.Canvas(buffer)

    p.setTitle(title)
    p.setFont('Helvetica', size=36)
    p.drawCentredString(300, 770, title)

    # Draw things on the PDF. Here's where the PDF generation happens.
    # See the ReportLab documentation for the full list of functionality.

    text = p.beginText(40, 680)
    text.setFont('Helvetica', size=14)
    for line in text_lines:
        text.textLine(line)
    p.drawText(text)

    # Close the PDF object cleanly, and we're done.
    p.showPage()
    p.save()

    # FileResponse sets the Content-Disposition header so that browsers
    # present the option to save the file.

    buffer.seek(0)
    return FileResponse(buffer, as_attachment=True)
    
