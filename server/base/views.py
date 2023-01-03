from django.shortcuts import render
from django.http import JsonResponse
from .data_generator import create_fake_player_list_and_save

# Create your views here.
def home(request):
    create_fake_player_list_and_save()
    return JsonResponse({'message': 'Hello, world!'})