
# Django Setup for Windows
## Python Installation

Assumptions:
- Windows OS

Download Python Installer here: https://www.python.org/downloads/
- Tick "Add python.exe to PATH" and press customize installation
- In optional features: tick "pip"
- In advanced options: tick "install Python for all users"


```bash
#Validate python installation in command prompt
Python 3.11.3

#Validate pip installation
pip --version
```

## Postgres Installation

Assumptions:
- Windows OS

Download Latest PostgreSQL Installer here: https://www.postgresql.org/download/windows/

```bash
#Validate Postgres installtion in command prompt
psql --version
```
If Windows did not recognize psql command follow this guide: https://sqlbackupandftp.com/blog/setting-windows-path-for-postgres-tools/

```bash
#Login to the Database
psql -h localhost -U postgres #and enter your password

#Create Database
CREATE DATABASE bioeconomy_db;
```

## Django Installation

Dependencies:
- Installed Python
- PostgreSQL Database

Create a New Folder and name it Django and right click to open the terminal
```bash
#Create a Virtual Environment
python -m venv $name #eg. python -m venv my_venv

#Activate Virtual Environment
$name\Scripts\activate #eg. my_venv\Scripts\activate

#Install Django and its dependencies inside the Virtual Environment
pip install Django 
pip install psycopg2-binary # For PostgreSQL database support
pip install pandas # For reading excel files
pip install openpyxl # For working with excel files

#Validate Django Installation
django-admin version

#Create a folder for Bioeconomy Website
django-admin startproject Bioeconomy_Website
```

Copy all the contents from the Bioeconomy_Website from the git repository and paste it inside the Bioeconomy_Website

```bash
#Inside the Bioeconomy_Website folder open main folder and open settings.py and find the Django Database Settings

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': "bioeconomy_db",
        'USER': "postgres",
        'PASSWORD': "$password", #enter your postgres password
        'HOST': "localhost",
        'PORT': "5432",
    }
}

#Switch to the directory of the Bioeconomy Website
cd Bioeconomy_Website

# Make Migrations
python manage.py makemigrations

# Migrate
pythone manage.py migrate

# Create Super User
python manage.py createsuperuser #remember your credentials as you will be using it to access the accounts management

# Start Django
python manage.py runserver

# Accounts Management Can Be Access Through This Link:
localhost:8000/admin
```

## Flourish Credentials

To edit the data in the Maps you will need to access [Flourish](https://app.flourish.studio/login?redirect=true)
- After login in click on any of the maps that you want to alter 
- After opening the map select the Data tab on top of the window 
- On the  right side of the page you will notice the upload button. 
- You can choose that if you want to replace the whole data (not recommended as the regions are linked)
- You can select upload and merge from the dropdown function to add the data or edit any of the fields
- Wait for it to save the changes (status is shown on top right of the screen)
- Now go to the preview section to review all the changes 
- If you wish to continue with the changes, then click on the top right button "Export and Publish" and click "re-publish"

The changes will be made and shown on the website.

```bash
#Flourish Credentials
username: pocajo3715@morxin.com
password: bioeco123$
```
