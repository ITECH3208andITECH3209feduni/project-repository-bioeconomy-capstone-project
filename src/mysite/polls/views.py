from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login as auth_login
from django.contrib.auth import logout
from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User


def test_view(request):
    section = {
        "title": "test page",
    }
    return render(request, 'test.html', context={'section': section})

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

def login_view(request):
    if request.method == 'POST':
        email = request.POST.get('email', '')  # Use .get() to avoid KeyError
        password = request.POST.get('password', '')  # Use .get() to avoid KeyError

        try:
            user = User.objects.get(email=email)
            username = user.username
        except User.DoesNotExist:
            username = None

        if username:
            user = authenticate(request, username=username, password=password)
            if user is not None:
                auth_login(request, user)
                return redirect('/polls/')  # Redirect to a success page or dashboard
            else:
                return render(request, 'login.html', {'error_message': 'Invalid email or password'})
        else:
            return render(request, 'login.html', {'error_message': 'Invalid email or password'})
    else:
        return render(request, 'login.html')
    
@login_required
def success_view(request):
    return render(request, '')

def logout_view(request):
    logout(request)
    return redirect('login')