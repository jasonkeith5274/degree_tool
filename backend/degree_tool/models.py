from django.db import models


class Course(models.Model):
    id = models.BigAutoField(primary_key=True)
    class_num = models.IntegerField()
    track = models.TextField()

# Create your models here.
