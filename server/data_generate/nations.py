import random
import django
import os
import sys
nations_fifa = [
    # country, continent, population, capital, stability, corruption, fanbase level, name generator, conversion option
    ['Afghanistan', 'Asia', 37172386, 'Kabul',
        'volatile', 'high', 'low', ['fa_IR'], 'chat_gpt'],
    ['Albania', 'Europe', 2866376, 'Tirana',
        'calm', 'high', 'high', ['tr_TR'], 'ascii'],
    ['Algeria', 'Africa', 42228429, 'Algiers', 'moderate',
        'high', 'high', ['ar_AA'], 'chat_gpt'],
    ['Andorra', 'Europe', 77006, 'Andorra la Vella',
        'calm', 'low', 'low', ['es_ES'], 'none'],
    ['Angola', 'Africa', 30809762, 'Luanda', 'moderate',
        'high', 'high', ['pt_PT', 'tw_GH'], 'none'],
    ['Antigua and Barbuda', 'North America', 96286,
        "Saint John's", 'calm', 'low', 'low', ['en_US'], 'none'],
    ['Argentina', 'South America', 44494502,
        'Buenos Aires', 'volatile', 'high', 'high', ['es_ES', 'es_MX', 'es_CO', ], 'none'],
    ['Armenia', 'Europe', 2951776, 'Yerevan',
        'moderate', 'high', 'high', ['hy_AM'], 'ascii'],
    ['Australia', 'Asia', 24992369, 'Canberra', 'calm',
        'low', 'moderate', ['en_NZ', 'en_GB'], 'none'],
    ['Austria', 'Europe', 8847037, 'Vienna', 'calm',
        'low', 'high', ['de_AT', 'de_DE'], 'none'],
    ['Azerbaijan', 'Europe', 9942334, 'Baku', 'moderate',
        'high', 'moderate', ['az_AZ'], 'none'],
    ['Bahamas', 'North America', 385640, 'Nassau',
        'calm', 'low', 'low', ['en_US'], 'none'],
    ['Bahrain', 'Asia', 1569439, 'Manama', 'calm',
        'low', 'low', ['ar_AA'], 'chat_gpt'],
    ['Bangladesh', 'Asia', 164689383, 'Dhaka',
        'volatile', 'high', 'low', ['bn_BD'], 'ascii'],
    ['Barbados', 'North America', 286641, 'Bridgetown',
        'calm', 'low', 'low', ['en_US'], 'none'],
    ['Belarus', 'Europe', 9449323, 'Minsk', 'volatile',
        'high', 'moderate', ['ru_RU'], 'ascii'],
    ['Belgium', 'Europe', 11319511, 'Brussels', 'calm',
        'low', 'high', ['nl_NL', 'fr_FR'], 'none'],
    ['Belize', 'North America', 383071, 'Belmopan',
        'calm', 'low', 'low', ['en_US'], 'none'],
    ['Benin', 'Africa', 11485048, 'Porto-Novo', 'moderate',
        'high', 'high', ['fr_FR', 'tw_GH'], 'none'],
    ['Bhutan', 'Asia', 807610, 'Thimphu', 'calm', 'low', 'low', 'en_IN', 'none'],
    ['Bolivia', 'South America', 11353142, 'Sucre', 'moderate',
        'high', 'high', ['es_ES', 'es_MX', 'es_CO', ], 'none'],
    ['Bosnia and Herzegovina', 'Europe', 3280819,
        'Sarajevo', 'volatile', 'high', 'high', ['hr_HR', 'tr_TR'], 'none'],
    ['Botswana', 'Africa', 2351627, 'Gaborone', 'calm',
        'low', 'low', ['tw_GH', 'de_DE', 'en_US'], 'none'],
    ['Brazil', 'South America', 209469333, 'Brasília',
        'moderate', 'high', 'high', ['pt_BR'], 'none'],
    ['Brunei', 'Asia', 428962, 'Bandar Seri Begawan',
        'moderate', 'high', 'low', ['or_IN'], 'ascii'],
    ['Bulgaria', 'Europe', 6948445, 'Sofia',
        'volatile', 'high', 'high', ['bg_BG'], 'ascii'],
    ['Burkina Faso', 'Africa', 19751535, 'Ouagadougou',
        'moderate', 'high', 'high', ['fr_FR', 'tw_GH'], 'none'],
    ['Burundi', 'Africa', 11890784, 'Bujumbura', 'moderate',
        'high', 'high', ['fr_FR', 'tw_GH'], 'none'],
    ['Cabo Verde', 'Africa', 555987, 'Praia', 'calm',
        'low', 'high', ['pt_PT', 'tw_GH', 'pt_BR'], 'none'],
    ['Cambodia', 'Asia', 16249798, 'Phnom Penh',
        'moderate', 'high', 'low', ['en_TH'], 'none'],
    ['Cameroon', 'Africa', 26545864, 'Yaoundé', 'moderate',
        'high', 'high', ['fr_FR', 'tw_GH'], 'none'],
    ['Canada', 'North America', 37058856, 'Ottawa', 'calm',
        'low', 'moderate', ['en_CA', 'en_US'], 'none'],
    ['Central African Republic', 'Africa', 4659080,
        'Bangui', 'moderate', 'high', 'high', ['fr_FR', 'tw_GH'], 'none'],
    ['Chad', 'Africa', 15477751, "N'Djamena", 'moderate',
        'high', 'high', ['fr_FR', 'tw_GH'], 'none'],
    ['Chile', 'South America', 18191900, 'Santiago', 'volatile',
        'high', 'high', ['es_ES', 'es_MX', 'es_CO', ], 'none'],
    ['China', 'Asia', 1392730000, 'Beijing',
        'moderate', 'high', 'low', ['zh_CN'], 'ascii'],
    ['Colombia', 'South America', 49648685, 'Bogotá',
        'moderate', 'high', 'high', ['es_CO'], 'none'],
    ['Comoros', 'Africa', 869601, 'Moroni', 'moderate',
        'high', 'high', ['fr_FR', 'tw_GH'], 'none'],
    ['Republic of the Congo', 'Africa', 5260750,
        'Brazzaville', 'moderate', 'high', 'high', ['fr_FR', 'tw_GH'], 'none'],
    ['Democratic Republic of the Congo', 'Africa',
        86790567, 'Kinshasa', 'moderate', 'high', 'high', ['fr_FR', 'tw_GH'], 'none'],
    ['Costa Rica', 'North America', 4999441, 'San José', 'calm',
        'low', 'high', ['es_ES', 'es_MX', 'es_CO', ], 'none'],
    ["Côte d'Ivoire", 'Africa', 26378274,
        'Yamoussoukro', 'moderate', 'high', 'high', ['fr_FR', 'tw_GH'], 'none'],
    ['Croatia', 'Europe', 4105267, 'Zagreb',
        'volatile', 'high', 'high', ['hr_HR'], 'none'],
    ['Cuba', 'North America', 11326616, 'Havana', 'volatile',
        'high', 'high', ['es_ES', 'es_MX', 'es_CO', ], 'none'],
    ['Cyprus', 'Europe', 1207359, 'Nicosia',
        'moderate', 'high', 'high', ['el_GR'], 'ascii'],
    ['Czech Republic', 'Europe', 10629928, 'Prague',
        'calm', 'low', 'high', ['cs_CZ'], 'none'],
    ['Denmark', 'Europe', 5792202, 'Copenhagen',
        'calm', 'low', 'high', ['da_DK'], 'none'],
    ['Djibouti', 'Africa', 988000, 'Djibouti', 'moderate',
        'high', 'low', ['fr_FR', 'tw_GH'], 'none'],
    ['Dominica', 'North America', 71986, 'Roseau', 'calm', 'low',
        'low', ['en_US', 'es_ES', 'es_MX', 'es_CO', ], 'none'],
    ['Dominican Republic', 'North America', 10847910,
        'Santo Domingo', 'moderate', 'high', 'high', ['es_ES', 'es_MX', 'es_CO', ], 'none'],
    ['Ecuador', 'South America', 17643054, 'Quito', 'moderate',
        'high', 'high', ['es_ES', 'es_MX', 'es_CO', ], 'none'],
    ['Egypt', 'Africa', 98423595, 'Cairo', 'volatile',
        'high', 'high', ['ar_AA'], 'chat_gpt'],
    ['El Salvador', 'North America', 6486205,
        'San Salvador', 'moderate', 'high', 'high', ['es_ES', 'es_MX', 'es_CO', ], 'none'],
    ['Equatorial Guinea', 'Africa', 1308974, 'Malabo',
        'moderate', 'high', 'high', ['tw_GH', 'es_ES'], 'none'],
    ['Eritrea', 'Africa', 3546421, 'Asmara', 'volatile',
        'high', 'high', ['ar_AA'], 'chat_gpt'],
    ['Estonia', 'Europe', 1326535, 'Tallinn', 'calm',
        'low', 'moderate', ['et_EE'], 'none'],
    ['Eswatini', 'Africa', 1160164, 'Mbabane', 'calm',
        'low', 'low', ['en_GB', 'tw_GH', 'en_US'], 'none'],
    ['Ethiopia', 'Africa', 114963588, 'Addis Ababa', 'volatile',
        'high', 'low', ['ar_AA', 'he_IL'], 'chat_gpt'],
    ['Fiji', 'Oceania', 896445, 'Suva', 'moderate',
        'high', 'low', ['en_US', 'en_GB'], 'none'],
    ['Finland', 'Europe', 5540720, 'Helsinki',
        'calm', 'low', 'high', ['fi_FI'], 'none'],
    ['France', 'Europe', 65273511, 'Paris',
        'calm', 'low', 'high', ['fr_FR'], 'none'],
    ['Gabon', 'Africa', 2119275, 'Libreville', 'moderate',
        'high', 'high', ['fr_FR', 'tw_GH'], 'none'],
    ['Gambia', 'Africa', 2416668, 'Banjul', 'moderate',
        'high', 'high', ['fr_FR', 'tw_GH'], 'none'],
    ['Georgia', 'Europe', 3989167, 'Tbilisi',
        'volatile', 'high', 'high', ['ka_GE'], 'ascii'],
    ['Germany', 'Europe', 83783942, 'Berlin',
        'calm', 'low', 'high', ['de_DE'], 'none'],
    ['Ghana', 'Africa', 31072940, 'Accra', 'moderate',
        'high', 'high', ['en_GB', 'tw_GH', 'en_US'], 'none'],
    ['Greece', 'Europe', 10423054, 'Athens',
        'volatile', 'high', 'high', ['el_GR'], 'ascii'],
    ['Grenada', 'North America', 112523, "St. George's", 'calm',
        'low', 'low', ['en_US', 'es_ES', 'es_MX', 'es_CO', ], 'none'],
    ['Guatemala', 'North America', 17915568,
        'Guatemala City', 'moderate', 'high', 'high', ['es_ES', 'es_MX', 'es_CO', ], 'none'],
    ['Guinea', 'Africa', 13132795, 'Conakry', 'moderate',
        'high', 'high', ['fr_FR', 'tw_GH'], 'none'],
    ['Guinea-Bissau', 'Africa', 1968001, 'Bissau', 'moderate',
        'high', 'high', ['fr_FR', 'tw_GH'], 'none'],
    ['Guyana', 'South America', 786552, 'Georgetown', 'moderate',
        'high', 'high', ['en_US', 'en_GB', 'fr_FR'],  'none'],
    ['Haiti', 'North America', 11402528,
        'Port-au-Prince', 'volatile', 'high', 'high', ['es_ES', 'fr_FR'], 'none'],
    ['Honduras', 'North America', 9904607,
        'Tegucigalpa', 'moderate', 'high', 'high', ['es_ES', 'es_MX', 'es_CO', ], 'none'],
    ['Hungary', 'Europe', 9660351, 'Budapest',
        'volatile', 'high', 'high', ['hu_HU'], 'none'],
    ['Iceland', 'Europe', 341243, 'Reykjavík',
        'calm', 'low', 'high', ['sv_SE'], 'none'],
    ['India', 'Asia', 1380004385, 'New Delhi',
        'volatile', 'high', 'low', ['en_IN'], 'none'],
    ['Indonesia', 'Asia', 273523615, 'Jakarta',
        'volatile', 'high', 'low', ['id_ID'], 'none'],
    ['Iran', 'Asia', 83992949, 'Tehran', 'volatile',
        'high', 'high', ['fa_IR'], 'chat_gpt'],
    ['Iraq', 'Asia', 40222493, 'Baghdad', 'volatile',
        'high', 'low', ['ar_AA'], 'chat_gpt'],
    ['Ireland', 'Europe', 4937786, 'Dublin',
        'calm', 'low', 'high', ['en_IE'], 'none'],
    ['Israel', 'Europe', 8655535, 'Jerusalem', 'volatile',
        'high', 'high', ['he_IL'], 'chat_gpt'],
    ['Italy', 'Europe', 60461826, 'Rome', 'moderate',
        'high', 'high', ['it_IT'], 'none'],
    ['Jamaica', 'North America', 2961167, 'Kingston', 'moderate', 'high',
        'high', ['en_US', 'en_GB', 'es_ES', 'es_MX', 'es_CO', ], 'none'],
    ['Japan', 'Asia', 126476461, 'Tokyo', 'moderate',
        'high', 'high', ['ja_JP'], 'google_translate'],
    ['Jordan', 'Asia', 10203134, 'Amman', 'volatile',
        'high', 'high', ['ar_AA'], 'chat_gpt'],
    ['Kazakhstan', 'Asia', 18776707, 'Astana',
        'volatile', 'high', 'high', ['ru_RU'], 'ascii'],
    ['Kenya', 'Africa', 53771296, 'Nairobi', 'volatile',
        'high', 'high', ['en_GB', 'tw_GH', 'en_US'], 'none'],
    ['Kiribati', 'Oceania', 119449, 'South Tarawa',
        'calm', 'low', 'low', ['en_US', 'en_GB'], 'none'],
    ['Kosovo', 'Europe', 1895250, 'Pristina', 'volatile',
        'high', 'high', ['hr_HR', 'tr_TR'], 'none'],
    ['Kuwait', 'Asia', 4270571, 'Kuwait City', 'volatile',
        'high', 'high', ['ar_AA'], 'chat_gpt'],
    ['Kyrgyzstan', 'Asia', 6524195, 'Bishkek',
        'moderate', 'high', 'high', ['ru_RU'], 'ascii'],
    ['Laos', 'Asia', 7275560, 'Vientiane', 'moderate',
        'high', 'high', ['id_ID'], 'none'],
    ['Latvia', 'Europe', 1886198, 'Riga', 'calm', 'low', 'low', ['lv_LV'], 'none'],
    ['Lebanon', 'Asia', 6825445, 'Beirut', 'volatile',
        'high', 'moderate', ['ar_AA'], 'chat_gpt'],
    ['Lesotho', 'Africa', 2142249, 'Maseru', 'moderate',
        'high', 'high', ['en_GB', 'tw_GH', 'en_US'], 'none'],
    ['Liberia', 'Africa', 5057681, 'Monrovia', 'moderate',
        'high', 'high', ['en_GB', 'tw_GH', 'en_US'], 'none'],
    ['Libya', 'Africa', 6871292, 'Tripoli', 'volatile',
        'high', 'high', ['ar_AA'], 'chat_gpt'],
    ['Liechtenstein', 'Europe', 38128, 'Vaduz',
        'calm', 'low', 'low', ['de_DE'], 'none'],
    ['Lithuania', 'Europe', 2722289, 'Vilnius',
        'calm', 'low', 'low', ['lt_LT'], 'none'],
    ['Luxembourg', 'Europe', 625978, 'Luxembourg',
        'calm', 'low', 'high', ['de_DE'], 'none'],
    ['Madagascar', 'Africa', 27691018, 'Antananarivo',
        'volatile', 'high', 'high', ['pt_PT', 'tw_GH'], 'none'],
    ['Malawi', 'Africa', 19129952, 'Lilongwe', 'volatile',
        'high', 'low', ['en_GB', 'tw_GH', 'en_US'], 'none'],
    ['Malaysia', 'Asia', 32365999, 'Kuala Lumpur', 'moderate',
        'high', 'low', ['zh_CN', 'zh_TW', 'en_IN', 'id_ID'], 'none'],
    ['Maldives', 'Asia', 540544, 'Malé', 'moderate',
        'high', 'low', ['en_US', 'en_GB'], 'none'],
    ['Mali', 'Africa', 20250833, 'Bamako', 'volatile',
        'high', 'high', ['fr_FR', 'tw_GH'], 'none'],
    ['Malta', 'Europe', 441543, 'Valletta', 'calm',
        'low', 'high', ['en_GB', 'it_IT'], 'none'],
    ['Marshall Islands', 'Oceania', 59190, 'Majuro',
        'calm', 'low', 'low', ['en_US', 'en_GB'], 'none'],
    ['Mauritania', 'Africa', 4649658, 'Nouakchott',
        'volatile', 'high', 'high', ['ar_AA'], 'chat_gpt'],
    ['Mauritius', 'Africa', 1271768, 'Port Louis',
        'calm', 'low', 'low', ['en_IN'], 'none'],
    ['Mexico', 'North America', 128932753,
        'Mexico City', 'moderate', 'high', 'high', ['es_MX'], 'none'],
    ['Micronesia', 'Oceania', 548914, 'Palikir', 'calm',
        'low', 'low', ['en_US', 'en_GB'], 'none'],
    ['Moldova', 'Europe', 4033963, 'Chișinău',
        'volatile', 'high', 'high', ['ro_RO'], 'none'],
    ['Monaco', 'Europe', 39242, 'Monaco', 'calm', 'low', 'low', ['fr_FR'], 'none'],
    ['Mongolia', 'Asia', 3278290, 'Ulan Bator', 'moderate',
        'high', 'moderate', ['ru_RU'], 'ascii'],
    ['Montenegro', 'Europe', 628066, 'Podgorica',
        'calm', 'low', 'high', ['hr_HR'], 'none'],
    ['Morocco', 'Africa', 36910560, 'Rabat', 'volatile',
        'high', 'high', ['ar_AA'], 'chat_gpt'],
    ['Mozambique', 'Africa', 31255435, 'Maputo', 'volatile',
        'high', 'high', ['pt_PT', 'tw_GH'], 'none'],
    ['Myanmar', 'Asia', 54409800, 'Naypyidaw',
        'volatile', 'high', 'low', ['id_ID'], 'none'],
    ['Namibia', 'Africa', 2540905, 'Windhoek', 'moderate',
        'high', 'low', ['en_GB', 'tw_GH', 'en_US'], 'none'],
    ['Nauru', 'Oceania', 10824, 'Yaren District', 'calm',
        'low', 'low', ['en_US', 'en_GB'], 'none'],
    ['Nepal', 'Asia', 29136808, 'Kathmandu',
        'volatile', 'high', 'high', ['ne_NP'], 'none'],
    ['Netherlands', 'Europe', 17134872, 'Amsterdam',
        'calm', 'low', 'high', ['nl_NL'], 'none'],
    ['New Zealand', 'Oceania', 4822233, 'Wellington',
        'calm', 'low', 'low', ['en_NZ'], 'none'],
    ['Nicaragua', 'North America', 6624554, 'Managua',
        'moderate', 'high', 'high', ['es_MX', 'es_ES'], 'none'],
    ['Niger', 'Africa', 24206644, 'Niamey', 'volatile',
        'high', 'high', ['fr_FR', 'tw_GH'], 'none'],
    ['Nigeria', 'Africa', 206139587, 'Abuja', 'volatile',
        'high', 'high', ['en_GB', 'tw_GH', 'en_US'], 'none'],
    ['North Korea', 'Asia', 25778816, 'Pyongyang',
        'volatile', 'high', 'low', ['ko_KR'], 'ascii'],
    ['North Macedonia', 'Europe', 2083374, 'Skopje',
        'volatile', 'high', 'high', ['sl_SI'], 'none'],
    ['Norway', 'Europe', 5421241, 'Oslo', 'calm', 'low', 'high', ['no_NO'], 'none'],
    ['Oman', 'Asia', 5106626, 'Muscat', 'volatile',
        'high', 'low', ['ar_AA'], 'chat_gpt'],
    ['Pakistan', 'Asia', 220892340, 'Islamabad',
        'volatile', 'high', 'low', ['en_IN'], 'none'],
    ['Palau', 'Oceania', 18094, 'Ngerulmud', 'calm',
        'low', 'low', ['en_US', 'en_GB'], 'none'],
    ['Panama', 'North America', 4314767,
        'Panama City', 'moderate', 'high', 'moderate', ['es_MX', 'es_ES', 'en_US'], 'none'],
    ['Papua New Guinea', 'Oceania', 8947024,
        'Port Moresby', 'volatile', 'high', 'low', ['en_US', 'en_GB'], 'none'],
    ['Paraguay', 'South America', 7132538, 'Asunción',
        'moderate', 'high', 'high', ['es_MX', 'es_ES'], 'none'],
    ['Peru', 'South America', 32971854, 'Lima', 'moderate',
        'high', 'high', ['es_MX', 'es_ES', 'es_CO', ], 'none'],
    ['Philippines', 'Asia', 109581078, 'Manila', 'volatile', 'high',
        'low', ['name', 'en_US', 'last_name', 'es_ES'], 'none'],
    ['Poland', 'Europe', 37846611, 'Warsaw',
        'calm', 'high', 'high', ['pl_PL'], 'none'],
    ['Portugal', 'Europe', 10196709, 'Lisbon',
        'calm', 'low', 'high', ['pt_PT'], 'none'],
    ['Qatar', 'Asia', 2881053, 'Doha', 'moderate',
        'high', 'low', ['ar_AA'], 'chat_gpt'],
    ['Romania', 'Europe', 19237691, 'Bucharest',
        'volatile', 'high', 'high', ['ro_RO'], 'none'],
    ['Russia', 'Europe', 145934462, 'Moscow',
        'volatile', 'high', 'high', ['ru_RU'], 'ascii'],
    ['Rwanda', 'Africa', 12952218, 'Kigali', 'volatile',
        'high', 'high', ['fr_FR', 'en_GB', 'en_US'], 'none'],
    ['Saint Kitts and Nevis', 'North America',
        53199, 'Basseterre', 'calm', 'low', 'low', ['en_US', 'en_GB'], 'none'],
    ['Saint Lucia', 'North America', 183629, 'Castries',
        'calm', 'low', 'low', ['en_US', 'en_GB'], 'none'],
    ['Saint Vincent and the Grenadines',
        'North America', 110210, 'Kingstown', 'calm', 'low', 'low', ['en_US', 'en_GB'], 'none'],
    ['Samoa', 'Oceania', 198414, 'Apia', 'calm',
        'low', 'low', ['en_US', 'en_GB'], 'none'],
    ['San Marino', 'Europe', 33931, 'San Marino',
        'calm', 'low', 'low', ['it_IT'], 'none'],
    ['Sao Tome and Principe', 'Africa', 219159, 'São Tomé',
        'calm', 'low', 'low', ['pt_PT', 'tw_GH'], 'none'],
    ['Saudi Arabia', 'Asia', 34813871, 'Riyadh',
        'volatile', 'high', 'high', ['ar_AA'], 'chat_gpt'],
    ['Senegal', 'Africa', 16743927, 'Dakar', 'volatile', 'high',
        'high', ['fr_FR', 'tw_GH', 'en_GB', 'en_US'], 'none'],
    ['Serbia', 'Europe', 8737371, 'Belgrade',
        'volatile', 'high', 'high', ['hr_HR'], 'none'],
    ['Seychelles', 'Africa', 98347, 'Victoria', 'calm',
        'low', 'low', ['fr_FR', 'en_GB', 'en_US'], 'none'],
    ['Sierra Leone', 'Africa', 7976983, 'Freetown', 'volatile',
        'high', 'high', ['en_GB', 'en_US'], 'none'],
    ['Singapore', 'Asia', 5850342, 'Singapore', 'moderate',
        'high', 'low', ['en_US', 'en_GB', 'en_IN'], 'none'],
    ['Slovakia', 'Europe', 5459642, 'Bratislava',
        'calm', 'low', 'high', ['sl_SI'], 'none'],
    ['Slovenia', 'Europe', 2078938, 'Ljubljana',
        'calm', 'low', 'high', ['sl_SI'], 'none'],
    ['Solomon Islands', 'Oceania', 686884, 'Honiara',
        'calm', 'low', 'low', ['en_US', 'en_GB'], 'none'],
    ['Somalia', 'Africa', 15893222, 'Mogadishu',
        'volatile', 'high', 'high', ['ar_AA'], 'chat_gpt'],
    ['South Africa', 'Africa', 59308690, 'Pretoria',
        'volatile', 'high', 'high', ['en_GB', 'en_US'], 'none'],
    ['South Korea', 'Asia', 51269185, 'Seoul', 'volatile',
        'high', 'moderate', ['ko_KR'], 'ascii'],
    ['South Sudan', 'Africa', 11193725, 'Juba', 'volatile',
        'high', 'high', ['en_GB', 'en_US'], 'none'],
    ['Spain', 'Europe', 46754778, 'Madrid',
        'moderate', 'high', 'high', ['es_ES'], 'none'],
    ['Sri Lanka', 'Asia', 21413249,
        'Sri Jayawardenepura Kotte', 'volatile', 'high', 'low', ['en_IN'], 'none'],
    ['Sudan', 'Africa', 43849260, 'Khartoum', 'volatile',
        'high', 'high', ['ar_AA'], 'chat_gpt'],
    ['Suriname', 'South America', 586632, 'Paramaribo',
        'moderate', 'high', 'high', ['nl_NL'], 'none'],
    ['Sweden', 'Europe', 10099265, 'Stockholm',
        'calm', 'low', 'high', ['sv_SE'], 'none'],
    ['Switzerland', 'Europe', 8654622, 'Bern',
        'calm', 'low', 'high', ['de_CH'], 'none'],
    ['Syria', 'Asia', 17500658, 'Damascus', 'volatile',
        'high', 'high', ['ar_AA', 'ar_PS'], 'chat_gpt'],
    ['Taiwan', 'Asia', 23816775, 'Taipei', 'volatile',
        'high', 'low', ['zh_TW'], 'ascii'],
    ['Tajikistan', 'Asia', 9537645, 'Dushanbe',
        'volatile', 'high', 'low', ['ru_RU'], 'ascii'],
    ['Tanzania', 'Africa', 59734218, 'Dodoma', 'volatile',
        'high', 'high', ['en_GB', 'en_US'], 'none'],
    ['Thailand', 'Asia', 69799978, 'Bangkok',
        'moderate', 'high', 'low', ['en_TH'], 'none'],
    ['Timor-Leste', 'Asia', 1318445, 'Dili', 'volatile',
        'high', 'low', ['pt_PT', 'tw_GH'], 'none'],
    ['Togo', 'Africa', 8278724, 'Lomé', 'volatile', 'high',
        'high', ['fr_FR', 'en_GB', 'en_US'], 'none'],
    ['Tonga', 'Oceania', 105695, "Nuku'alofa", 'calm',
        'low', 'low', ['en_US', 'en_GB'], 'none'],
    ['Trinidad and Tobago', 'North America', 1399488,
        'Port of Spain', 'moderate', 'high', 'low', ['en_US', 'en_GB'], 'none'],
    ['Tunisia', 'Africa', 11818619, 'Tunis', 'moderate',
        'high', 'high', ['ar_AA'], 'chat_gpt'],
    ['Turkey', 'Asia', 84339067, 'Ankara', 'volatile',
        'high', 'high', ['tr_TR'], 'none'],
    ['Turkmenistan', 'Asia', 6031200, 'Ashgabat',
        'volatile', 'high', 'low', ['ru_RU'], 'ascii'],
    ['Tuvalu', 'Oceania', 11792, 'Funafuti', 'calm',
        'low', 'low', ['en_US', 'en_GB'], 'none'],
    ['Uganda', 'Africa', 45741007, 'Kampala', 'volatile',
        'high', 'high', ['en_GB', 'en_US'], 'none'],
    ['Ukraine', 'Europe', 43733762, 'Kyiv', 'war',
        'high', 'high', ['uk_UA'], 'ascii'],
    ['United Arab Emirates', 'Asia', 9890402,
        'Abu Dhabi', 'moderate', 'high', 'low', ['ar_AA', 'ar_SA'], 'chat_gpt'],
    ['United Kingdom', 'Europe', 67886011, 'London',
        'moderate', 'high', 'high', ['en_GB'], 'none'],
    ['United States', 'North America', 331002651,
        'Washington, D.C.', 'moderate', 'high', 'low', ['en_US'], 'none'],
    ['Uruguay', 'South America', 3473730, 'Montevideo',
        'calm', 'low', 'high', ['es_ES'], 'none'],
    ['Uzbekistan', 'Asia', 33469203, 'Tashkent',
        'volatile', 'high', 'low', ['ru_RU'], 'ascii'],
    ['Vanuatu', 'Oceania', 307145, 'Port Vila', 'calm',
        'low', 'low', ['en_US', 'en_GB'], 'none'],
    ['Vatican City', 'Europe', 801, 'Vatican City',
        'calm', 'low', 'low', ['it_IT'], 'none'],
    ['Venezuela', 'South America', 28435943,
        'Caracas', 'volatile', 'high', 'high', ['es_ES'], 'none'],
    ['Vietnam', 'Asia', 97338579, 'Hanoi', 'volatile',
        'high', 'low', ['zh_TW'], 'ascii'],
    ['Yemen', 'Asia', 29825964, "Sana'a", 'volatile',
        'high', 'low', ['ar_SA'], 'chat_gpt'],
    ['Zambia', 'Africa', 18383955, 'Lusaka', 'volatile',
        'high', 'high', ['en_GB', 'en_US'], 'none'],
    ['Zimbabwe', 'Africa', 14862927, 'Harare', 'volatile',
        'high', 'high', ['en_GB', 'en_US'], 'none'],
]

