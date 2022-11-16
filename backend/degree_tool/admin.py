from django.contrib import admin
from .models import *

class LevelingCourseAdmin(admin.ModelAdmin):
    list_display = ('class_num',)


class CourseAdmin(admin.ModelAdmin):
    list_display = ('class_num', 'track', 'is_core', 'is_elective')

# Register your models here.

admin.site.register(LevelingCourse, LevelingCourseAdmin)
admin.site.register(Course, CourseAdmin)
