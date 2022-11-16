from rest_framework import serializers
from .models import *

class LevelingCourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = LevelingCourse
        fields = ('class_num',)

class CourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Course
        fields = ('class_num', 'track', 'is_core', 'is_elective',)
        