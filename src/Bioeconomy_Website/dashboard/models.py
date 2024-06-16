from django.db import models
from django.contrib.auth.models import Permission

class WasteData(models.Model):
    site_number = models.IntegerField()
    industry_description = models.CharField(max_length=255)
    name = models.CharField(max_length=255)
    gipp_region = models.CharField(max_length=255)
    waste_profile = models.CharField(max_length=255)
    waste_type_detailed = models.CharField(max_length=255)
    high_level_waste_type = models.CharField(max_length=255)
    moisture_percentage = models.FloatField()
    volume_pa_mt = models.FloatField()
    data_source = models.CharField(max_length=255)
    assumptions_for_estimate = models.TextField()
    seasonal = models.CharField(max_length=50)
    current_use = models.CharField(max_length=50)
    value_per_mt = models.FloatField()
    aspirations = models.CharField(max_length=255)
    key_notes = models.TextField()
    key_issues = models.TextField()

    def __str__(self):
        return self.name

class CustomPermissions(models.Model):
    class Meta:
        permissions = (
            ("upload_file", "Can upload files"),
        )