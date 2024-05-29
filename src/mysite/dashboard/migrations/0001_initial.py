# Generated by Django 5.0.6 on 2024-05-29 03:52

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='WasteData',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('site_number', models.IntegerField()),
                ('industry_description', models.CharField(max_length=255)),
                ('name', models.CharField(max_length=255)),
                ('gipp_region', models.CharField(max_length=255)),
                ('waste_profile', models.CharField(max_length=255)),
                ('waste_type_detailed', models.CharField(max_length=255)),
                ('high_level_waste_type', models.CharField(max_length=255)),
                ('moisture_percentage', models.FloatField()),
                ('volume_pa_mt', models.FloatField()),
                ('data_source', models.CharField(max_length=255)),
                ('assumptions_for_estimate', models.TextField()),
                ('seasonal', models.CharField(max_length=50)),
                ('current_use', models.CharField(max_length=50)),
                ('value_per_mt', models.FloatField()),
                ('aspirations', models.CharField(max_length=255)),
                ('key_notes', models.TextField()),
                ('key_issues', models.TextField()),
            ],
        ),
    ]
