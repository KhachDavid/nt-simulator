# Generated by Django 4.1.7 on 2023-03-16 04:59

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0004_player_is_manager'),
    ]

    operations = [
        migrations.CreateModel(
            name='League',
            fields=[
                ('uid', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=50)),
                ('nation', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='base.nation')),
            ],
        ),
        migrations.CreateModel(
            name='Club',
            fields=[
                ('uid', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=50)),
                ('league', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='base.league')),
            ],
        ),
        migrations.AlterField(
            model_name='player',
            name='club',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='base.club'),
        ),
    ]