derbies = [
    ['Argentina', 'Brazil', 'Battle of the Americas'],
    ['Scotland', 'England', 'The Auld Enemy vs The Tartan Army'],
    ['Germany', 'Netherlands', 'The Oranges vs The Bundesteam'],
    ['Italy', 'Spain', 'The Mediterranean Derby'],
    ['Portugal', 'Spain', 'The Iberian War'],
    ['England', 'Germany', 'The Three Lions vs The Bundesteam'],
    ['Brazil', 'Uruguay', 'The Maracanazo'],
    ['Colombia', 'Venezuela', 'The Derby of the Andes'],
    ['Peru', 'Chile', 'The Clásico del Pacífico'],
    ['Mexico', 'United States', 'El Trí vs The Stars and Stripes'],
    ['Costa Rica', 'Panama', 'The Central American Derby'],
    ['Belgium', 'Netherlands', 'The Low Countries Derby'],
    ['Russia', 'Ukraine', 'The Eastern Derby'],
    ['Poland', 'Czech Republic', 'The Central European Derby'],
    ['Croatia', 'Serbia', 'The Balkans Derby'],
    ['Sweden', 'Denmark', 'The Nordic Derby'],
    ['Norway', 'Sweden', 'The Nordic Derby'],
    ['Finland', 'Sweden', 'The Nordic Derby'],
    ['Slovenia', 'Croatia', 'The Balkans Derby'],
    ['Bosnia and Herzegovina', 'Serbia', 'The Balkans Derby'],
    ['Bulgaria', 'Romania', 'The Balkan Derby'],
    ['Armenia', 'Azerbaijan', 'The Caucasus Derby'],
    ['Armenia', 'Georgia', 'The Caucasus Derby'],
    ['Armenia', 'Turkey', 'The Caucasus Derby'],
    ['Georgia', 'Russia', 'The Caucasus Derby'],
    ['Azerbaijan', 'Turkey', 'The Caucasus Derby'],
    ['Iran', 'Turkey', 'The Middle Eastern Derby'],
    ['Iraq', 'Iran', 'The Middle Eastern Derby'],
    ['Syria', 'Turkey', 'The Middle Eastern Derby'],
    ['Lebanon', 'Syria', 'The Middle Eastern Derby'],
    ['Greece', 'Turkey', 'The Eastern Mediterranean Derby'],
    ['Israel', 'Palestine', 'The Holy Land Derby'],
    ['Australia', 'New Zealand', 'The Trans-Tasman Derby'],
    ['Japan', 'South Korea', 'The East Asian Derby'],
    ['China', 'Japan', 'The East Asian Derby'],
    ['India', 'Pakistan', 'The South Asian Derby'],
    ['Indonesia', 'Malaysia', 'The Southeast Asian Derby'],
    ['Thailand', 'Vietnam', 'The Southeast Asian Derby'],
    ['Cambodia', 'Vietnam', 'The Southeast Asian Derby'],
    ['Laos', 'Thailand', 'The Southeast Asian Derby'],
    ['Myanmar', 'Thailand', 'The Southeast Asian Derby'],
    ['Singapore', 'Malaysia', 'The Southeast Asian Derby'],
    ['Philippines', 'Vietnam', 'The Southeast Asian Derby'],
    ['North Korea', 'South Korea', 'The Korean Derby'],
    ['Canada', 'United States', 'The North American Derby'],
    ['Mexico', 'Canada', 'The North American Derby'],
    ['Cuba', 'Haiti', 'The Caribbean Derby'],
    ['Jamaica', 'Trinidad and Tobago', 'The Caribbean Derby'],
]

