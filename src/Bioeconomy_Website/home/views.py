from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login as auth_login
from django.contrib.auth import logout
from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User


def index_view(request):
    section = {
        "title": "Home | BioEconomy Innovation",
    }
    return render(request, 'index.html', context={'section': section})

def about_view(request):
    section = {
        "title": "About | BioEconomy Innovation",
    }
    return render(request, 'about.html', context={'section': section})

def dashboard_view(request):
    section = {
        "title": "Dashboard | BioEconomy Innovation",
    }
    return render(request, 'dashboard.html', context={'section': section})

def contact_view(request):
    section = {
        "title": "Contact | BioEconomy Innovation",
    }
    return render(request, 'contact.html', context={'section': section})

@login_required
def success_view(request):
    return render(request, 'index.html')

def logout_view(request):
    logout(request)
    return redirect('index.html')