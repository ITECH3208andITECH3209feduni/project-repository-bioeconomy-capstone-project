import pandas as pd
import tempfile
from django.shortcuts import render, redirect
from .forms import UploadFileForm
from .models import WasteData
from .models import WasteData
from django.contrib import messages
from django.core.serializers import serialize
from .models import WasteData
from django.http import JsonResponse
from django.http import HttpResponse
from django.conf import settings
import os

def handle_uploaded_csv(csv_file):
    # Create a temporary file to store the uploaded CSV data
    with tempfile.NamedTemporaryFile(delete=False) as temp_file:
        # Write the uploaded file data to the temporary file
        for chunk in csv_file.chunks():
            temp_file.write(chunk)
    
    # Read the CSV file into a DataFrame
    df = pd.read_csv(temp_file.name)

    # Insert data into the WasteData model in the 'bioeconomy_db' database
    for _, row in df.iterrows():
        # Clean volume_pa_mt field value by removing spaces and commas
        volume_pa_mt_cleaned = str(row['Volume pa MT']).replace(' ', '').replace(',', '')

        # Clean value_per_mt field value by removing '$' and splitting on '-'
        value_per_mt_cleaned = str(row['Value$/MT']).replace('$', '').split('-')[0]

        # Convert cleaned values to float if they are not empty strings and are valid floats
        if volume_pa_mt_cleaned and value_per_mt_cleaned:
            try:
                volume_pa_mt_float = float(volume_pa_mt_cleaned)
                value_per_mt_float = float(value_per_mt_cleaned)
            except ValueError:
                # Handle the case where the values cannot be converted to floats
                print("Skipping row due to non-numeric value in volume_pa_mt or value_per_mt")
                continue

            # Insert data into WasteData model in the 'bioeconomy_db' database
            WasteData.objects.create(
                site_number=row['Site #'],
                industry_description=row['Industry Description'],
                name=row['Name'],
                gipp_region=row['GIPP region'],
                waste_profile=row['Waste Profile'],
                waste_type_detailed=row['Waste Type (detailed)'],
                high_level_waste_type=row['High level Waste Type'],
                moisture_percentage=row['Moisture %'],
                volume_pa_mt=volume_pa_mt_float,
                data_source=row['Data Source'],
                assumptions_for_estimate=row['Assumptions for estimate'],
                seasonal=row['Seasonal'],
                current_use=row['Current use'],
                value_per_mt=value_per_mt_float,
                aspirations=row['Aspirations'],
                key_notes=row['Key notes'],
                key_issues=row['Key Issues']
            )
        else:
            # Handle the case where one or both of the fields are empty
            print("Skipping row due to empty volume_pa_mt or value_per_mt")
    
    # Remove the temporary file
    os.unlink(temp_file.name)


def upload_file(request):
    MAX_FILE_SIZE = 10 * 1024 * 1024  # 10 MB (in bytes)
    if request.method == 'POST':
        form = UploadFileForm(request.POST, request.FILES)
        if form.is_valid():
            # Perform file validation
            uploaded_file = request.FILES['csv_file']
            if not uploaded_file.name.endswith('.csv'):
                messages.error(request, 'Invalid file format. Please upload a CSV file.')
                return redirect('dashboard')
            if uploaded_file.size > MAX_FILE_SIZE:
                messages.error(request, 'File size exceeds the maximum limit.')
                return redirect('dashboard')

            # If file passes validation, proceed with handling it
            handle_uploaded_csv(uploaded_file)
            messages.success(request, 'File uploaded successfully.')
            return redirect('dashboard')
        else:
            messages.error(request, 'Form is not valid.')
            return redirect('dashboard')
    else:
        messages.error(request, 'Invalid request method.')
        return redirect('dashboard')

def dashboard_view(request):
    section = {
        "title": "Dashboard | BioEconomy Innovation",
    }
    # Get messages from the request and add them to the context
    messages_data = []
    for message in messages.get_messages(request):
        messages_data.append({
            'message': message.message,
            'tags': message.tags,
        })
    context = {
        'section': section,
        'messages': messages_data,
    }
    return render(request, 'dashboard.html', context=context)

def get_waste_data(request):
    data = WasteData.objects.all().values()
    return JsonResponse(list(data), safe=False)

def download_excel(request):
    # Path to your existing Excel file in the static directory
    file_path = os.path.join(settings.STATICFILES_DIRS[0], 'files', 'upload_template.xlsx')

    # Read the file
    with open(file_path, 'rb') as f:
        file_data = f.read()

    # Create a HttpResponse object and set the appropriate headers for Excel file
    response = HttpResponse(file_data, content_type='application/vnd.openxmlformats-officedocument.spreadsheetml.sheet')
    response['Content-Disposition'] = 'attachment; filename=upload_template.xlsx'

    return response