sys.path.append('..')
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'core.settings')
django.setup()
from base.models import *

def create_player(first_name, last_name, country_name):
    d, created = Player.objects.get_or_create(
                    name=first_name,
                    last_name=last_name,
                    # random position
                    position=random.choice(
                        ['GK', 'CB', 'CB', 'LB', 'RB', 'DM', 'CM', 'LM', 'RM', 'AM', 'ST', 'ST', 'CF']),
                    nation=Nation.objects.get(name=country_name),
                    # random age with certain distribution
                    birth_year=random.choices(
                        population=[1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998,
                                    1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008],
                        weights=[
                            # 19 probabilities must add up to 1
                            0.06, 0.11, 0.01, 0.03, 0.15, 0.02, 0.05, 0.13, 0.07, 0.04, 0.12, 0.09, 0.08, 0.05, 0.02, 0.07, 0.06, 0.04, 0.03
                        ],
                        k=1
                    )[0],
                    height=random.choices(
                        population=[150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174,
                                    175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200],
                        weights=# distribute from 150 to 200 must add up to 1
                        [0.006, 0.008, 0.013, 0.02, 0.03, 0.043, 0.058, 0.073, 0.088, 0.099, 0.106, 0.107, 0.102, 0.093, 0.081, 0.068, 0.054, 0.041, 0.03, 0.021, 0.014, 0.009, 0.005, 0.003, 0.002, 0.002,
                            0.003, 0.005, 0.009, 0.014, 0.021, 0.03, 0.041, 0.054, 0.068, 0.081, 0.093, 0.102, 0.107, 0.106, 0.099, 0.088, 0.073, 0.058, 0.043, 0.03, 0.02, 0.013, 0.008, 0.004, 0.002],
                        k=1
                    )[0],
                    weight=random.choices(
                        population=[50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73,
                                    74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100],
                        weights=# distribute from 50 to 100 must add up to 1
                        [0.006, 0.008, 0.013, 0.02, 0.03, 0.043, 0.058, 0.073, 0.088, 0.099, 0.106, 0.107, 0.102, 0.093, 0.081, 0.068, 0.054, 0.041, 0.03, 0.021, 0.014, 0.009, 0.005, 0.003, 0.002, 0.002,
                            0.003, 0.005, 0.009, 0.014, 0.021, 0.03, 0.041, 0.054, 0.068, 0.081, 0.093, 0.102, 0.107, 0.106, 0.099, 0.088, 0.073, 0.058, 0.043, 0.03, 0.02, 0.013, 0.008, 0.004, 0.002],
                        k=1
                    )[0],
                    political_alignment=random.choices(
                        population=['left', 'center', 'right'],
                        weights=[0.4, 0.4, 0.2],
                        k=1
                    )[0],
                    pc_level=random.choices(
                        population=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
                        weights=[0.015, 0.078, 0.132, 0.382, 0.228,
                                 0.145, 0.045, 0.009, 0.001, 0.1, 0.1],
                        k=1
                    )[0],
                    best_quality=random.choices(
                        # - PranksterLevel - Confidence - Aggression - Discipline- Sportsmanship - Wealth - DadJokeAptitud
                        population=['Prankster', 'Confident', 'Aggressive',
                                    'Disciplined', 'Neutral', 'Wealthy', 'Hilarious'],
                        weights=[0.068, 0.254, 0.426,
                                 0.254, 0.068, 0.009, 0.001],
                        k=1
                    )[0],
                    worst_quality=random.choices(
                        # - PranksterLevel - Confidence - Aggression - Discipline- Sportsmanship - Wealth - DadJokeAptitud
                        population=['Prankster', 'Confident', 'Aggressive',
                                    'Disciplined', 'Neutral', 'Wealthy', 'Hilarious'],
                        weights=[0.068, 0.254, 0.426,
                                 0.254, 0.068, 0.009, 0.001],
                        k=1
                    )[0],
                    # twitter followers random within a range
                    twitter_followers=random.randint(0, 1000000),
                    is_manager=random.choices(
                        population=[True, False],
                        weights=[0.05, 0.95],
                    )[0],
                )
    # loggers
    print("- Data: {0}, Created: {1}".format(str(d), str(created)))


