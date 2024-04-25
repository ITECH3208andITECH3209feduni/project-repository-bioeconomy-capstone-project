# Use the official PHP image
FROM php:latest

# Update package lists and install required dependencies
RUN apt-get update \
    && apt-get install -y \
        libzip-dev \
        unzip \
        libpng-dev \
        libjpeg-dev \
        libfreetype6-dev \
        libmcrypt-dev \
        libssl-dev \
        zlib1g-dev \
        libxml2-dev \
        libxslt1-dev \
        postgresql-client \
        libpq-dev \
    && docker-php-ext-configure pgsql -with-pgsql=/usr/local/pgsql \
    && docker-php-ext-install pgsql pdo_pgsql \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Set the working directory
WORKDIR /var/www/html

# Expose port 80 (optional, depending on your application's needs)
EXPOSE 80
