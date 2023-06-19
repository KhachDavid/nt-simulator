import os

if 'ntprod' in os.getcwd():
    from .settings import *
else:
    from .localsettings import *
import pymysql

pymysql.install_as_MySQLdb()