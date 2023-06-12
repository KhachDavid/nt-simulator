# define urls

from django.urls import path
from . import views

urlpatterns = [
    path('api/nations', views.nations, name='nations'),
    path('api/nations/<str:nation>', views.players, name='players'),
    path('api/continents', views.continents, name='continents'),
]
