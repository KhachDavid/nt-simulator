# Generated by Django 4.1.7 on 2023-06-13 02:50

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0007_player_rating_delete_playertransfer'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='player',
            name='rating',
        ),
    ]
