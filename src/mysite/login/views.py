from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login as auth_login
from django.contrib.auth import logout
from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User
from .forms import RegistrationForm

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
    return render(request, '/polls/')

def logout_view(request):
    logout(request)
    return redirect('index')

def register_view(request):
    if request.method == 'POST':
        form = RegistrationForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('login')  # Redirect to login page after successful registration
    else:
        form = RegistrationForm()
    return render(request, 'register.html', {'form': form})