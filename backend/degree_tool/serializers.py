from rest_framework import serializers
from .models import LevelingCourse

class LevelingCourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = LevelingCourse
        fields = ('class_num',)