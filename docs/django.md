docker-compose build

docker-compose up -d

docker-compose exec web bash

python manage.py makemigrations

python manage.py migrate

python manage.py createsuperuser