# import from a parent directory


def insert_nations(nations_list):
    # insert nations into database
    for nation in nations_list:
        # country, continent, population, capital, stability, corruption, fanbase level, name generator, conversion option
        nation_name = nation[0]
        nation_continent = nation[1]
        nation_population = nation[2]
        nation_capital = nation[3]
        nation_stability = nation[4]
        nation_corruption = nation[5]
        nation_fanbase = nation[6]
        nation_name_generator = nation[7]
        nation_conversion = nation[8]

        # insert nation into django database
        d, created = Nation.objects.get_or_create(name=nation_name, continent=nation_continent, population=nation_population, capital=nation_capital, political_climate=nation_stability,
                                                  corruption_level=nation_corruption, fan_loyalty=nation_fanbase, faker_locale_options=nation_name_generator, conversion_option=nation_conversion)
        print("- Data: {0}, Created: {1}".format(str(d), str(created)))


def insert_players():
    # read files from names directory
    for root, dirs, files in os.walk('names'):
        for file in files:
            # read file
            with open(os.path.join(root, file), 'r') as f:
                # read lines
                country_name = file.split('_')[0]
                if country_name == 'Azerbaijan' or country_name == 'Saint Kitts and Nevis':
                    continue
                lines = f.readlines()
                # iterate through lines
                for index, line in enumerate(lines):
                    # split line

                    line = line.strip().split(' ')
                    # get name
                    print(line)
                    if (len(line) < 2 or (line[0] == 'Joe' and line[1] == 'Doe') or (line[0] == 'John' and line[1] == 'Doe') or line[0] == 'English' or line[1] == 'English' or line[0] == 'english' or line[1] == 'english' or (line[0] == 'John' and line[1] == 'Adams')):
                        continue
                    first_name = line[0]
                    last_name = line[1] if len(line) > 1 else ''
                    if len(line) > 2:
                        # append all other names
                        for name in line[2:]:
                            last_name += ' ' + name

                    # insert player into django database
                    d, created = Player.objects.get_or_create(
                        name=first_name,
                        last_name=last_name,
                        # random position
                        position=random.choice(
                            ['GK', 'CB', 'CB', 'LB', 'RB', 'DM', 'CM', 'LM', 'RM', 'AM', 'ST', 'ST', 'CF']),
                        nation=Nation.objects.get(name=country_name),
                        # random age with certain distribution
                        birth_year=random.choices(
                            population=[1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998,
                                        1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008],
                            weights=[
                                # 19 probabilities must add up to 1
                                0.06, 0.11, 0.01, 0.03, 0.15, 0.02, 0.05, 0.13, 0.07, 0.04, 0.12, 0.09, 0.08, 0.05, 0.02, 0.07, 0.06, 0.04, 0.03
                            ],
                            k=1
                        )[0],
                        height=random.choices(
                            population=[150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174,
                                        175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200],
                            weights=# distribute from 150 to 200 must add up to 1
                            [0.006, 0.008, 0.013, 0.02, 0.03, 0.043, 0.058, 0.073, 0.088, 0.099, 0.106, 0.107, 0.102, 0.093, 0.081, 0.068, 0.054, 0.041, 0.03, 0.021, 0.014, 0.009, 0.005, 0.003, 0.002, 0.002,
                                0.003, 0.005, 0.009, 0.014, 0.021, 0.03, 0.041, 0.054, 0.068, 0.081, 0.093, 0.102, 0.107, 0.106, 0.099, 0.088, 0.073, 0.058, 0.043, 0.03, 0.02, 0.013, 0.008, 0.004, 0.002],
                            k=1
                        )[0],
                        weight=random.choices(
                            population=[50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73,
                                        74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100],
                            weights=# distribute from 50 to 100 must add up to 1
                            [0.006, 0.008, 0.013, 0.02, 0.03, 0.043, 0.058, 0.073, 0.088, 0.099, 0.106, 0.107, 0.102, 0.093, 0.081, 0.068, 0.054, 0.041, 0.03, 0.021, 0.014, 0.009, 0.005, 0.003, 0.002, 0.002,
                                0.003, 0.005, 0.009, 0.014, 0.021, 0.03, 0.041, 0.054, 0.068, 0.081, 0.093, 0.102, 0.107, 0.106, 0.099, 0.088, 0.073, 0.058, 0.043, 0.03, 0.02, 0.013, 0.008, 0.004, 0.002],
                            k=1
                        )[0],
                        political_alignment=random.choices(
                            population=['left', 'center', 'right'],
                            weights=[0.4, 0.4, 0.2],
                            k=1
                        )[0],
                        pc_level=random.choices(
                            population=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
                            weights=[0.015, 0.078, 0.132, 0.382, 0.228,
                                     0.145, 0.045, 0.009, 0.001, 0.1, 0.1],
                            k=1
                        )[0],
                        best_quality=random.choices(
                            # - PranksterLevel - Confidence - Aggression - Discipline- Sportsmanship - Wealth - DadJokeAptitud
                            population=['Prankster', 'Confident', 'Aggressive',
                                        'Disciplined', 'Neutral', 'Wealthy', 'Hilarious'],
                            weights=[0.068, 0.254, 0.426,
                                     0.254, 0.068, 0.009, 0.001],
                            k=1
                        )[0],
                        worst_quality=random.choices(
                            # - PranksterLevel - Confidence - Aggression - Discipline- Sportsmanship - Wealth - DadJokeAptitud
                            population=['Prankster', 'Confident', 'Aggressive',
                                        'Disciplined', 'Neutral', 'Wealthy', 'Hilarious'],
                            weights=[0.068, 0.254, 0.426,
                                     0.254, 0.068, 0.009, 0.001],
                            k=1
                        )[0],
                        # twitter followers random within a range
                        twitter_followers=random.randint(0, 1000000),
                        is_manager=random.choices(
                            population=[True, False],
                            weights=[0.05, 0.95],
                        )[0],
                    )
                    print(
                        "- Data: {0}, Created: {1}".format(str(d), str(created)))


