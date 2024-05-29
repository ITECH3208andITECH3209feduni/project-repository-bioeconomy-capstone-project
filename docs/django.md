docker-compose build

docker-compose up -d

docker-compose exec web bash

python manage.py makemigrations

python manage.py migrate

python manage.py createsuperuser

docker-compose exec web bash -c 'django-admin startapp $appname'

docker-compose exec bioeconomy_db bash

psql -U bioeconomy_db_user -d bioeconomy_db

CREATE TABLE dashboard_wastedata (
    id SERIAL PRIMARY KEY,
    site_number INTEGER,
    industry_description VARCHAR(255),
    name VARCHAR(255),
    gipp_region VARCHAR(255),
    waste_profile VARCHAR(255),
    waste_type_detailed VARCHAR(255),
    high_level_waste_type VARCHAR(255),
    moisture_percentage FLOAT,
    volume_pa_mt FLOAT,
    data_source VARCHAR(255),
    assumptions_for_estimate TEXT,
    seasonal VARCHAR(50),
    current_use VARCHAR(50),
    value_per_mt FLOAT,
    aspirations VARCHAR(255),
    key_notes TEXT,
    key_issues TEXT
);

SELECT * FROM dashboard_wastedata;

DROP TABLE dashboard_wastedata;

TRUNCATE TABLE dashboard_wastedata RESTART IDENTITY;



