import os
import ssl
from django.conf import settings
from django.core.management import execute_from_command_line
from django_extensions.management.commands.runserver_plus import Command as runserver_plus

certificate_file = '/etc/letsencrypt/live/api.davidk.tech/fullchain.pem'
key_file = '/etc/letsencrypt/live/api.davidk.tech/privkey.pem'

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'core.settings')
settings.configure(INSTALLED_APPS=('django.contrib.staticfiles',))

class Command(runserver_plus):
    def handle(self, *args, **options):
        ssl_context = ssl.create_default_context(ssl.Purpose.CLIENT_AUTH)
        ssl_context.load_cert_chain(certfile=certificate_file, keyfile=key_file)
        options['use_ssl'] = True
        options['ssl_context'] = ssl_context
        super().handle(*args, **options)

if __name__ == '__main__':
    execute_from_command_line(['runserver_ssl.py'])