def check_players():
    nations = Nation.objects.all()
    for nation in nations:
        players = Player.objects.filter(nation=nation)
        # format a print for nation name and players length
        print("- Nation: {0}, Players: {1}".format(nation.name, len(players)))


def check_countries():
    # >>> a = Nation.objects.filter(player__isnull=False).annotate(num_players=Count('player')).
    # >>> len(a)
    # 190
    # >>> print(", ".join(nation['name'] for nation in nation_list))
    a = "Afghanistan, Albania, Algeria, Andorra, Angola, Antigua and Barbuda, Argentina, Armenia, Australia, Austria, Bahamas, Bahrain, Bangladesh, Barbados, Belarus, Belgium, Belize, Benin, Bhutan, Bolivia, Botswana, Brazil, Brunei, Bulgaria, Burkina Faso, Burundi, Cabo Verde, Cambodia, Cameroon, Canada, Central African Republic, Chad, Chile, China, Colombia, Comoros, Costa Rica, Côte d'Ivoire, Croatia, Cuba, Cyprus, Czech Republic, Democratic Republic of the Congo, Denmark, Djibouti, Dominica, Dominican Republic, Ecuador, Egypt, El Salvador, Equatorial Guinea, Eritrea, Estonia, Eswatini, Ethiopia, Fiji, Finland, France, Gabon, Gambia, Georgia, Germany, Ghana, Greece, Grenada, Guatemala, Guinea, Guinea-Bissau, Guyana, Haiti, Honduras, Hungary, Iceland, India, Indonesia, Iran, Iraq, Ireland, Israel, Italy, Jamaica, Japan, Jordan, Kenya, Kiribati, Kosovo, Kuwait, Kyrgyzstan, Laos, Latvia, Lebanon, Lesotho, Liberia, Libya, Liechtenstein, Lithuania, Luxembourg, Madagascar, Malawi, Malaysia, Maldives, Mali, Malta, Marshall Islands, Mauritania, Mauritius, Mexico, Micronesia, Moldova, Monaco, Mongolia, Montenegro, Morocco, Mozambique, Myanmar, Namibia, Nauru, Nepal, Netherlands, New Zealand, Nicaragua, Niger, Nigeria, North Korea, North Macedonia, Norway, Oman, Pakistan, Palau, Panama, Paraguay, Peru, Philippines, Poland, Portugal, Qatar, Republic of the Congo, Romania, Russia, Rwanda, Saint Lucia, Saint Vincent and the Grenadines, Samoa, San Marino, Sao Tome and Principe, Saudi Arabia, Senegal, Serbia, Seychelles, Sierra Leone, Singapore, Slovakia, Slovenia, Solomon Islands, Somalia, South Africa, South Korea, South Sudan, Spain, Sri Lanka, Sudan, Suriname, Sweden, Switzerland, Syria, Taiwan, Tajikistan, Tanzania, Thailand, Timor-Leste, Togo, Tonga, Trinidad and Tobago, Tunisia, Turkey, Turkmenistan, Tuvalu, Uganda, Ukraine, United Arab Emirates, United Kingdom, United States, Uruguay, Uzbekistan, Vanuatu, Venezuela, Vietnam, Yemen, Zambia, Zimbabwe"

    for root, dirs, files in os.walk('names'):
        for file in files:
            # read file
            with open(os.path.join(root, file), 'r') as f:
                # read lines
                country_name = file.split('_')[0]
                # check if country name is in a
                if country_name == "United States":
                    print(country_name)
                    lines = f.readlines()
                    # iterate through lines
                    for index, line in enumerate(lines):
                        # split line

                        line = line.strip().split(' ')
                        # get name
                        print(line)
                        if (len(line) < 2 or (line[0] == 'Joe' and line[1] == 'Doe') or (line[0] == 'John' and line[1] == 'Doe') or line[0] == 'English' or line[1] == 'English' or line[0] == 'english' or line[1] == 'english' or (line[0] == 'John' and line[1] == 'Adams')):
                            continue
                        first_name = line[0]
                        last_name = line[1] if len(line) > 1 else ''
                        if len(line) > 2:
                            # append all other names
                            for name in line[2:]:
                                last_name += ' ' + name

                        # insert player into django database
                        d, created = Player.objects.get_or_create(
                            name=first_name,
                            last_name=last_name,
                            # random position
                            position=random.choice(
                                ['GK', 'CB', 'CB', 'LB', 'RB', 'DM', 'CM', 'LM', 'RM', 'AM', 'ST', 'ST', 'CF']),
                            nation=Nation.objects.get(name=country_name),
                            # random age with certain distribution
                            birth_year=random.choices(
                                population=[1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998,
                                            1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008],
                                weights=[
                                    # 19 probabilities must add up to 1
                                    0.06, 0.11, 0.01, 0.03, 0.15, 0.02, 0.05, 0.13, 0.07, 0.04, 0.12, 0.09, 0.08, 0.05, 0.02, 0.07, 0.06, 0.04, 0.03
                                ],
                                k=1
                            )[0],
                            height=random.choices(
                                population=[150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174,
                                            175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200],
                                weights=# distribute from 150 to 200 must add up to 1
                                [0.006, 0.008, 0.013, 0.02, 0.03, 0.043, 0.058, 0.073, 0.088, 0.099, 0.106, 0.107, 0.102, 0.093, 0.081, 0.068, 0.054, 0.041, 0.03, 0.021, 0.014, 0.009, 0.005, 0.003, 0.002, 0.002,
                                    0.003, 0.005, 0.009, 0.014, 0.021, 0.03, 0.041, 0.054, 0.068, 0.081, 0.093, 0.102, 0.107, 0.106, 0.099, 0.088, 0.073, 0.058, 0.043, 0.03, 0.02, 0.013, 0.008, 0.004, 0.002],
                                k=1
                            )[0],
                            weight=random.choices(
                                population=[50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73,
                                            74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100],
                                weights=# distribute from 50 to 100 must add up to 1
                                [0.006, 0.008, 0.013, 0.02, 0.03, 0.043, 0.058, 0.073, 0.088, 0.099, 0.106, 0.107, 0.102, 0.093, 0.081, 0.068, 0.054, 0.041, 0.03, 0.021, 0.014, 0.009, 0.005, 0.003, 0.002, 0.002,
                                    0.003, 0.005, 0.009, 0.014, 0.021, 0.03, 0.041, 0.054, 0.068, 0.081, 0.093, 0.102, 0.107, 0.106, 0.099, 0.088, 0.073, 0.058, 0.043, 0.03, 0.02, 0.013, 0.008, 0.004, 0.002],
                                k=1
                            )[0],
                            political_alignment=random.choices(
                                population=['left', 'center', 'right'],
                                weights=[0.4, 0.4, 0.2],
                                k=1
                            )[0],
                            pc_level=random.choices(
                                population=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
                                weights=[0.015, 0.078, 0.132, 0.382, 0.228,
                                         0.145, 0.045, 0.009, 0.001, 0.1, 0.1],
                                k=1
                            )[0],
                            best_quality=random.choices(
                                # - PranksterLevel - Confidence - Aggression - Discipline- Sportsmanship - Wealth - DadJokeAptitud
                                population=['Prankster', 'Confident', 'Aggressive',
                                            'Disciplined', 'Neutral', 'Wealthy', 'Hilarious'],
                                weights=[0.068, 0.254, 0.426,
                                         0.254, 0.068, 0.009, 0.001],
                                k=1
                            )[0],
                            worst_quality=random.choices(
                                # - PranksterLevel - Confidence - Aggression - Discipline- Sportsmanship - Wealth - DadJokeAptitud
                                population=['Prankster', 'Confident', 'Aggressive',
                                            'Disciplined', 'Neutral', 'Wealthy', 'Hilarious'],
                                weights=[0.068, 0.254, 0.426,
                                         0.254, 0.068, 0.009, 0.001],
                                k=1
                            )[0],
                            # twitter followers random within a range
                            twitter_followers=random.randint(0, 1000000),
                            is_manager=random.choices(
                                population=[True, False],
                                weights=[0.05, 0.95],
                            )[0],
                        )
                        print(
                            "- Data: {0}, Created: {1}".format(str(d), str(created)))


