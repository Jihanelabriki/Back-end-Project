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
            "adresse": "Place De La Gare, Avenue Haj Ahmed, Rue Cherkaoui, Rabat 10000",
            "image": "https://ocbm.ma/wp-content/uploads/2018/06/10-ibis-agdal-01.jpg",
            "url": "https://all.accor.com/hotel/A0G2/index.fr.shtml?utm_campaign=seo+maps&utm_medium=seo+maps&utm_source=bing+maps"
        },
        {
            "name": "Rabat Marriott",
            "latitude": 34.00421299743012,
            "longitude": -6.844947604271782,
            "description": "Un hôtel avec une vue imprenable",
            "adresse": "Center Agdal, Av. Inaouin, Rabat 10000",
            "image": "https://idprestige.com/assets/images/articles/20220704105341.jpg",
            "url": "https://www.marriott.com/fr/hotels/rbamc-rabat-marriott-hotel/overview/?msockid=146cf619f38f6db32471e5caf2c86c1e"
        },
        {
            "name": "Smarts Hotel Agdal Rabat",
            "latitude": 34.00339827560417,
            "longitude": -6.850338534956876,
            "description": "Un hôtel avec une vue magique",
            "adresse": "35 Rue Azegza, Agdal, 10000 Rabat",
            "image": "https://th.bing.com/th/id/OIP.3xcPnAvxAZdV6vCadfxwcwHaE8?rs=1&pid=ImgDetMain",
            "url": "https://www.booking.com/hotel/ma/smarts.fr.html?msockid=146cf619f38f6db32471e5caf2c86c1e"
        },
        {
            "name": "Hôtel Atlantic Agdal",
            "latitude": 33.99673491919871,
            "longitude": -6.847407699142518,
            "description": "Un hôtel avec une vue magique",
            "adresse": "20 Av. Al Atlas, Rabat",
            "image": "https://cf.bstatic.com/xdata/images/hotel/max300/328924793.jpg?k=13ee3e9626082e3ca292c066a15cd6c726623059a2a269473d042a2336c6c618&o=&hp=1",
            "url": "https://atlanticagdal.com/"
        },

        {
            "name": "Hôtel Soundouss",
            "latitude": 33.995610636268225,
            "longitude": -6.850807898992982,
            "description": "Arrondissement chic comprenant le jardin d'essais botaniques, avec des vergers et des palmiers",
            "adresse": "Pl. Talhah, Rabat",
            "image": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/c0/4f/15/le-soundouss-hotel.jpg?w=900&h=-1&s=1",
            "url": "https://soundousshotel.ma/superior-room/"
        },
        {
            "name": "Rent Inn Suites Hôtel",
            "latitude": 34.00338,
            "longitude": -6.84926,
            "description": "Un hôtel avec une vue magique. Très bien situé, en plein centre ville",
            "adresse": "56 Rue Jabal Oukaïmeden, Rabat 10080",
            "image": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/324592866.jpg?k=16cbc191a558b4f6fe4d3b66ce7c936c7df8bda04a95fe969d18240b6784dd30&o=&hp=1",
            "url": "https://rent-inn.ma/hotel"
        },
        {
            "name": "Gardenia Boutique Hôtel",
            "latitude": 33.99628787755022,
            "longitude": -6.847815846128602,
            "description": "Un hôtel avec une vue magique",
            "adresse": "23 Av. Al Atlas, Rabat 10080",
            "image": "https://th.bing.com/th/id/OIP.wY9JQICrDRt3lvN6TkctQwHaEo?rs=1&pid=ImgDetMain",
            "url": "https://gardeniarabat.com/acces-contact/"
        },
        {
            "name": "Flower Town Hotel & Spa",
            "latitude": 33.99397,
            "longitude": -6.84908,
            "description": "Un hôtel avec une vue magique. Endroit calme",
            "adresse": "20 Av. Michlifen, Rabat 10090",
            "image": "https://th.bing.com/th/id/OIP.RHkKr0uBar4Ks2bTU4YrlgAAAA?rs=1&pid=ImgDetMain",
            "url": "https://flowertown-hotel.com/"
        },
        {
            "name": "Villa Aralia",
            "latitude": 33.99535,
            "longitude": -6.84555,
            "description": "Une ambiance extraordinaire",
            "adresse": "42 Av. des Nations Unies, Rabat 10000",
            "image": "https://th.bing.com/th/id/OIP.k6vdAAQYLFzvNtAXrDtcvAHaLH?rs=1&pid=ImgDetMain",
            "url": "https://villaaralia.com/"
        },
        {
            "name": "Sofitel Rabat Jardin des Roses",
            "latitude": 33.99098,
            "longitude": -6.83726,
            "description": "Le prestige que vous cherchez",
            "adresse": "Avenue Imam Malek, Impasse, Rabat 10000",
            "image": "https://mbhub-wp.s3.eu-west-2.amazonaws.com/Mbhub/05/sofitel-rabat-jardin-des-roses.jpg",
            "url": "https://sofitel.accor.com/fr/hotels/6813.html"
        },
        {
            "name": "Hôtel Oscar",
            "latitude": 34.01490,
            "longitude": -6.84854,
            "description": "Très bien situé, en plein centre ville",
            "adresse": "401 Av. Hassan II, Rabat",
            "image": "https://th.bing.com/th/id/OIP.Pln7Ogtm2w-BxSUNElseuAHaE8?rs=1&pid=ImgDetMain",
            "url": "https://oscarhotelbyatlasstudios.com/histoire/"
        },
        {
            "name": "Helnan Chellah Rabat Hotel",
            "latitude": 34.01583,
            "longitude": -6.83406,
            "description": "Un hôtel avec une vue magique. Très bien situé, en plein centre ville",
            "adresse": "N2 Rue D'Ifni, Rabat 10010",
            "image": "https://th.bing.com/th/id/OIP.Tl72ALyYgs3v7UlQnoFyxQHaDl?rs=1&pid=ImgDetMain",
            "url": "https://www.helnan.com/en/Hotel/helnan-chellah-rabat/?hid=e506a87e-27d5-4deb-ab7a-b4bddd3459f6"
        },
        {
            "name": "Majliss hôtel Downtown",
            "latitude": 34.01768,
            "longitude": -6.83984,
            "description": "Un hôtel avec une vue magique. Très bien situé, en plein centre ville",
            "adresse": "6 Rue Zahla, Rabat 10000",
            "image": "https://majliss-hotel-rabat.hotelmix.fr/data/Photos/OriginalPhoto/15845/1584532/1584532776/Majliss-Hotel-Downtown-Rabat-Exterior.JPEG",
            "url": "https://www.guestreservations.com/majliss-hotel/booking?msclkid=624d044aefc515e9c8e7631dbb9de38a"
        },
        {
            "name": "Hôtel Rihab",
            "latitude": 34.02135,
            "longitude": -6.82826,
            "description": "Un hôtel de luxe",
            "adresse": "45 Av. Moulay Ismail, Rabat 10000",
            "image": "https://res.cloudinary.com/djcyhbk2e/image/upload/f_auto,q_35,w_1200/v1/gvv/prod/wcnnntqex8f0cbbsvhyb",
            "url": "https://www.rihabhotel.com/"
        },
        {
            "name": "La Tour Hassan Palace",
            "latitude": 34.02003,
            "longitude": -6.83000,
            "description": "Un hôtel raffiné",
            "adresse": "26 B.P. 14 Av. Chellah, Rabat 10000",
            "image": "https://th.bing.com/th/id/OIP.4ReRK3en07moufZkxrNlhgHaE-?rs=1&pid=ImgDetMain",
            "url": "https://tourhassanpalace.com/"
        },
        {
            "name": "MGallery Le Diwan Rabat",
            "latitude": 34.01798,
            "longitude": -6.82799,
            "description": "Un hôtel avec une vue magique",
            "adresse": "Place De L'Unité Africaine Hassan District, Rabat 10005",
            "image": "https://th.bing.com/th/id/OIP.kcC4Yn8VqAr8IA8vns3puwHaE3?rs=1&pid=ImgDetMain",
            "url": "https://all.accor.com/hotel/2820/index.fr.shtml?utm_term=nom&utm_campaign=ppc-mga-nom-msn-ww-fr-ww-mix-sear-bp&utm_medium=cpc&msclkid=dc6813f86784153544a574af3259f58c&utm_content=ww-fr-MA-V4871&utm_source=bing"
        },
        {
            "name": "Malak Hôtel",
            "latitude": 34.02268,
            "longitude": -6.83184,
            "description": "Très bien situé, en plein centre ville",
            "adresse": "23, Rue Chellah - Place Mellilia, Av. Moulay Hassan, Rabat",
            "image": "https://th.bing.com/th/id/OIP.MVT3678LBI6lSpmAOVZF7QHaLL?rs=1&pid=ImgDetMain",
            "url": "http://malakhotel.com/"
        },
        {
            "name": "Belere Hôtel Rabat",
            "latitude": 34.01511,
            "longitude": -6.83680,
            "description": "Un hôtel très bien situé",
            "adresse": "33 Av. Moulay Youssef, Rabat 10000",
            "image": "https://th.bing.com/th/id/OIP.VE_AJXenNiix71p5dAfOlgHaE8?rs=1&pid=ImgDetMain",
            "url": "https://belere-hotels.com/fr"
        },
        {
            "name": "Hôtel Mercure Rabat Sheherazade",
            "latitude": 34.01962,
            "longitude": -6.82277,
            "description": "Un hôtel avec une vue imprenable",
            "adresse": "21 Rue de Tunis, Rabat 10000",
            "image": "https://pix10.agoda.net/hotelImages/591/59156/59156_17010511440050136654.jpg?s=1024x768",
            "url": "https://www.booking.com/hotel/ma/mercure-sheherazade.fr.html?msockid=146cf619f38f6db32471e5caf2c86c1e"
        },
        {
            "name": "Braat Hotel",
            "latitude": 34.01414,
            "longitude": -6.82856,
            "description": "Un hôtel avec une vue magique. Très bien situé, en plein centre ville",
            "adresse": "46 Av. Patrice Lumumba, Rabat 10010",
            "image": "https://th.bing.com/th/id/R.f99aee3509cce9172bc73284652d0fab?rik=KjDML4GkBfa6MA&riu=http%3a%2f%2fcdn-cms0.hotelrunner.com%2fassets%2fphotos%2flarge%2f47b67356-4820-4fee-9123-89942039e70a.jpg&ehk=f%2bMpY8OLEiqy%2bniYJxTzd%2fOitE2dbs7x0IuDn3lBPng%3d&risl=&pid=ImgRaw&r=0",
            "url": "https://braat.ma/en/"
        },
        {
            "name": "The White Palace Rabat",
            "latitude": 33.980564753943526,
            "longitude": -6.863974605065471,
            "description": "Doté d'une piscine extérieure, d'un jardin et offrant une vue sur le jardin, cet établissement est situé à 5,1 km de la bibliothèque nationale du Royaume du Maroc. Cette maison d'hôtes 5 étoiles propose une réception ouverte 24h/24 et un service de sécurité assuré toute la journée.",
            "adresse": "Angle Rue Bani Ourraine, Rabat 10000",
            "image": "https://th.bing.com/th/id/OIP.uU3hrA9UO8gYPCG8yC0BPwAAAA?rs=1&pid=ImgDetMain",
            "url": "https://www.whitepalacerabat.com/"
        },
        {
            "name": "Residence Davos Rabat",
            "latitude": 33.9799,
            "longitude": -6.82476,
            "description": "L'établissement assure des services de navette aéroport et de location de voitures. Cet appartement comprend une chambre, une télévision à écran plat, un coin salon et une salle de bains",
            "adresse": "Agdal, Rabat, Maroc",
            "image": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/274500886.jpg?k=aee4fc6df657eae9bd3aabf26ca55707538fff12891f6b8b08a8f54eddf7d04a&o=&hp=1",
            "url": "https://fr.planetofhotels.com/maroc/rabat/residence-davos-rabat"
        },
        {
            "name": "Riad Sidi Fatah",
            "latitude": 34.0246964,
            "longitude": -6.837572,
            "description": "Niché au cœur de la ville historique de Rabat, le Riad Sidi Fatah est un véritable havre de paix qui allie tradition et confort moderne.",
            "adresse": "12 Rue Benacer Lakrari, Médina de Rabat, Rabat, Maroc, 10000",
            "image": "https://th.bing.com/th/id/OIP.PAn6xBD5ESL0xwMtTrixFwHaE5?rs=1&pid=ImgDetMain",
            "url": "https://www.riad-sidifatah-rabat.com"
        },
        {
            "name": "Studios Taha",
            "latitude": 34.0145649,
            "longitude": -6.8334282,
            "description": "L'établissement dispose d'une réception ouverte 24h/24 et d'un restaurant avec un coin repas extérieur. Ce Bed & Breakfast dispose d'une connexion Wi-Fi gratuite...",
            "adresse": "Avenue Haj Hassan Akkari Rabat N 4, El Akkari, Rabat, Maroc, 10000",
            "image": "https://th.bing.com/th/id/OIP.wPn7IUGcaqXymqz3J5FjewHaEK?rs=1&pid=ImgDetMain",
            "url": "https://fr.readytotrip.com/hotels/Maroc/Rabat-Sal%C3%A9-Zemmour-Za%C3%ABr./Rabat/M%C3%A9dina/studios-taha/"
        },
        {
            "name": "STORY Rabat",
            "latitude": 33.9434484,
            "longitude": -6.8156112,
            "description": "STORY Rabat est un boutique hôtel de luxe situé dans le quartier des Ambassadeurs à Rabat.Réputée pour son style de service sur mesure, ses intérieurs bien pensés et ses vastes espaces d’hébergement",
            "adresse": "Rue Bani Yadder Quartier des Ambassadeurs, Rabat 10220 Morocco",
            "image": "https://th.bing.com/th/id/OIP.oZJY1KjLH6oLOqipjN03aAHaEH?rs=1&pid=ImgDetMain",
            "url": "https://www.story-rabat.com/fr/"
        },
        {
            "name": "Riad Dar Soufa",
            "latitude": 34.0241928,
            "longitude": -6.8395664,
            "description": "Le Riad Dar Soufa est situé dans une rue calme, juste à côté de l'avenue Mohamed V, communément appelée Legza dans la médina.",
            "adresse": "7 Derb Souaf Legza Médina, Rabat 10000 Morocco",
            "image": "https://th.bing.com/th/id/R.b5a64f84b0976f617319ce9dff37c47f?rik=5ClwQTyV%2f59DDA&riu=http%3a%2f%2f3.bp.blogspot.com%2f-khGdFAhbqUc%2fT6Tx43CXZMI%2fAAAAAAAAAYo%2fB5YAwyoGJxw%2fs1600%2fDSC_0385.JPG&ehk=plwKDPFOuonL9IJ1mtrBAsNXRdAmMFsIhf8eq646tLU%3d&risl=&pid=ImgRaw&r=0",
            "url": "https://riadrabatmedinadarsoufa.blogspot.com/"
        },
        {
            "name": "Euphoriad",
            "latitude": 34.027405,
            "longitude": -6.838946,
            "description": "La Maison Euphoria, autrefois propriété du Pacha Bargach à Rabat, reflète le mode de vie des familles notables de la société traditionnelle Rabatienne.",
            "adresse": "7-9 Impasse Caid Bargach Ancienne medina, Rabat 10030 Morocco",
            "image": "https://th.bing.com/th/id/OIP.tluybfp7-hIR8rQWRlO9agHaE7?rs=1&pid=ImgDetMain",
            "url": "https://www.euphoriad.com/"
        },
        {
            "name": "Dar Zouhour",
            "latitude": 34.027645,
            "longitude": -6.838732,
            "description": "Composé de trois suites autour du patio, chacune avec salle de bain privée, télévision, connexion Internet et climatisation.",
            "adresse": "4 Impasse Kaid Bargach 4 Impasse Kaid Bargach Medina, Rabat 10030 Morocco",
            "image": "https://th.bing.com/th/id/R.55adf608f41085e97b351bce3239eef9?rik=7KKxiNVaNHjr2A&pid=ImgRaw&r=0",
            "url": "https://hoteldarzouhourrabat.hotelmix.fr/"
        },
        {
            "name": "Riad Meftaha",
            "latitude": 34.0253128,
            "longitude": -6.8425519,
            "description": "Le Riad Meftaha, une maison d'hôtes au cœur de la ville de Rabat, proche de la médina, des souks et de la mer.",
            "adresse": "15 Rue Iran Quartier Marassa Ocean, Rabat 10000 Morocco",
            "image": "https://th.bing.com/th/id/OIP.lQvvA2ZorDoM1r_vxLroDQHaED?rs=1&pid=ImgDetMain",
            "url": "https://riad-meftaha.com/"
        },
        {
            "name": "Maple Farm Bed and Breakfast Malta",
            "latitude": 35.871262,
            "longitude": 14.39699,
            "description": "Maple Farm, située dans un cadre rural à la périphérie de l'ancienne ville de Mdina, offre un hébergement confortable dans un environnement paisible avec une grande piscine et de vastes jardins.",
            "adresse": "Buskett Road, Rabat, Island of Malta 2705 Malta",
            "image": "https://th.bing.com/th/id/R.a7a256b37c0a231effc984f04e5a73a5?rik=8lYJHi5lC%2bD2Sg&pid=ImgRaw&r=0",
            "url": "https://www.maplefarmbedandbreakfast.com/"
        },
        {
            "name": "Myn in Rabat",
            "latitude": 35.8836694,
            "longitude": 14.3985816,
            "description": "MYN vous encourage à vivre comme un local à Rabat ; flânez dans les ruelles sinueuses, buvez du thé dans des verres sans poignée dans un club traditionnel, ou achetez du pain chaud chez le boulanger local à déguster sur la place.",
            "adresse": "17 Arcadia Triq Bir L-Iljun Street, Rabat, Island of Malta RBT 1364 Malta",
            "image": "https://th.bing.com/th/id/OIP.8QPCl1CB7UlPAN8NfD9XWgHaFj?rs=1&pid=ImgDetMain",
            "url": "https://mynmalta.com/"
        },
        {
            "name": "Riad à la Belle Etoile",
            "latitude": 34.036264,
            "longitude": -6.825728,
            "description": "e Riad à la Belle Etoile, premier riad de la médina de Rabat/Salé, vous offre un service hôtelier de haute qualité dans l'une des maisons les plus authentiques et raffinées de la médina.",
            "adresse": "14 saniat Sabounji Médina, Sale 11001 Morocco",
            "image": "https://th.bing.com/th/id/R.58c16767009c41b9c09891b38edaa09f?rik=UrhRGszFwolh3w&pid=ImgRaw&r=0",
            "url": "https://www.visitrabat.com/lieux/riad-a-la-belle-etoile/"
        }
    ]





)
