from django.shortcuts import render
from rest_framework import viewsets
from django.http import *
from .serializers import *
from .models import *
import pandas as pd

# Create your views here.


class CourseView(viewsets.ModelViewSet):
    serializer_class = CourseSerializer
    queryset = Course.objects.all()


def audit(request):

    if request.method == 'GET':
        courses = Course.objects.all()
        df = pd.DataFrame(list(Course.objects.all().values()))
        response = HttpResponse(df)
        return response