def split_uk():

    england = Nation.objects.get(name="England")
    scotland = Nation.objects.get(name="Scotland")
    wales = Nation.objects.get(name="Wales")
    northern_ireland = Nation.objects.get(name="Northern Ireland")

    nation_lists = [england]

    for nation in nation_lists:
        fan_loyalty = nation.fan_loyalty
        corruption_level = nation.corruption_level
        political_climate = nation.political_climate
        population = nation.population

        # enumerate fan loyalty from low moderate high
        if fan_loyalty == "low":
            fan_loyalty = 0.25
        elif fan_loyalty == "moderate":
            fan_loyalty = 0.5
        elif fan_loyalty == "high":
            fan_loyalty = 1

        # enumerate corruption level from low moderate high
        if corruption_level == "low":
            corruption_level = 1
        elif corruption_level == "moderate":
            corruption_level = 0.5
        elif corruption_level == "high":
            corruption_level = 0.25

        # enumerate political climate from calm moderate volatile war
        if political_climate == "calm":
            political_climate = 1
        elif political_climate == "moderate":
            political_climate = 0.75
        elif political_climate == "volatile":
            political_climate = 0.5
        elif political_climate == "war":
            political_climate = 0.25

        # get 1% of the population
        population = int(population)
        population = population / 1000

        players_to_generate = 271
        uk_players = Player.objects.filter(nation__name='United Kingdom')
        # loop over players
        for player in uk_players:
            # if player is not in the nation
            if player.nation != nation:
                # if there are still players to generate
                if players_to_generate > 0:
                    # change the player's nation
                    player.nation = nation
                    player.save()
                    players_to_generate -= 1

                    # add loggging
                    print("Player {0} changed to {1}".format(
                        player.name, nation.name))
                else:
                    break

def get_country_rankings():
    # keep track of the rankings
    rankings = []
    rankig_duplicates = []
    missing_rankings = []

    nations = Nation.objects.all()
    for nation in nations:
        nation_ranking = NationRanking.objects.get(nation=nation)
        # print the nation and ranking
        ranking = (nation_ranking.ranking, nation.name)
        rankings.append(ranking)

    # sort duplicates by ranking
    rankings.sort(key=lambda tup: tup[0])

    for ranking in rankings:
        print(ranking)


    # find rankings between 1 and 200 that are not in the rankings list
    for i in range(1, 201):
        if i not in rankings:
            print("Missing ranking: {0}".format(i))
            missing_rankings.append(i)

    # fix the missing ranking by finding one of the duplicates
    # find the closest ranking that is not in the rankings list
    # and assign it to the missing ranking
    #for duplicate in rankig_duplicates:
    #    # duplicate wont be in missing rankings
    #    # find the closest ranking that is not in the rankings list and is on missing rankings
    #    # assign it to the missing ranking
    #    for missing_ranking in missing_rankings:
    #        if missing_ranking not in rankings:
    #            # assign the missing ranking to the duplicate
    #            nation_ranking = NationRanking.objects.get(nation__name=duplicate[1])
    #            nation_ranking.ranking = missing_ranking
    #            nation_ranking.save()
    #            print("Assigned missing ranking {0} to {1}".format(missing_ranking, nation_ranking.nation.name))
