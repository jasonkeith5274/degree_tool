# Generated by Django 4.1.3 on 2022-12-02 00:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('degree_tool', '0004_delete_levelingcourse'),
    ]

    operations = [
        migrations.AlterField(
            model_name='course',
            name='id',
            field=models.IntegerField(primary_key=True, serialize=False),
        ),
    ]