from django.shortcuts import render
from rest_framework import viewsets
from .serializers import *
from .models import *
from .forms import *

# Create your views here.

class LevelingCourseView(viewsets.ModelViewSet):
    serializer_class = LevelingCourseSerializer
    queryset = LevelingCourse.objects.all()


class CourseView(viewsets.ModelViewSet):
    serializer_class = CourseSerializer
    queryset = Course.objects.all()


