from django.urls import path
from . import views


urlpatterns = [
    path('success/', views.success_view, name='success'),
    path('logout/', views.logout_view, name='logout'),
    path('', views.index_view, name='index'),
    path('about/', views.about_view, name='about'),
    path('dashboard/', views.dashboard_view, name='dashboard'),
    path('contact/', views.contact_view, name='contact'),
]
