from faker import Faker
from .models import Player

# create a fake name last name and referred name for the player and localize it to the country


def create_fake_name():
    fake = Faker()
    name = fake.first_name()
    last_name = fake.last_name()
    referred_name = name + " " + last_name
    return name, last_name, referred_name

# create a fake age for the player


def create_fake_age():
    fake = Faker()
    age = fake.random_int(min=1980, max=2010)
    return age

# create a fake position for the player


def create_fake_position():
    fake = Faker()
    position = fake.random_element(elements=(
        'GK', 'RB', 'CB', 'LB', 'CDM', 'CM', 'CAM', 'RW', 'LW', 'ST', 'CF', 'RM', 'LM'))
    return position

# create a fake nation for the player


def create_fake_nation():
    fake = Faker()
    # generate a fake nation from the list of countries but give a higher probability to the top 10 countries
    pass

# create a fake club for the player


def create_fake_club():
    fake = Faker()
    club = fake.company()
    return club

# create a fake height for the player
def create_fake_height():
    fake = Faker()
    height = fake.random_int(min=160, max=200)
    return height

# create a fake weight for the player


def create_fake_weight():
    fake = Faker()
    weight = fake.random_int(min=60, max=100)
    return weight

# create a fake political alignment for the player


def create_fake_political_alignment():
    fake = Faker()
    political_alignment = fake.random_element(
        elements=('Left', 'Center', 'Right'))
    return political_alignment

# create a fake pc level for the player


def create_fake_pc_level():
    fake = Faker()
    pc_level = fake.random_int(min=0, max=100)
    return pc_level

# create a fake best quality for the player


def create_fake_best_quality():
    fake = Faker()
    best_quality = fake.random_element(elements=(
        'Speed', 'Dribbling', 'Passing', 'Shooting', 'Defending', 'Physicality'))
    return best_quality

# create a fake worst quality for the player


def create_fake_worst_quality():
    fake = Faker()
    worst_quality = fake.random_element(elements=(
        'Speed', 'Dribbling', 'Passing', 'Shooting', 'Defending', 'Physicality'))
    return worst_quality

# create a fake twitter followers for the player


def create_fake_twitter_followers():
    fake = Faker()
    twitter_followers = fake.random_int(min=0, max=10000000)
    return twitter_followers

# create a fake player


def create_fake_player():
    name, last_name, referred_name = create_fake_name()
    age = create_fake_age()
    position = create_fake_position()
    nation = create_fake_nation()
    club = create_fake_club()
    height = create_fake_height()
    weight = create_fake_weight()
    political_alignment = create_fake_political_alignment()
    pc_level = create_fake_pc_level()
    best_quality = create_fake_best_quality()
    worst_quality = create_fake_worst_quality()
    twitter_followers = create_fake_twitter_followers()

    # create a new player object
    new_player = Player(name=name, last_name=last_name, referred_name=referred_name, birth_year=age, position=position, nation=nation, club=club, height=height, weight=weight,
                        political_alignment=political_alignment, pc_level=pc_level, best_quality=best_quality, worst_quality=worst_quality, twitter_followers=twitter_followers)
    return new_player

# create a fake player list


def create_fake_player_list():
    player_list = []
    for i in range(0, 100):
        player_list.append(create_fake_player())
    return player_list

# create a fake player list and save it to the database


def create_fake_player_list_and_save():
    player_list = create_fake_player_list()
    for player in player_list:
        print(player)
        print(player.nation)
        print(player.club)
