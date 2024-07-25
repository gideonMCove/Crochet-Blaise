# Generated by Django 5.0.7 on 2024-07-25 15:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('crochet_blaise', '0004_alter_patterns_name_alter_patterns_yarn_name_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='patterns',
            name='description',
            field=models.TextField(default=''),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='techniques',
            name='skill_level',
            field=models.CharField(choices=[('BEG', 'Beginner'), ('INT', 'Intermediate'), ('EXP', 'Expert')], default='Beginner', max_length=3),
        ),
    ]
