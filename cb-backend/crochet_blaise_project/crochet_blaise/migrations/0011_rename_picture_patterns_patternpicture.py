# Generated by Django 5.0.7 on 2024-07-29 20:02

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('crochet_blaise', '0010_rename_image_patterns_picture'),
    ]

    operations = [
        migrations.RenameField(
            model_name='patterns',
            old_name='picture',
            new_name='patternPicture',
        ),
    ]
