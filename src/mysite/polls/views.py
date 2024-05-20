from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login as auth_login
from django.contrib.auth import logout
from django.contrib.auth.decorators import login_required

def login_view(request):
    if request.method == 'POST':
        username = request.POST.get('username', '')  # Use .get() to avoid KeyError
        password = request.POST.get('password', '')  # Use .get() to avoid KeyError
        user = authenticate(request, username=username, password=password)
        if user is not None:
            auth_login(request, user)
            return redirect('/polls/success')  # Redirect to a success page or dashboard
        else:
            return render(request, 'login.html', {'error_message': 'Invalid username or password'})
    else:
        return render(request, 'login.html')
    
@login_required
def success_view(request):
    return render(request, 'success.html')

def logout_view(request):
    logout(request)
    return redirect('login')