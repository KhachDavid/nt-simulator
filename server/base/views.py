import json
import logging
import time
from django.shortcuts import render
from django.http import JsonResponse
from .models import *
from django.forms.models import model_to_dict
from django.views.decorators.http import require_GET
from django.core.paginator import Paginator
from django.views.decorators.csrf import csrf_exempt

logger = logging.getLogger(__name__)

# create an api endpoint for the nations
def nations(request):
    # Record the start time
    start_time = time.time()

    # check the request method
    if request.method != "GET":
        return JsonResponse({"error": "GET request required."}, status=400)

    # get all the nations and their rankings through the NationRanking model on join
    # create a list of nations
    nations_list = []

    # nation has a ranking attribute sort by them in ascending order
    nations = Nation.objects.order_by('rank')

    # loop through the nations
    for nation in nations:
        # create a dictionary of the nation
        # append the nation dictionary to the nations list
        nation_frontend_dict = nation.frontend_dict()


        nations_list.append(nation_frontend_dict)

    # calculate time taken
    duration = time.time() - start_time
    logger.info(f"Time taken by /nations/: {duration} seconds")

    # return the nations list as a json response
    return JsonResponse(nations_list, safe=False)

@require_GET # only allow GET requests
def players(request, nation):
    start_time = time.time()

    # get the nation
    nation = Nation.objects.get(name=nation)
    # get the players for the nation
    players = Player.objects.filter(nation=nation).order_by('-rating')

    # create a paginator object with the players queryset and the requested page size
    paginator = Paginator(players, request.GET.get('pageSize', 10))
    # get the requested page number
    page_number = request.GET.get('page', 1)

    # get the requested page of results
    page = paginator.get_page(page_number)

    # create a list of players for the current page
    players_list = []
    # loop through the players on the current page
    for player in page:
        # convert the player model to a dictionary
        player_dict = player.frontend_dict()
        # add the current page to the player dictionary
        player_dict['page'] = page_number

        # add the player dictionary to the list
        players_list.append(player_dict)

    duration = time.time() - start_time
    print(f"Time taken by /players/{nation.name}: {duration} seconds")

    # return the players list for the current page as a JSON response
    return JsonResponse({
        'results': players_list,
        'count': paginator.count,
        'num_pages': paginator.num_pages,
        'has_next': page.has_next(),
        'has_prev': page.has_previous(),
    })

def continents(request):
    start_time = time.time()

    # check the request method
    if request.method != "GET":
        return JsonResponse({"error": "GET request required."}, status=400)

    # get unique continents from the nations
    continents = Nation.objects.order_by().values('continent').distinct()

    # create a list of continents
    continents_list = []
    
    # loop through the continents
    for continent in continents:
        # add the continent to the continents list
        continents_list.append(continent['continent'])

    duration = time.time() - start_time
    logger.info(f"Time take by /continents: {duration} seconds")

    # return the continents list as a json response
    return JsonResponse(continents_list, safe=False)

@csrf_exempt
def report(request):
    # check the request method
    if request.method != "POST":
        return JsonResponse({"error": "POST request required."}, status=400)

    # get the data from the request
    data = json.loads(request.body)

    # create a report object
    report = CriticalReport(
        # put the whole json data in the report
        data=data
    )

    # save the report object
    report.save()

    # return a success response
    return JsonResponse(
        {
            "message": "Report submitted successfully.", 
            "name": data.get("Name", ""),
        }
    , status=201)

def home(request):
    return render(request, 'base/index.html')
