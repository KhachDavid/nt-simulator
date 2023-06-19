import os

if os.getcwd() == '/mnt/ntprod/server':
    from .settings import *
else:
    from .localsettings import *
import pymysql

pymysql.install_as_MySQLdb()