#
    #            # remove the missing ranking from the missing rankings list
    #            missing_rankings.remove(missing_ranking)
#
    #            break

def distribute_uk_players():
    # read United Kingdom_names.txt
    # each line contains a name

    # get northern ireland, scotland, wales, england
    england = Nation.objects.get(name="England")
    scotland = Nation.objects.get(name="Scotland")
    wales = Nation.objects.get(name="Wales")
    northern_ireland = Nation.objects.get(name="Northern Ireland")

    nation_lists = [england, scotland, wales, northern_ireland]

    with open('names/United Kingdom_names.txt') as f:
        # loop oer each nation
        assignment_for_nations = []

        for nation in nation_lists:
            # get 1% of the population
            population = nation.population
            population = int(population)
            population = population / 1000

            # do from 0 to population or if it is not the first nation do from previous nation population to population
            # if there are no more lines in the file break
            # get the line
            # create a player with the name of the line
            # assign the player to the nation
            # save the player

            # determine which lines
            if nation == nation_lists[0]:
                start = 0
                end = population
                assignment_for_nations.append((start, end, nation.name))
            else:
                start = end
                end = start + population
                assignment_for_nations.append((start, end, nation.name))
        
        # loop over each assignment
        for assignment in assignment_for_nations:
            # loop over the lines
            for i, line in enumerate(f):
                # if the line is in the assignment
                if i >= assignment[0] and i < assignment[1]:
                    # create a player with the name of the line
                    # get player name last name from line
                    line = line.split()
                    first_name = line[0]

                    # chain last name if more than one
                    last_name = ""
                    for name in line[1:]:
                        last_name += name + " "
                    
                    # remove last space
                    last_name = last_name[:-1]

                    # create player
                    create_player(first_name, last_name, assignment[2])
                else:
                    break


def england_to_northern_ireland():
    # get northern ireland, scotland, wales, england
    # get 500 players from england
    england = Nation.objects.get(name="England")

    northern_ireland = Nation.objects.get(name="Northern Ireland")

    # get the players from england
    england_players = Player.objects.filter(nation=england)[:500]

    # loop over the players
    # 500 players only 
    for player in england_players:
        # assign the player to northern ireland

        # write player name to file
        with open('names/england_to_northern_ireland.txt', 'a') as f:
            f.write(player.name + "\n")

        player.nation = northern_ireland
        player.save()

def england_to_wales():
    # get northern ireland, scotland, wales, england
    # get 1000 players from england
    england = Nation.objects.get(name="England")
    wales = Nation.objects.get(name="Wales")

    # get the players from england
    england_players = Player.objects.filter(nation=england)[:1000]

    # loop over the players
    # 1000 players only
    for player in england_players:
        # assign the player to wales

        # write player name to file
        with open('names/england_to_wales.txt', 'a') as f:
            f.write(player.name + "\n")

        player.nation = wales
        player.save()

def england_to_scotland():
    # get northern ireland, scotland, wales, england
    # get 1000 players from england
    england = Nation.objects.get(name="England")
    scotland = Nation.objects.get(name="Scotland")

    # get the players from england
    england_players = Player.objects.filter(nation=england)[:1000]

    # loop over the players
    # 1000 players only
    for player in england_players:
        # assign the player to scotland

        # write player name to file
        with open('names/england_to_scotland.txt', 'a') as f:
            f.write(player.name + "\n")

        player.nation = scotland
        player.save()

def check_england_duplicates():
    # find all players from england
    england = Nation.objects.get(name="England")
    england_players = Player.objects.filter(nation=england)
    dupes = []
    # find any players whose attributes are the same
    # loop over the players
    for player in england_players:
        for player2 in england_players:
            if player != player2:
                if player.name == player2.name and player.last_name == player2.last_name and player.birth_year == player2.birth_year and player.height == player2.height and player.weight == player2.weight and player.position == player2.position:
                    dupes.append(player)

    print(dupes)

def insert_country_rankings():
    # read RedRun file
    # each line contains this (177, 'Micronesia')
    # split the line by comma
    # get the first element
    # get the second element
    # remove the first and last character from the second element
    # convert the first element to int
    # find the nation with the name of the second element
    # add the field ranking to the nation
    # save the nation
    # print the nation and ranking
    # repeat for each line
    #(1, 'Belgium')
    #(2, 'Brazil')
    #(3, 'France')
    #(4, 'England')
    #(5, 'Portugal')
    #(6, 'Germany')
    #(7, 'Spain')
    #(8, 'Argentina')
    #(9, 'Croatia')
    #(10, 'Chile')
    #(11, 'Denmark')
    #(12, 'Uruguay')
    #(13, 'Switzerland')
    #(14, 'Colombia')
    #(15, 'Wales')
    #(16, 'Netherlands')
    #(17, 'United States')
    #(18, 'China')
    #(19, 'Republic of the Congo')
    #(20, 'Czech Republic')
    #(21, 'Poland')
    #(22, 'Senegal')
    #(23, 'Austria')
    #(24, 'Democratic Republic of the Congo')
    #(25, 'Serbia')
    #(26, "Côte d'Ivoire")
    #(27, 'Iran')
    #(28, 'Tunisia')
    #(29, 'Ecuador')
    #(30, 'Greece')
    #(31, 'Ireland')
    #(32, 'Peru')
    #(34, 'Nigeria')
    #(35, 'Algeria')
    #(36, 'Turkey')
    #(37, 'Sweden')
    #(38, 'Russia')
    #(39, 'Iceland')
    #(40, 'Hungary')
    #(41, 'Australia')
    #(42, 'Honduras')
    #(43, 'Paraguay')
    #(44, 'Costa Rica')
    #(45, 'Israel')
    #(46, 'Finland')
    #(47, 'Italy')
    #(48, 'Egypt')
    #(49, 'Bosnia and Herzegovina')
    #(50, 'Slovenia')
    #(51, 'Jamaica')
    #(52, 'Cameroon')
    #(53, 'Japan')
    #(54, 'Ghana')
    #(55, 'Qatar')
    #(56, 'Guinea')
    #(57, 'Burkina Faso')
    #(58, 'Kosovo')
    #(59, 'Canada')
    #(60, 'Morocco')
    #(61, 'Scotland')
    #(62, 'Bulgaria')
    #(63, 'Liberia')
    #(64, 'Lithuania')
    #(65, 'Luxembourg')
    #(66, 'Albania')
    #(67, 'Saudi Arabia')
    #(68, 'Ukraine')
    #(69, 'Slovakia')
    #(70, 'Mali')
    #(71, 'Malta')
    #(72, 'El Salvador')
    #(73, 'South Korea')
    #(74, 'Panama')
    #(75, 'Bolivia')
    #(76, 'Syria')
    #(77, 'Romania')
    #(78, 'Northern Ireland')
    #(79, 'Zambia')
    #(80, 'Iraq')
    #(81, 'Mexico')
    #(82, 'United Arab Emirates')
    #(83, 'Georgia')
    #(84, 'Benin')
    #(85, 'Cabo Verde')
    #(86, 'Belarus')
    #(87, 'Moldova')
    #(88, 'Madagascar')
    #(89, 'Malawi')
    #(90, 'Mozambique')
    #(91, 'Namibia')
    #(92, 'Uzbekistan')
    #(93, 'Kuwait')
    #(94, 'Cyprus')
    #(95, 'Montenegro')
    #(96, 'Nicaragua')
    #(97, 'Estonia')
    #(98, 'Bahrain')
    #(99, 'Armenia')
    #(100, 'Mongolia')
    #(101, 'Niger')
    #(102, 'Guinea-Bissau')
    #(103, 'North Macedonia')
    #(104, 'Norway')
    #(105, 'India')
    #(106, 'Kenya')
    #(107, 'Jordan')
    #(108, 'Comoros')
    #(109, 'Azerbaijan')
    #(110, 'Latvia')
    #(111, 'North Korea')
    #(112, 'Oman')
    #(113, 'Palau')
    #(114, 'Mauritania')
    #(115, 'Sierra Leone')
    #(116, 'Thailand')
    #(117, 'Kyrgyzstan')
    #(118, 'Gabon')
    #(119, 'Central African Republic')
    #(120, 'New Zealand')
    #(121, 'Libya')
    #(122, 'Dominican Republic')
    #(123, 'Angola')
    #(124, 'Philippines')
    #(125, 'Gambia')
    #(126, 'Antigua and Barbuda')
    #(127, 'Kazakhstan')
    #(128, 'Saint Lucia')
    #(129, 'Guatemala')
    #(130, 'Andorra')
    #(131, 'Tanzania')
    #(132, 'Liechtenstein')
    #(133, 'San Marino')
    #(134, 'Burundi')
    #(135, 'Rwanda')
    #(136, 'Equatorial Guinea')
    #(137, 'Ethiopia')
    #(138, 'Sao Tome and Principe')
    #(139, 'Cuba')
    #(140, 'Myanmar')
    #(141, 'Eswatini')
    #(142, 'Lebanon')
    #(143, 'Afghanistan')
    #(144, 'Lesotho')
    #(145, 'South Africa')
    #(146, 'South Sudan')
    #(147, 'Botswana')
    #(148, 'Sri Lanka')
    #(149, 'Sudan')
    #(150, 'Suriname')
    #(151, 'Haiti')
    #(152, 'Saint Vincent and the Grenadines')
    #(153, 'Tajikistan')
    #(154, 'Saint Kitts and Nevis')
    #(155, 'Laos')
    #(156, 'Chad')
    #(157, 'Singapore')
    #(158, 'Indonesia')
    #(159, 'Timor-Leste')
    #(160, 'Barbados')
    #(161, 'Dominica')
    #(162, 'Solomon Islands')
    #(163, 'Togo')
    #(164, 'Tonga')
    #(165, 'Trinidad and Tobago')
    #(166, 'Guyana')
    #(167, 'Malaysia')
    #(168, 'Maldives')
    #(169, 'Fiji')
    #(170, 'Turkmenistan')
    #(171, 'Tuvalu')
    #(172, 'Uganda')
    #(173, 'Cambodia')
    #(174, 'Mauritius')
    #(175, 'Belize')
    #(176, 'Marshall Islands')
    #(177, 'Micronesia')
    #(178, 'Grenada')
    #(179, 'Papua New Guinea')
    #(180, 'Venezuela')
    #(181, 'Nepal')
    #(182, 'Bahamas')
    #(183, 'Seychelles')
    #(184, 'Vietnam')
    #(185, 'Djibouti')
    #(186, 'Bhutan')
    #(187, 'Bangladesh')
    #(188, 'Yemen')
    #(189, 'Eritrea')
    #(190, 'Zimbabwe')
    #(191, 'Monaco')
    #(192, 'Brunei')
    #(193, 'Nauru')
    #(193, 'Pakistan')
    #(194, 'Vanuatu')
    #(195, 'Somalia')
    #(196, 'Taiwan')
    #(197, 'Samoa')
    #(198, 'Kiribati')
    #(199, 'Vatican City')
    with open('RedRun copy', 'r') as f:  
        lines = f.readlines()
        for line in lines:
            # remove ( )
            # line = (199, 'Vatican City')
            line = line.replace('(', '')
            line = line.replace(')', '')
            line = line.replace("'", '')
            line = line.replace('\n', '')
            line = line.split(',')
            print(line)

            # find the nation

            nation = Nation.objects.filter(name=line[1].strip()).first()
            if nation:
                nation.rank = line[0]
                nation.save()
                print(f'updated {nation.name}')
            else:
                print('no nation found')
                print(line[1])

