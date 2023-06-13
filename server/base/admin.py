from django.contrib import admin

# Register your models here.
from .models import *
admin.site.register(Nation)
admin.site.register(Player)
admin.site.register(League)
admin.site.register(Club)
admin.site.register(Season)
admin.site.register(Game)
admin.site.register(Trait)
admin.site.register(SeasonWinner)
admin.site.register(PlayerAction)
