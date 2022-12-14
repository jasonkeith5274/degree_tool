# Generated by Django 4.1.3 on 2022-11-16 16:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('degree_tool', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Course',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('class_num', models.IntegerField()),
                ('track', models.TextField()),
                ('is_core', models.BooleanField()),
                ('is_elective', models.BooleanField()),
            ],
        ),
    ]