def insert_player_ratings():
    # get all players
    players = Player.objects.all()
    # get all ratings
    count = 0
    lst = []
    for player in players:
        player_rating = player.calculate_rating()
        # create player rating
        # player.rating = player_rating
        # player.save()
        count += 1
        lst.append((player.name, player_rating, player.nation.name))

    # sort lst by rating and group by nation
    lst.sort(key=lambda x: x[1], reverse=True)

    # print top 50 for each nation
    for nation in Nation.objects.all():
        print(nation.name)
        nation_players = [player for player in lst if player[2] == nation.name]
        
        # save playres to db
        for nation_player in nation_players:
            player = Player.objects.filter(name=nation_player[0]).first()
            player.rating = nation_player[1]
            player.save()
            print(nation_player)

        # choose a random number between 2-5
        # loop reverse from 94 to 85
        for i in range(94, 84, -1):
            # find players with rating i
            players = [player for player in nation_players if player[1] == i]
            # choose a random number between 2-5
            num = random.randint(1, 4)

            # if there are random number of players with rating i
            if len(players) >= num:
                # decrease players rating by 1 until num is reached
                for player in players:
                    if num > 0:
                        player = Player.objects.filter(name=player[0]).first()
                        player.rating = i - 1
                        player.save()
                        num -= 1
                        print(player)
                    else:
                        break

        print('\n')

def get_player_ratings():
    # get all players
    nations = Nation.objects.all()
    for nation in nations:
        players = Player.objects.filter(nation=nation).order_by('-rating')
        print(nation.name)

        for player in players:
            print(player.name, player.rating)
        print('\n')

def adjust_player_ratings():
    # get top 50 players for each nation
    nations = Nation.objects.all()
    for nation in nations:
        # get all players above 81 rating
        # loop from 99 to 81 reverse and get all players with rating i
        players = Player.objects.filter(nation=nation).order_by('-rating')
        for i in range(99, 80, -1):
            players = Player.objects.filter(nation=nation, rating=i)
            # choose a random number between 2-5
            num = random.randint(1, 4)

            # if there are random number of players with rating i
            if len(players) >= num:
                # find difference between len and num and delete that many players
                diff = len(players) - num
                for player in players:
                    if diff > 0:
                        player.delete()
                        diff -= 1
                        print(player)
                    else:
                        break

def remove_too_many_top_players_rank_20():
    # find all the nations that are behing rank 20 included
    # these nations can have only one player with rating bigger than 85. so only keep one random player with rating bigger than 85
    nations = Nation.objects.filter(rank__gte=20)
    for nation in nations:
        players = Player.objects.filter(nation=nation, rating__gt=85)
        num = len(players)
        if num > 1:
            # choose a random player and delete all the others
            random_player = random.choice(players)
            players = Player.objects.filter(nation=nation, rating__gt=85).exclude(name=random_player.name)
            for player in players:
                player.delete()
                print(player)

def remove_too_many_top_players_rank_50():
    # find all the nations that are behing rank 50 included
    # these nations can have only two players with rating bigger than 85. so only keep two random players with rating bigger than 85
    nations = Nation.objects.filter(rank__gte=50)
    for nation in nations:
        players = Player.objects.filter(nation=nation, rating__gt=78)
        num = len(players)
        if num > 2:
            # choose a random player and delete all the others
            random_players = random.sample(list(players), 2)
            players = Player.objects.filter(nation=nation, rating__gt=78).exclude(name__in=[player.name for player in random_players])
            for player in players:
                player.delete()
                print(player)

def purge_keepers():
    # find the top 50 players from each nation 
    # if more than two players are keepers, delete the rest
    nations = Nation.objects.all()
    for nation in nations:
        players = Player.objects.filter(nation=nation).order_by('-rating')
        keepers = Player.objects.filter(nation=nation, position='GK').order_by('-rating')
        if len(keepers) > 2:
            # delete all keepers except the top 2
            keepers = Player.objects.filter(nation=nation, position='GK').order_by('-rating')[2:]
            for keeper in keepers:
                keeper.delete()
                print(keeper)

def dm_to_cdm():
    # get all players with position DM
    players = Player.objects.filter(position='DM')
    for player in players:
        player.position = 'CDM'
        player.save()
        print(player)

def am_to_cam():
    # get all players with position AM
    players = Player.objects.filter(position='AM')
    for player in players:
        player.position = 'CAM'
        player.save()
        print(player)
import langid
def is_arabic_word(name):
    lang, confidence = langid.classify(name)
    return lang != 'ar'

def get_invalid_arabic_names():

    keywords = ["first", "joe", "hello", "david", "and", "eastern", "coastal", "firstname", "jacob", "thank", "john", "success", "presidential", "moroccan", "john", "beautiful", "eastern"]
    for nation in nations_fifa:
        conversion_option = nation[-1]

        if conversion_option == "chat_gpt":
            nation_db = Nation.objects.get(name=nation[0])
            players = Player.objects.filter(nation=nation_db)
            for player in players:
                if not (is_arabic_word(player.name) and is_arabic_word(player.last_name)):
                    print(f"{player.uid} {player.name} {player.last_name}")
                    continue
                for keyword in keywords:
                    if keyword in player.name.lower() or keyword in player.last_name.lower():
                        print(f"{player.uid} {player.name} {player.last_name}")
from django.db.models import F
def delete_unusual_bmi():
    players = Player.objects.filter(weight__gt=80, rating__gt=75)
    for player in players:
        player_name = player.name
        player_weight = player.weight
        print(f"Deleting player: {player_name}, Weight: {player_weight}")

        # Delete the player from the database
        player.delete()    

def delete_arabic():
    with open('non_arabic_names', 'r') as file:
        for line in file:
            uid, name, last_name = line.strip().split(' ')
            # Log the UID of the player being deleted
            print(f"Deleting player with UID: {uid}")

            # Delete the player from the database based on the UID
            try:
                player = Player.objects.get(uid=uid)
                player.delete()
            except Player.DoesNotExist:
                print(f"Player with UID {uid} does not exist") 

def main():
    # insert_nations(nations_fifa)
    # insert_players()
    # check_players()
    # check_countries()
    # split_uk()
    # distribute_uk_players()
    # england_to_northern_ireland()
    # england_to_wales()
    # england_to_scotland()
    # check_england_duplicates()
    # insert_country_rankings()
    # insert_player_ratings() #TODO run monthly
    # insert_player_ratings()
    # get_player_ratings()
    # adjust_player_ratings()
    # remove_too_many_top_players_rank_20()
    # remove_too_many_top_players_rank_50()
    # purge_keepers()
    # am_to_cam()
    # dm_to_cdm()
    # get_invalid_arabic_names()
    # delete_unusual_bmi()
    # delete_arabic()

if __name__ == '__main__':
    main()
