from django.shortcuts import render

def dashboard_view(request):
    section = {
        "title": "Dashboard | BioEconomy Innovation",
    }
    return render(request, 'dashboard.html', context={'section': section})
