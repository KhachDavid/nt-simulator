# Generated by Django 4.1.7 on 2023-06-13 02:45

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0005_player_rating'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='player',
            name='rating',
        ),
    ]
