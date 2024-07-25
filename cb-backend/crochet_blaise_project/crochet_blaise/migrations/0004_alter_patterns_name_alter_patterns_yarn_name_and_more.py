# Generated by Django 5.0.7 on 2024-07-25 15:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('crochet_blaise', '0003_alter_patterns_yarn_patterns'),
    ]

    operations = [
        migrations.AlterField(
            model_name='patterns',
            name='name',
            field=models.CharField(max_length=30),
        ),
        migrations.AlterField(
            model_name='patterns_yarn',
            name='name',
            field=models.CharField(max_length=30),
        ),
        migrations.AlterField(
            model_name='profile',
            name='name',
            field=models.CharField(max_length=30),
        ),
        migrations.AlterField(
            model_name='techniques',
            name='name',
            field=models.CharField(max_length=30),
        ),
        migrations.AlterField(
            model_name='techniques',
            name='skill_level',
            field=models.CharField(choices=[('INT', 'Intermediate'), ('BEG', 'Beginner'), ('EXP', 'Expert')], default='Beginner', max_length=3),
        ),
        migrations.AlterField(
            model_name='tools',
            name='name',
            field=models.CharField(max_length=30),
        ),
        migrations.AlterField(
            model_name='yarn',
            name='brand',
            field=models.CharField(max_length=30),
        ),
        migrations.AlterField(
            model_name='yarn',
            name='colour',
            field=models.CharField(max_length=15),
        ),
        migrations.AlterField(
            model_name='yarn',
            name='name',
            field=models.CharField(max_length=60),
        ),
        migrations.AlterField(
            model_name='yarn',
            name='size',
            field=models.CharField(max_length=30),
        ),
    ]
