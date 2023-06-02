from django.db import models
import datetime

# Create your models here.


class Nation(models.Model):
    uid = models.AutoField(primary_key=True)
    name = models.CharField(max_length=50, default="")
    continent = models.CharField(max_length=50, default="")
    population = models.IntegerField()
    capital = models.CharField(max_length=50, default="")
    political_climate = models.CharField(max_length=50, default="")
    corruption_level = models.CharField(max_length=50, default="")
    fan_loyalty = models.CharField(max_length=50, default="")
    faker_locale_options = models.CharField(max_length=50, default="")
    conversion_option = models.CharField(max_length=50, default="")
    rank = models.IntegerField(default=0)

    def readable_population(self):
        # based on the population, return a readable string
        # 1000 -> 1k
        # 1000000 -> 1m
        # 1000000000 -> 1b

        # if the population is less than 1000
        if self.population < 1000:
            # return the population
            return str(self.population)
        
        # if the population is less than 1000000
        elif self.population < 1000000:
            # return the population divided by 1000 with a k appended
            return str(self.population // 1000) + " K"
        
        # if the population is less than 1000000000
        elif self.population < 1000000000:
            # return the population divided by 1000000 with an m appended
            return str(self.population // 1000000) + " M"
        
        # if the population is greater than 1000000000
        else:
            # return the population divided by 1000000000 with a b appended
            return str(self.population // 1000000000) + " B"

    def frontend_dict(self):
        return {
            "uid": self.uid,
            "Rank": self.rank,
            "Country": self.name,
            "Continent": self.continent,
            "Population": self.readable_population(),
            "Capital": self.capital,
            "Political State": self.political_climate,
            "Corruption Level": self.corruption_level,
            "Fan Loyalty": self.fan_loyalty,
        }

    def __str__(self):
        return self.name


class League(models.Model):
    uid = models.AutoField(primary_key=True)
    name = models.CharField(max_length=50)
    nation = models.ForeignKey(Nation, on_delete=models.CASCADE)

    def __str__(self):
        return self.name


class Club(models.Model):
    uid = models.AutoField(primary_key=True)
    name = models.CharField(max_length=50)
    league = models.ForeignKey(League, on_delete=models.CASCADE)

    def __str__(self):
        return self.name

# Design Player model here


class Player(models.Model):
    # add uid as the primary key
    uid = models.AutoField(primary_key=True)
    name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    referred_name = models.CharField(max_length=50, default="")
    goals = models.IntegerField(default=0)
    assists = models.IntegerField(default=0)
    position = models.CharField(max_length=50)
    # make nation a foreign key
    nation = models.ForeignKey(Nation, on_delete=models.CASCADE)
    birth_year = models.IntegerField()
    club = models.ForeignKey(
        Club, on_delete=models.CASCADE, default=None, null=True)
    height = models.IntegerField()  # in cm
    weight = models.IntegerField()  # in kg
    political_alignment = models.CharField(max_length=50)
    pc_level = models.IntegerField()
    best_quality = models.CharField(max_length=50)
    worst_quality = models.CharField(max_length=50)
    twitter_followers = models.IntegerField()
    is_manager = models.BooleanField(default=False)

    def frontend_dict(self):
        return {
            "uid": self.uid,
            "Name": self.name + " " + self.last_name,
            "Rating": self.calculate_rating(),
            "Goals": self.goals,
            "Assists": self.assists,
            "Position": self.position,
            "Birth Year": self.birth_year,
            "Club": self.club,
            "Height": self.height,
            "Weight": self.weight,
            "Political Alignment": self.political_alignment,
            "Political Correctness Level": self.pc_level,
            "Best Quality": self.best_quality,
            "Worst Quality": self.worst_quality,
            "Twitter Followers": self.twitter_followers,
            "Is Manager": self.is_manager,
        }

    # design functions here
    def __str__(self):
        return self.name + " " + self.last_name

    def calculate_rating(self):
        # position options
        positions = ["GK", "CB", "LB", "RB", "CDM", "CM", "CAM", "LM", "RM", "LW", "RW", "ST", "CF"]
        max_height = 200
        min_height = 160
        max_weight = 100
        min_weight = 60
        max_twitter_followers = 10000000
        min_twitter_followers = 0
        min_birth_year = 1980
        max_birth_year = 2010
        max_ranking = 199
        min_ranking = 0

        # calculate maximum possible rating
        max_rating = 100

        rating = 20  # Starting rating at 20

        # Goals and assists
        rating += self.goals * 0.4
        rating += self.assists * 0.3

        # Position
        position_weights = {
            'GK': 10,
            'RB': 5,
            'CB': 7,
            'LB': 5,
            'CDM': 8,
            'CM': 6,
            'CAM': 6,
            'RW': 4,
            'LW': 4,
            'ST': 7,
            'CF': 6,
            'RM': 4,
            'LM': 4
        }
        rating += position_weights.get(self.position, 0)

        # Height
        if self.position in ['CB', 'CDM', 'GK']:
            height_ratio = (self.height - min_height) / (max_height - min_height)
        else:
            height_ratio = (max_height - self.height) / (max_height - min_height)
        rating += height_ratio * 15

        # Weight
        if self.position in ['CB', 'CDM', 'GK']:
            weight_ratio = (max_weight - self.weight) / (max_weight - min_weight)
        else:
            weight_ratio = (self.weight - min_weight) / (max_weight - min_weight)
        rating += weight_ratio * 10

        # Twitter followers
        followers_ratio = (self.twitter_followers - min_twitter_followers) / (max_twitter_followers - min_twitter_followers)
        rating += followers_ratio * 15

        # Birth year
        age_ratio = (max_birth_year - self.birth_year) / (max_birth_year - min_birth_year)
        rating += age_ratio * 10

        # Nation Ranking

        # get nation ranking from NationRanking model
        # Clamp rating within the range of 20-100
        rating = max(20, min(100, rating))

        return int(round(rating))


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
    description = models.CharField(max_length=60)

    def __str__(self):
        return self.description

class Game(models.Model):
    uid = models.AutoField(primary_key=True)
    season_uid = models.ForeignKey(Season, on_delete=models.CASCADE)
    home_team_uid = models.ForeignKey(
        Nation, on_delete=models.CASCADE, related_name='home_team_uid')
    away_team_uid = models.ForeignKey(
        Nation, on_delete=models.CASCADE, related_name='away_team_uid')
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


class PlayerTransfer(models.Model):
    uid = models.AutoField(primary_key=True)
    player_uid = models.ForeignKey(Player, on_delete=models.CASCADE)
    from_team_uid = models.ForeignKey(
        Nation, on_delete=models.CASCADE, related_name='from_team_uid')
    to_team_uid = models.ForeignKey(
        Nation, on_delete=models.CASCADE, related_name='to_team_uid')
    transfer_fee = models.IntegerField()
    transfer_date = models.DateField()

    def __str__(self):
        return self.player_uid + " transferred from " + self.from_team_uid + " to " + self.to_team_uid + " for " + self.transfer_fee
