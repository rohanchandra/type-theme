---
layout: post
title:  "Setting Up Laravel with Homestead and Spark (on Windows)"
tags: Laravel
---

Setting up a Spark project on a Mac using valet is a great experience, but unfortunately on Windows the process is more involved.

I had to relearn this chore everytime I made a new project so I wrote a step by step guide for myself, hopefully this helps you, too!

These commands were taken from the [Laravel Homestead](https://laravel.com/docs/master/homestead) docs.

## Installation Steps

1. Start by installing: composer, laravel, virtualbox, vagrant and npm. (There may be a few more dependencies you will need...)
2. Create your Laravel project:
``` shell
laravel new project-name
```
3. Add the following to composer.json:
``` json
"repositories": [
    {
        "type": "composer",
        "url": "https://spark-satis.laravel.com"
    }
]
```
4. Add the following dependency to your composer.json file's require section:
``` json
"laravel/spark": "~5.0",
"laravel/cashier": "~7.0"
```
5. Update composer: 
```
composer update
```
6. Add the following service providers to your config/app.php configuration file:
``` php
Laravel\Spark\Providers\SparkServiceProvider::class,
Laravel\Cashier\CashierServiceProvider::class,
```
7. Install Spark
```
php artisan spark:install --force
```
8. Add the following provider to your config/app.php configuration file:
``` php
App\Providers\SparkServiceProvider::class,
```
9. Run these: 
```
npm install
``` 
```
npm run dev
```
```
composer require laravel/homestead --dev
```
10. Create your vagrant machine (see the homestead docs for the Linux/Mac command):
```
vendor\\bin\\homestead make
```
11. Start your vagrant machine
```
vagrant up
```
12. Add to your /etc/hosts file (edit Homestead.yml to change domain name and IP address if needed)
```
192.168.10.10 project-name.test
```
13. SSH into your vagrant machine:
```
vagrant ssh
```
14. Enter your project folder (/code)
```
cd code
```
15. Run the migrations:
```
php artisan migrate
```

## Success
You should be able to navigate to [http://project-name.test](http://project-name.test) in your browser and view your new Laravel Spark site, congratulations!