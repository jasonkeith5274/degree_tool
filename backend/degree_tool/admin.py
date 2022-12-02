from django.contrib import admin
from .models import *



class CourseAdmin(admin.ModelAdmin):
    list_display = ('id', 'class_num', 'track')

# Register your models here.

admin.site.register(Course, CourseAdmin)
