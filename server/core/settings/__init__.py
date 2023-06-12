import os

if os.environ.get('DJANGO_ENV') == 'production':
    from .settings import *
else:
    from .localsettings import *
import pymysql

pymysql.install_as_MySQLdb()