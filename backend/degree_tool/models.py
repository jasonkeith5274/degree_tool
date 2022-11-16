from django.db import models

class LevelingCourse(models.Model):
    class_num = models.IntegerField()

class Course(models.Model):
    class_num = models.IntegerField()
    track = models.TextField()
    is_core = models.BooleanField()
    is_elective = models.BooleanField()

# Create your models here.
