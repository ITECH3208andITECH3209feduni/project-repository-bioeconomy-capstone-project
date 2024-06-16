from django.urls import path
from . import views


urlpatterns = [
    path('', views.dashboard_view, name='dashboard'),
    path('upload/', views.upload_file, name='upload_file'),
    path('api/waste-data/', views.get_waste_data, name='get_waste_data'),
    path('download-excel/', views.download_excel, name='download_excel'),
]
