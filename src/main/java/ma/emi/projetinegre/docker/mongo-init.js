db = db.getSiblingDB('hotelsdb');  // Sélectionne la base de données "hotelsdb"

/*var hotels = cat('/docker-entrypoint-initdb.d/hotels.json');  // Lit le fichier JSON
var jsonData = JSON.parse(hotels);  // Parse le JSON

*/
// Insère les données dans la collection "hotels"
db.hotels.insertMany([
    {
        "name": "Ibis Rabat Agdal",
        "latitude": 33.999099136282155,
        "longitude": -6.858884746027667,
        "description": "Un hôtel luxueux au cœur de Rabat",
        "adresse": "Place De La Gare, Avenue Haj Ahmed, Rue Cherkaoui, Rabat 10000"
    },
    {
        "name": "Rabat Marriott",
        "latitude": 34.00421299743012,
        "longitude": -6.844947604271782,
        "description": "Un hôtel avec une vue imprenable",
        "adresse": "Center Agdal, Av. Inaouin, Rabat 10000"
    },
    {
        "name": "Smarts Hotel Agdal Rabat",
        "latitude": 34.00339827560417,
        "longitude": -6.850338534956876,
        "description": "Un hôtel avec une vue magique",
        "adresse": "35 Rue Azegza, Agdal, 10000 Rabat"
    },
    {
        "name": "Hôtel Atlantic Agdal",
        "latitude": 33.99673491919871,
        "longitude": -6.847407699142518,
        "description": "Un hôtel avec une vue magique",
        "adresse": "20 Av. Al Atlas, Rabat"
    },
    {
        "name": "Hôtel Soundouss",
        "latitude": 33.995610636268225,
        "longitude": -6.850807898992982,
        "description": "Arrondissement chic comprenant le jardin d'essais botaniques, avec des vergers et des palmiers",
        "adresse": "Pl. Talhah, Rabat"
    },
    {
        "name": "Rent Inn Suites Hôtel",
        "latitude": 34.00338,
        "longitude": -6.84926,
        "description": "Un hôtel avec une vue magique. Très bien situé, en plein centre ville",
        "adresse": "56 Rue Jabal Oukaïmeden, Rabat 10080"
    },
    {
        "name": "Gardenia Boutique Hôtel",
        "latitude": 33.99628787755022,
        "longitude": -6.847815846128602,
        "description": "Un hôtel avec une vue magique",
        "adresse": "23 Av. Al Atlas, Rabat 10080"
    },
    {
        "name": "Flower Town Hotel & Spa",
        "latitude": 33.99397,
        "longitude": -6.84908,
        "description": "Un hôtel avec une vue magique. Endroit calme",
        "adresse": "20 Av. Michlifen, Rabat 10090"
    },
    {
        "name": "Villa Aralia",
        "latitude": 33.99535,
        "longitude": -6.84555,
        "description": "Une ambiance extraordinaire",
        "adresse": "42 Av. des Nations Unies, Rabat 10000"
    },
    {
        "name": "Sofitel Rabat Jardin des Roses",
        "latitude": 33.99098,
        "longitude": -6.83726,
        "description": "Le prestige que vous cherchez",
        "adresse": "Avenue Imam Malek, Impasse, Rabat 10000"
    },
    {
        "name": "Hôtel Oscar",
        "latitude": 34.01490,
        "longitude": -6.84854,
        "description": "Très bien situé, en plein centre ville",
        "adresse": "401 Av. Hassan II, Rabat"
    },
    {
        "name": "Helnan Chellah Rabat Hotel",
        "latitude": 34.01583,
        "longitude": -6.83406,
        "description": "Un hôtel avec une vue magique. Très bien situé, en plein centre ville",
        "adresse": "N2 Rue D'Ifni, Rabat 10010"
    },
    {
        "name": "Majliss hôtel Downtown",
        "latitude": 34.01768,
        "longitude": -6.83984,
        "description": "Un hôtel avec une vue magique. Très bien situé, en plein centre ville",
        "adresse": "6 Rue Zahla, Rabat 10000"
    },
    {
        "name": "Hôtel Rihab",
        "latitude": 34.02135,
        "longitude": -6.82826,
        "description": "Un hôtel de luxe",
        "adresse": "45 Av. Moulay Ismail, Rabat 10000"
    },
    {
        "name": "La Tour Hassan Palace",
        "latitude": 34.02003,
        "longitude": -6.83000,
        "description": "Un hôtel raffiné",
        "adresse": "26 B.P. 14 Av. Chellah, Rabat 10000"
    },
    {
        "name": "MGallery Le Diwan Rabat",
        "latitude": 34.01798,
        "longitude": -6.82799,
        "description": "Un hôtel avec une vue magique",
        "adresse": "Place De L'Unité Africaine Hassan District, Rabat 10005"
    },
    {
        "name": "Malak Hôtel",
        "latitude": 34.02268,
        "longitude": -6.83184,
        "description": "Très bien situé, en plein centre ville",
        "adresse": "23, Rue Chellah - Place Mellilia, Av. Moulay Hassan, Rabat"
    },
    {
        "name": "Belere Hôtel Rabat",
        "latitude": 34.01511,
        "longitude": -6.83680,
        "description": "Un hôtel très bien situé",
        "adresse": "33 Av. Moulay Youssef, Rabat 10000"
    },
    {
        "name": "Hôtel Mercure Rabat Sheherazade",
        "latitude": 34.01962,
        "longitude": -6.82277,
        "description": "Un hôtel avec une vue imprenable",
        "adresse": "21 Rue de Tunis, Rabat 10000"
    },
    {
        "name": "Braat Hotel",
        "latitude": 34.01414,
        "longitude": -6.82856,
        "description": "Un hôtel avec une vue magique. Très bien situé, en plein centre ville",
        "adresse": "46 Av. Patrice Lumumba, Rabat 10010"
    }
]
)
