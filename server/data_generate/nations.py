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


# import from a parent directory


def insert_nations():
    # insert nations into database
    for nation in nations_fifa:
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
                            population=[1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008], 
                            weights=[
                                # 19 probabilities must add up to 1
                                0.06, 0.11, 0.01, 0.03, 0.15, 0.02, 0.05, 0.13, 0.07, 0.04, 0.12, 0.09, 0.08, 0.05, 0.02, 0.07, 0.06, 0.04, 0.03
                            ],
                            k=1
                        )[0],
                        height=random.choices(
                            population=[150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200],
                            weights=
                                # distribute from 150 to 200 must add up to 1
                                [ 0.006, 0.008, 0.013, 0.02, 0.03, 0.043, 0.058, 0.073, 0.088, 0.099, 0.106, 0.107, 0.102, 0.093, 0.081, 0.068, 0.054, 0.041, 0.03, 0.021, 0.014, 0.009, 0.005, 0.003, 0.002, 0.002, 0.003, 0.005, 0.009, 0.014, 0.021, 0.03, 0.041, 0.054, 0.068, 0.081, 0.093, 0.102, 0.107, 0.106, 0.099, 0.088, 0.073, 0.058, 0.043, 0.03, 0.02, 0.013, 0.008, 0.004, 0.002]
                            ,
                            k=1
                        )[0],
                        weight=random.choices(
                            population=[50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100],
                            weights=
                                # distribute from 50 to 100 must add up to 1
                                [0.006, 0.008, 0.013, 0.02, 0.03, 0.043, 0.058, 0.073, 0.088, 0.099, 0.106, 0.107, 0.102, 0.093, 0.081, 0.068, 0.054, 0.041, 0.03, 0.021, 0.014, 0.009, 0.005, 0.003, 0.002, 0.002, 0.003, 0.005, 0.009, 0.014, 0.021, 0.03, 0.041, 0.054, 0.068, 0.081, 0.093, 0.102, 0.107, 0.106, 0.099, 0.088, 0.073, 0.058, 0.043, 0.03, 0.02, 0.013, 0.008, 0.004, 0.002]
                            ,
                            k=1
                        )[0],
                        political_alignment=random.choices(
                            population=['left', 'center', 'right'],
                            weights=[0.4, 0.4, 0.2],
                            k=1
                        )[0],
                        pc_level=random.choices(
                            population=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
                            weights=[0.015, 0.078, 0.132, 0.382, 0.228, 0.145, 0.045, 0.009, 0.001, 0.1, 0.1],
                            k=1
                        )[0],
                        best_quality=random.choices(
                            # - PranksterLevel - Confidence - Aggression - Discipline- Sportsmanship - Wealth - DadJokeAptitud
                            population=['Prankster', 'Confident', 'Aggressive', 'Disciplined', 'Neutral', 'Wealthy', 'Hilarious'],
                            weights=[0.068, 0.254, 0.426, 0.254, 0.068, 0.009, 0.001],
                            k=1
                        )[0],
                        worst_quality=random.choices(
                            # - PranksterLevel - Confidence - Aggression - Discipline- Sportsmanship - Wealth - DadJokeAptitud
                            population=['Prankster', 'Confident', 'Aggressive', 'Disciplined', 'Neutral', 'Wealthy', 'Hilarious'],
                            weights=[0.068, 0.254, 0.426, 0.254, 0.068, 0.009, 0.001],
                            k=1
                        )[0],
                        # twitter followers random within a range
                        twitter_followers=random.randint(0, 1000000),
                        is_manager=random.choices(
                            population=[True, False],
                            weights=[0.05, 0.95],
                        )[0],
                    )
                    print("- Data: {0}, Created: {1}".format(str(d), str(created)))

def check_players():
    nations = Nation.objects.all() 
    for nation in nations:
        players = Player.objects.filter(nation=nation)
        # format a print for nation name and players length
        print("- Nation: {0}, Players: {1}".format(nation.name, len(players)))        


def main():
    # insert_nations()
    # insert_players()
    # check_players()

# check if main
if __name__ == '__main__':
    main()
