
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
psql -h localhost -U postres #and enter your password

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
python manage.py createsuperuser

# Start Django
python manage.py runserver
```
