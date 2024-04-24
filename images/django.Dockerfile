FROM python:3.12-bullseye

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# Set the working directory in the container
WORKDIR /app

# Copy the dependencies file to the working directory
COPY ./src/django/requirements.txt /app/

# Install dependencies
RUN pip install -r requirements.txt

# Copy the current directory contents into the container at /app/
COPY . /app/
