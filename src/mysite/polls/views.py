from django.shortcuts import render

def login(request):
    # Your login view logic here
    return render(request=request, template_name='login.html')
