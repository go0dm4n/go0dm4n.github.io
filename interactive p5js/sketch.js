// Interactive p5js project
// Uday Sandhu
// September 19th 2022
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let flag;
let names = [Afghanistan, Albania, Algeria, Andorra, Angola, Antigua and Barbuda, Argentina
  Armenia
  Australia
  Austria
  Azerbaijan
  The Bahamas
  Bahrain
  Bangladesh
  Barbados
  Belarus
  Belgium
  Belize
  Benin
  Bhutan
  Bolivia
  Bosnia and Herzegovina
  Botswana
  Brazil
  Brunei
  Bulgaria
  Burkina Faso
  Burundi
  Cambodia
  Cameroon
  Canada
  Cape Verde
  Central African Republic
  Chad
  Chile
  China
  Colombia
  Comoros
  Congo, Republic of the
  Congo, Democratic Republic of the
  Costa Rica
  Cote d'Ivoire
  Croatia
  Cuba
  Cyprus
  Czech Republic
  Denmark
  Djibouti
  Dominica
  Dominican Republic
  East Timor (Timor-Leste)
  Ecuador
  Egypt
  El Salvador
  Equatorial Guinea
  Eritrea
  Estonia
  Ethiopia
  Fiji
  Finland
  France
  Gabon
  The Gambia
  Georgia
  Germany
  Ghana
  Greece
  Grenada
  Guatemala
  Guinea
  Guinea-Bissau
  Guyana
  Haiti
  Honduras
  Hungary
  Iceland
  India
  Indonesia
  Iran
  Iraq
  Ireland
  Israel
  Italy
  Jamaica
  Japan
  Jordan
  Kazakhstan
  Kenya
  Kiribati
  Korea, North
  Korea, South
  Kosovo
  Kuwait
  Kyrgyzstan
  Laos
  Latvia
  Lebanon
  Lesotho
  Liberia
  Libya
  Liechtenstein
  Lithuania
  Luxembourg
  Macedonia
  Madagascar
  Malawi
  Malaysia
  Maldives
  Mali
  Malta
  Marshall Islands
  Mauritania
  Mauritius
  Mexico
  Micronesia, Federated States of
  Moldova
  Monaco
  Mongolia
  Montenegro
  Morocco
  Mozambique
  Myanmar (Burma)
  Namibia
  Nauru
  Nepal
  Netherlands
  New Zealand
  Nicaragua
  Niger
  Nigeria
  Norway
  Oman
  Pakistan
  Palau
  Panama
  Papua New Guinea
  Paraguay
  Peru
  Philippines
  Poland
  Portugal
  Qatar
  Romania
  Russia
  Rwanda
  Saint Kitts and Nevis
  Saint Lucia
  Saint Vincent and the Grenadines
  Samoa
  San Marino
  Sao Tome and Principe
  Saudi Arabia
  Senegal
  Serbia
  Seychelles
  Sierra Leone
  Singapore
  Slovakia
  Slovenia
  Solomon Islands
  Somalia
  South Africa
  South Sudan
  Spain
  Sri Lanka
  Sudan
  Suriname
  Swaziland
  Sweden
  Switzerland
  Syria
  Taiwan
  Tajikistan
  Tanzania
  Thailand
  Togo
  Tonga
  Trinidad and Tobago
  Tunisia
  Turkey
  Turkmenistan
  Tuvalu
  Uganda
  Ukraine
  United Arab Emirates
  United Kingdom
  United States of America
  Uruguay
  Uzbekistan
  Vanuatu
  Vatican City
  Venezuela
  Vietnam
  Yemen
  Zambia
  Zimbabwe   ]
let bgi;
function preload(flagname) {
  flag = loadImage("flag-icons-main/flags/4x3/Canada.svg");
  bgi = loadImage("flag-icons-main/background.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  image(bgi, (0, 0, windowWidth, windowHeight));
  image(flag, windowWidth/2 - flag.width/2, windowHeight/2 - flag.height/2);
}

function flagname() { // selects 4 random flag names
  
}