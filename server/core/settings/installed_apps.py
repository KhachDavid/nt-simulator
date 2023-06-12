import os

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'whitenoise',

    # custom apps
    'base',
    'corsheaders',
    'doc',
]

if "ntprod" in os.getcwd():
    INSTALLED_APPS.append("django_extensions")