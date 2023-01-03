from django.db import models
import datetime

# Create your models here.
class Nation(models.Model):
    uid = models.AutoField(primary_key=True)
    name = models.CharField(max_length=50)
    continent = models.CharField(max_length=50)
    population = models.IntegerField()
    capital = models.CharField(max_length=50)
    political_climate = models.CharField(max_length=50)
    corruption_level = models.IntegerField()
    fan_loyalty = models.IntegerField()

    def __str__(self):
        return self.name


# Design Player model here
class Player(models.Model):
    # add uid as the primary key
    uid = models.AutoField(primary_key=True)
    name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    referred_name = models.CharField(max_length=50)
    goals = models.IntegerField()
    assists = models.IntegerField()
    position = models.CharField(max_length=50)
    # make nation a foreign key
    nation = models.ForeignKey(Nation, on_delete=models.CASCADE)
    birth_year = models.IntegerField()
    club = models.CharField(max_length=50)
    height = models.IntegerField() # in cm
    weight = models.IntegerField() # in kg
    political_alignment = models.CharField(max_length=50)
    pc_level = models.IntegerField()
    best_quality = models.CharField(max_length=50)
    worst_quality = models.CharField(max_length=50)
    twitter_followers = models.IntegerField()

    # design functions here
    def __str__(self):
        return self.referred_name

    def get_age(self):
        today = datetime.date.today()  
        return today.year - self.birth_year

    def get_height_in_feet(self):
        return 0.0328*self.height

    def get_weight_in_pounds(self):
        return 2.20462*self.weight
    
    def get_twitter_followers(self):
        # return in millions if followers > 1 million
        if self.twitter_followers > 1000000:
            return str(self.twitter_followers/1000000 + "M")
        
        elif self.twitter_followers > 1000:
            return str(self.twitter_followers/1000 + "K")
        
        else:
            return self.twitter_followers

class Season(models.Model):
    uid = models.AutoField(primary_key=True)
    year = models.IntegerField()
    description = models.CharField(max_length=50)

    def __str__(self):
        return self.description

class Game(models.Model):
    uid = models.AutoField(primary_key=True)
    season_uid = models.ForeignKey(Season, on_delete=models.CASCADE)
    home_team_uid = models.ForeignKey(Nation, on_delete=models.CASCADE, related_name='home_team_uid')
    away_team_uid = models.ForeignKey(Nation, on_delete=models.CASCADE, related_name='away_team_uid')
    home_team_score = models.IntegerField()
    away_team_score = models.IntegerField()
    venue = models.CharField(max_length=50)
    attendance = models.IntegerField()

    def __str__(self):
        return self.home_team_uid + " vs " + self.away_team_uid

class Trait (models.Model):
    uid = models.AutoField(primary_key=True)
    prankster_level = models.IntegerField()
    confidence = models.IntegerField()
    aggression = models.IntegerField()
    discipline = models.IntegerField()
    sportsmanship = models.IntegerField()
    wealth = models.IntegerField()
    dad_joke_aptitude = models.IntegerField()

    def __str__(self):
        return self.uid

class SeasonWinner(models.Model):
    uid = models.AutoField(primary_key=True)
    team_uid = models.ForeignKey(Nation, on_delete=models.CASCADE)
    season_uid = models.ForeignKey(Season, on_delete=models.CASCADE)

    def __str__(self):
        return self.team_uid + " won " + self.season_uid

class PlayerAction(models.Model):
    uid = models.AutoField(primary_key=True)
    game_uid = models.ForeignKey(Game, on_delete=models.CASCADE)
    player_uid = models.ForeignKey(Player, on_delete=models.CASCADE)
    action_type = models.CharField(max_length=50)
    action_minute = models.IntegerField()

    def __str__(self):
        return self.player_uid + " " + self.action_type + " in " + self.game_uid + " at minute '" + self.action_minute
