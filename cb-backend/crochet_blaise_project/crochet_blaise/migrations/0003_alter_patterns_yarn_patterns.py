# Generated by Django 5.0.7 on 2024-07-25 13:41

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('crochet_blaise', '0002_patterns_yarn_name'),
    ]

    operations = [
        migrations.AlterField(
            model_name='patterns_yarn',
            name='patterns',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='patterns_yarn', to='crochet_blaise.patterns'),
        ),
    ]