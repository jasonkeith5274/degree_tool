from django.shortcuts import render
from rest_framework import viewsets
from .serializers import LevelingCourseSerializer
from .models import LevelingCourse

# Create your views here.

class LevelingCourseView(viewsets.ModelViewSet):
    serializer_class = LevelingCourseSerializer
    queryset = LevelingCourse.objects.all()
