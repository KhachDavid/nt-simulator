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

    def frontend_dict(self):
        return {
            "uid": self.uid,
            "Country": self.name,
            "Continent": self.continent,
            "Population": self.population,
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
        max_goals = 50
        max_assists = 50
        max_pc_level = 100
        max_height = 200
        max_weight = 100

        # max followers is 100 million
        max_followers = 1000000
        max_age = 40

        normalized_goals = self.goals / max_goals
        normalized_assists = self.assists / max_assists
        normalized_pc_level = self.pc_level  / max_pc_level
        normalized_height = self.height / max_height

        # for weight lower is better
        normalized_weight = 1 - (self.weight / max_weight)

        normalized_followers = self.twitter_followers / max_followers

        # for age lower closer to 27 is better
        normalized_age = 1 - (self.get_age() / max_age)


        rating = (normalized_followers * 0.3 + normalized_assists * 0.2 +
                  normalized_pc_level * 0.15 + normalized_height * 0.1 +
                  normalized_weight * 0.1 + normalized_goals * 0.05 +
                  normalized_age * 0.1) * 80 + 20

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
    description = models.CharField(max_length=50)

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
