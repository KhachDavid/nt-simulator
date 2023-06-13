from django.db import models
import datetime
import math
# Create your models here.

# create a dictionary for player rating caps
   # cap based on position, weight, height, and pc level (range from 0-100 group by 10)
   # put them in conjuction. pairs would be (position, weight), (position, height), (pc_level)
   # position and weight

# create a dictionary for player rating caps
pos_caps = {
    "GK": {
        "Weight": {
            "60-70": 99,
            "71-80": 97,
            "81-90": 95,
            "91-100": 91,
        },
        "Height": {
            "160-170": 83,
            "171-180": 87,
            "181-190": 99,
            "191-200": 99,
        },
    },
    "RB": {
        "Weight": {
            "60-70": 99,
            "71-80": 99,
            "81-90": 99,
            "91-100": 99,
        },
        "Height": {
            "160-170": 99,
            "171-180": 99,
            "181-190": 99,
            "191-200": 99,
        },
    },
    "CB": {
        "Weight": {
            "60-70": 91,
            "71-80": 95,
            "81-90": 99,
            "91-100": 99,
        },
        "Height": {
            "160-170": 91,
            "171-180": 95,
            "181-190": 99,
            "191-200": 99,
        },
    },
    "LB": {
        "Weight": {
            "60-70": 99,
            "71-80": 99,
            "81-90": 99,
            "91-100": 99,
        },
        "Height": {
            "160-170": 99,
            "171-180": 99,
            "181-190": 99,
            "191-200": 99,
        },
    },
    "CDM": {
        "Weight": {
            "60-70": 99,
            "71-80": 99,
            "81-90": 99,
            "91-100": 99,
        },
        "Height": {
            "160-170": 99,
            "171-180": 99,
            "181-190": 99,
            "191-200": 99,
        },
    },
    "DM": {
        "Weight": {
            "60-70": 99,
            "71-80": 99,
            "81-90": 99,
            "91-100": 99,
        },
        "Height": {
            "160-170": 99,
            "171-180": 99,
            "181-190": 99,
            "191-200": 99,
        },
    },
    "CM": {
        "Weight": {
            "60-70": 99,
            "71-80": 99,
            "81-90": 99,
            "91-100": 99,
        },
        "Height": {
            "160-170": 99,
            "171-180": 99,
            "181-190": 99,
            "191-200": 99,
        },
    },
    "CAM": {
        "Weight": {
            "60-70": 99,
            "71-80": 99,
            "81-90": 99,
            "91-100": 99,
        },
        "Height": {
            "160-170": 99,
            "171-180": 99,
            "181-190": 99,
            "191-200": 99,
        },
    },
    "AM": {
        "Weight": {
            "60-70": 99,
            "71-80": 99,
            "81-90": 97,
            "91-100": 95,
        },
        "Height": {
            "160-170": 99,
            "171-180": 99,
            "181-190": 97,
            "191-200": 95,
        },
    },
    "RW": {
        "Weight": {
            "60-70": 99,
            "71-80": 99,
            "81-90": 99,
            "91-100": 99,
        },
        "Height": {
            "160-170": 99,
            "171-180": 99,
            "181-190": 99,
            "191-200": 99,
        },
    },
    "ST": {
        "Weight": {
            "60-70": 99,
            "71-80": 99,
            "81-90": 99,
            "91-100": 99,
        },
        "Height": {
            "160-170": 99,
            "171-180": 99,
            "181-190": 99,
            "191-200": 99,
        },
    },
    "LW": {
        "Weight": {
            "60-70": 99,
            "71-80": 99,
            "81-90": 97,
            "91-100": 95,
        },
        "Height": {
            "160-170": 99,
            "171-180": 99,
            "181-190": 97,
            "191-200": 95,
        },
    },
    "CF": {
        "Weight": {
            "60-70": 99,
            "71-80": 99,
            "81-90": 97,
            "91-100": 95,
        },
        "Height": {
            "160-170": 99,
            "171-180": 99,
            "181-190": 97,
            "191-200": 95,
        },
    },
    "LM": {
        "Weight": {
            "60-70": 99,
            "71-80": 99,
            "81-90": 97,
            "91-100": 95,
        },
        "Height": {
            "160-170": 99,
            "171-180": 99,
            "181-190": 97,
            "191-200": 95,
        },
    },
    "RM": {
        "Weight": {
            "60-70": 99,
            "71-80": 99,
            "81-90": 97,
            "91-100": 95,
        },
        "Height": {
            "160-170": 99,
            "171-180": 99,
            "181-190": 97,
            "191-200": 95,
        },
    },
}

