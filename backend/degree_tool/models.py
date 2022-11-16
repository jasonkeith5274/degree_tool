from django.db import models


class Course(models.Model):
    class_num = models.IntegerField()
    track = models.TextField()

# Create your models here.