pc_level_caps = {
    "1": 69,
    "2": 74,
    "3": 79,
    "4": 79,
    "5": 80,
    "6": 81,
    "7": 86,
    "8": 90,
    "9": 93,
    "10": 94,
    "11": 98,
}


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
    rating = models.IntegerField(default=0)

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
        # twitter followers (0 - 10000000) - 62%
        # goals/assists - 7 
        # country ranking (1-199) - 20%
        # birth year (normal distribution) (1980-2010) - 10%     

        # twitter followers
        twitter_followers = self.twitter_followers
        twitter_followers_rating = 0
        if twitter_followers < 1000000:
            twitter_followers_rating = twitter_followers * 0.000062
        else:
            twitter_followers_rating = 62

        # goals/assists
        goals = self.goals
        assists = self.assists
        goals_assists_rating = (goals + assists) * 0.07
        # max at 7% 
        goals_assists_rating = min(goals_assists_rating, 7)

        # country ranking
        country_ranking = self.nation.rank
        country_ranking_rating = max((200 - country_ranking) * 0.1, 20)

        # birth year
        age = self.get_age()

        # normal distribution and 28 gets 10%
        birth_year_rating = 10 * math.exp(-0.5 * ((age - 28) / 5) ** 2)

        # calculate rating
        rating = twitter_followers_rating + goals_assists_rating + \
            country_ranking_rating + birth_year_rating

        # cap based on position, weight, height, and pc level (range from 0-100 group by 10)

        # put them in conjuction. pairs would be (position, weight), (position, height), (pc_level)

        # position and weight
        # use the dictionaries above to find the cap
        # "GK": {
        #    "Weight": {
        #        "60-70": 99,
        #        "71-80": 97,
        #        "81-90": 95,
        #        "91-100": 91,
        #    },
        #    "Height": {
        #        "160-170": 83,
        #        "171-180": 87,
        #        "181-190": 99,
        #        "191-200": 99,
        #    },
        #},
        # for each position we have that range of weight and height
        # if the player is in that range, then we cap the rating at that value
        
        weight_cap = pos_caps[self.position]["Weight"]
        height_cap = pos_caps[self.position]["Height"]
        
        # each of them has a range as a key and a cap as a value
        # we need to find the range that the player is in
        # then we cap the rating at that value

        # weight
        for key, value in weight_cap.items():
            # key is the range
            # value is the cap
            # we need to split the key into two numbers
            # then we need to check if the weight is in that range
            # if it is, then we cap the rating at that value
            # if it isn't, then we continue
            # split the key into two numbers
            range = key.split("-")
            # range[0] is the lower bound
            # range[1] is the upper bound
            if self.weight >= int(range[0]) and self.weight <= int(range[1]):
                # we are in the range
                # cap the rating
                rating = min(rating, value)
                break
        
        # height
        for key, value in height_cap.items():
            # key is the range
            # value is the cap
            # we need to split the key into two numbers
            # then we need to check if the height is in that range
            # if it is, then we cap the rating at that value
            # if it isn't, then we continue
            # split the key into two numbers
            range = key.split("-")
            # range[0] is the lower bound
            # range[1] is the upper bound
            if self.height >= int(range[0]) and self.height <= int(range[1]):
                # we are in the range
                # cap the rating
                rating = min(rating, value)
                break

        # pc level
        for key, value in pc_level_caps.items():
            #"1": 69,
            #"2": 74,
            #"3": 79,
            #"4": 79,
            #"5": 80,
            #"6": 81,
            #"7": 86,
            #"8": 90,
            #"9": 93,
            #"10": 94,
            #"11": 98,

            # key is the pc level
            # value is the cap
            # we need to check if the pc level is in that range
            # if it is, then we cap the rating at that value
            # if it isn't, then we continue

            if self.pc_level == int(key):
                # we are in the range
                # cap the rating
                rating = min(rating, value)
                break

        return int(rating)

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
