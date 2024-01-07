import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    debug: true,
    fallbackLng: "en",
    resources: {
      en: {
        translation: {
          Home: "Home",
          AboutUs: "About Us",
          Tours: "Tours",
          Hotels: "Hotels",
          Transportation: "Transportation",
          Destination: "Destination",
          Services: "Services",
          Staff: "Staff",
          PhotoGallery: "Photo Gallery",
          UsefulLinks: "Useful Links",
          infoUsefulLinks: "Feel the safety and hospitality",
          Weather: "Weather",
          HotelBooking: "Hotel Booking",
          BankRate: "Bank Rate",
          TrainBooking: "Train Booking",
          FlightBooking: "Flight Booking",
          OnlinePayment: "Online Payment",
          PortalofUzbekistan: "Portal of Uzbekistan",
          MinistryofForeignAffairs: "Ministry of Foreign Affairs",
          AssociationofPrivateTourismAgencies:
            "Association of Private Tourism Agencies",
          usefulInformation: "Useful Information",
          faq1title: "Uzbekistan. Safe travel GUARANTEED",
          faq1text1:
            "New times require new security solutions. The threat of the spread of coronavirus continues to be relevant and negatively affect physical and emotional health. Now, before any trip, the traveler involuntarily thinks about precautions and sanitary standards. How can we avoid the negative impact of the pandemic and still maintain the desire to travel? There is a way out! Namely, trust the professionals and special services responsible for the safety of each tourist. For these purposes we have developed a system of safe tourism Uzbekistan. Safe travel GUARANTEED, which complies with all sanitary standards that meet international standards.",
          faq1text2:
            "In fact, such a system implies strict compliance with sanitary standards. and hygiene measures to combat COVID-19 in Uzbekistan. All tourist sites, related infrastructure and public places must obtain a special permit or certificate to continue their activities. Such objects include: accommodation facilities (hotels, guesthouses, hostels, etc.), all points of the state border, air, train and car stations, objects of material cultural heritage, museums, theaters and other cultural objects",
          faq1text3:
            "What is included in the package of measures of the safe tourism system  Uzbekistan. Safe travel GUARANTEED?",
          faq1text4:
            " ✔️Upon arrival in the country, you will be met by a vehicle that is pre-disinfected and half-filled. Masks are not allowed to be removed.",
          faq1text5:
            "✔️At the entrance to the hotel or any other place, security measures the temperature and provides a sanitizer.",
          faq1text6: "✔️All employees are required to wear masks and gloves.",
          faq1text7:
            "✔️Provided to minimize contact staff – to-guest. Minimum contacts – the minimum of risk.",
          faq1text8: "✔️Communicate only at a safe distance.",
          faq1text9:
            "✔️In public places, tables and chairs are placed at a safe distance.",
          faq1text10:
            "✔️All public items are treated with antiseptic agents several times a day.",
          faq1text11:
            "✔️Antiseptics are freely available in all public places.",
          faq1text12: "More details",
          faq2text1: "Holidays",
          faq3text1: "Operating hours of establishments",
          faq3text2:
            "All state institutions in Uzbekistan operate in an 8 hour working regime. State institutions (banks, embassies and consulates) - from 9:00 to 18:00 or from 8:00 to 17:00, lunch from 13:00 to 14:00. Special services-Ambulance, pharmacies, emergency services, fire assistance, police, transport companies: airport, railway stations, work around the clock. Tourist accommodation facilities (hotels, hotels, guest houses, resorts, some tourist recreation areas) - in check-in and check-out mode. Trade centers (shopping malls, hypermarkets, stores) - from 08:00 to 23:00. Entertainment establishments (amusement parks, cinemas, theaters, concert halls) - from 10:00 to 23:00 Catering points (restaurants, cafes, bars, teahouses) from 10:00 to 23:00Night establishments (restaurants, bars, night clubs) from 21:00 to 05:00 and, as a rule, until the last customer.",
          faq4text1: "Transport",
          faq4text2:
            "You can travel to Uzbekistan by plane, train, international buses, and fans of extreme travel - by car, motorcycle, and even hitchhiking. The main is that you are convenient. There is the right-hand traffic in Uzbekistan.",
          faq4text3:
            "This is by far the fastest way to get to Uzbekistan. The main airport of the country is located in Tashkent. Modern passenger fleet at the International Airport named after I. Karimov Tashkent represented by modern Boeing-767-300 aircraft, Boeing-757-200, Airbus-320-200, Boeing 787-8 Dreamliner and British-Aerospace Avro RJ85.. Modern and comfortable economy class and business class lounges, multimedia services, delicious food, friendly flight attendants - all these amenities can be based on the basis of Uzbekistan Airways. Modern International airport terminals are open for you in every region Uzbekistan.",
          faq4text4: "Planes",
          faq4text5: "The country's main air carrier:",
          faq4text6: "Uzbekistan Airways",
          faq4text7:
            "JSC transports a huge number of people around the world, providing its passengers with «Safety, stability, comfort». The company operates the regular flights from more than 40 cities around the world . In addition, the company operates regular flights to the CIS countries and within the country. Representative offices of the airline operate in 25 countries around the world.",
          faq4text8: "Buy a ticket",
          faq4text9: "Flight Schedule",
          faq4text10: "Foreign airlines in Uzbekistan",
          faq4text11:
            "Uzbekistan implements the new reforms. Soon our country will become the largest transport hub in the world, the sky will be opened for the foreign air carriers, and the new charter flights will be launched to Uzbekistan. Every day Uzbekistan receives flights from international air carriers such as Turkish Airlines, Aeroflot, UTair, Asiana Airlines, Korean Air, Fly Dubai, S7. Among others, foreign airlines Atlas global (Turkey), Zhejang Loong Airlines (China) have already launched the new charter flights to our country.",
          faq4text12: "Trains",
          faq4text13:
            "Nowadays this type of the public transport in Uzbekistan is as popular as the air travel. If you want to enjoy the beauty of the cities of Uzbekistan or drive from Tashkent to Samarkand, and then reach Bukhara or even Khiva, it will be more convenient to travel by train. One of the most popular and high-speed train is “Afrosiyob”, which runs daily 2 times a day. “Afrosiyob” is convenience and comfort, quality food and first-class service.",
          faq4text14: "Railway stations of Uzbekistan",
          faq4text15: "Book or to purchase tickets",
          faq4text16: "Tashkent Metro",
          faq4text17:
            "If you travel to the capital of Uzbekistan, you can visit one of the main sightseeing of the city –Tashkent underground. It has a small network, so it is easy to navigate there. Nevertheless, the each station for residents is just a place to wait for trains, but for tourists it is a unique art gallery. Metro services are available daily from 06:00 to 00:00.",
          faq4text18: "Other transport:",
          faq4text19: "Intercity buses",
          faq4text20:
            "In our country, the intercity and the international buses run daily and hourly, connecting all cities of Uzbekistan and neighboring countries. If you want, for example, to go from Tashkent to Samarkand or, for example, to Bukhara, and from there directly to Khiva, it is better to take the high-speed train to Bukhara, and then the intercity bus to Khiva. This is the standard route for the traveler. This is both economical and informative.",
          faq4text21: "Buy a ticket for intercity buses",
          faq4text22: "Городские автобусы",
          faq4text23:
            " One of the most convenient and economical options for moving around the city is an urban transport. Nowadays the city buses are equipped with modern media technologies, the air conditioning, Wi-fi, and even there are the facilities for the disabled. The cost of a ticket for one trip is 1400 sums. You can buy the tickets from the ticket inspectors on the bus itself.",
          faq4text24: "Minibus taxis",
          faq4text25:
            "The minibus taxi in Uzbekistan is mainly used to move around the city over long distances, most often to get from one end of the city to another. If the taxi is expensive, people choose minibuses; it is fast, economical and convenient. You can use the taxi services around the city, to reach the airport and the railway station, or, for example, to take a day trip to interesting places, to go outside of the city or to travel with friends to the other cities of our vast country.",
          faq4text26:
            "In Tashkent and Samarkand, you can order a taxi via Yandex Taxi and MyTaxi mobile apps.",
          faq4text27: "Rent a car",
          faq4text28:
            "If you prefer to drive around the city, then the best option for you is to rent a car. There are many companies in Tashkent that rent the cars of different classes. You just need the passport and the driver's license. And, if you are in Uzbekistan recently, you can find a city map at any city stall.",
          faq5text1: "Emergency numbers",
          faq5text2: "Emergency services:",
          faq5text3: "Fire emergency",
          faq5text4: "Police",
          faq5text5: "Ambulance",
          faq5text6: "Emergency gas service",
          faq5text7: "Reference",
          faq6text1: "Diplomatic missions",
          faq6text2:
            "Uzbekistan has diplomatic relations with almost all the countries around the world and this reflects the role and place of the country among world community.",
          faq6text3:
            "Nowadays, Uzbekistan has its diplomatic missions in more than 50 countries and more than 60 countries have their representative offices here in our country.",
          faq6text4: "Find out more",
          faq7text1: "Frequently used phrases",
          faq7text2:
            "The Uzbek language is quite complex, but if you know a couple of phrases that are most used in this sunny country, you will not get lost. Moreover, Uzbek people are really friendly and responsive and ready to help you at any time. It is not a secret that Uzbek hospitality is known all over the world.",
          faq7text3: "Most popular keywords",
          faq7text4: "Before the trip",
          faq8text1:
            "Do you want to get a visa to Uzbekistan? Now it's much easier. All you need is an Internet connection and a passport. And, if your country is listed among 86 visa-free nations, then just buy tickets, pack your bags and Welcome to Uzbekistan! You can apply for an electronic tourist visa to Uzbekistan through the web-site",
          faq8text2: "e-visa.gov.uz",
          faq9text1: "Traveling with kids",
          faq9text2:
            "The most inspiring, but at the same time tedious option of travel is a family vacation with children. We give some useful life hacks for those who want to relax for the benefit of themselves and children, without getting tired of the constant hustle and bustle, to get the most positive emotions and impressions for the whole year.",
          faq9text3: "Entering the country",
          faq10text1: "Customs regulations",
          faq10text2: " Uzbekistan has approved a single",
          faq10text2_1: "form",
          faq10text2_2:
            "of customs Declaration (T-6). The sample of the declaration is available at all customs points and the airports of the Republic.",
          faq10text3: "What goods can be imported to Uzbekistan",
          faq10text4:
            "If you enter Uzbekistan through the international airports, you can import goods without duties up to 2000 US dollars, through the railway and the river checkpoints - up to 1000 US dollars, through roadway (pedestrian) checkpoints – up to 300 US dollars. In this case, you do not need to specify them in the Customs declaration and can go through the 'Green' corridor.",
          faq10text5:
            "However, there are some restrictions on the import of certain goods without duties. In particular, you can import alcohol, including beer, up to 2 liters, tobacco products of various types – up to 10 boxes, cologne and liquids containing alcohol in their composition – up to 3 pieces, precious metal and jewelry, made of precious stones – up to 65 grams.",
          faq10text6: "What goods can be exported from Uzbekistan ",
          faq10text7:
            "If you depart from the Republic of Uzbekistan, you can export goods worth up to 3,000 us dollars freely. You do not need to specify them in the customs Declaration.",
          faq10text8: "How much money can I import",
          faq10text9:
            "When you arrive to Uzbekistan, you can import foreign currency in cash without any limit, but it has to be specified in T-6 Declaration form. At the request of the visitor, cash foreign currency can be accepted for storage by TC-21 receipt without any tax charges.",
          faq10text10: "How much money can I export",
          faq10text11:
            "The citizens of Uzbekistan can export no more than 5000 US dollars without obtaining a special permit. The amount more than 5,000 US dollars can be exported just with the permission of the Central Bank of the Republic of Uzbekistan.",
          faq10text12:
            "The foreign citizens can export funds within the amount previously imported and declared in the customs Declaration, when entering Uzbekistan. If you are going to export funds over the amount shown in your T-6 Declaration form or TC-28 certificate, you must have the bank permit. When exporting traveler's checks, be sure to specify their numbers in the customs Declaration T-6.",
          faq10text13:
            "It is forbidden to import into the territory of Uzbekistan:",
          faq10text14:
            "- press, manuscripts, cliches, drawings, photo tapes, negatives, film, video and audio products, recordings, sound materials aimed at undermining the state and social order, violating territorial integrity, political independence and state sovereignty, propagating war, terrorism, violence, national exclusivity and religious hatred, racism and its variety (anti-Semitism, fascism), as well as pornographic content;",
          faq10text15:
            "- narcotic drugs, psychotropic substances and precursors without the permission of the Ministry of health of the Republic of Uzbekistan;",
          faq10text16:
            "- jewelry, made of precious metals and gemstones for commercial purposes without a license issued by the Ministry of Foreign Trade of the Republic of Uzbekistan (the limit of jewelry from precious metals and stones imported by physical entity and not subjected to customs duties, is 5 pieces with a total weight of no more than 30 grams);",
          faq10text17_1: "medicines",
          faq10text17:
            "-  and medical equipment without the permission of the Ministry of health of the Republic of Uzbekistan (Download the list);",
          faq10text18:
            "- radio-electronic equipment from high-frequency devices without the permission of the Ministry for Development of Information Technologies and Communications of the Republic of Uzbekistan;",
          faq10text19:
            "- products of plant and animal origin without the permission of the sanitary and epidemiological service;",
          faq10text20: "It is forbidden to export outside Uzbekistan:",
          faq10text21:
            "- wheat, rye, barley, oats, rice, corn, buckwheat; bakery products (except flour confectionery, cakes, cookies of their own production); flour, cereals, livestock, poultry, meat and edible offal, sugar, vegetable oils (the maximum export rates for individuals of these goods are determined by the legislation of the Republic of Uzbekistan)",
          faq10text22:
            "- ethyl alcohol, leather raw materials (including non-standard), fur and fur raw materials, including Karakul (including non-standard); scrap and waste of non-ferrous metals; silkworm cocoons suitable for unwinding, raw silk (uncoiled), silk waste (including cocoons unsuitable for unwinding, cocoon thread waste and loosened waste); rare and endangered species of animals and plants of the Republic of Uzbekistan listed in the Red book.",
          faq11text1: "Border and passport control",
          faq11text2:
            "When passing through the customs points of the State border of the Republic of Uzbekistan, airports, make sure that all the necessary documents are available and safe: ticket, passport with visa, T-6 Declaration, permits for the transportation of animals, plants, medicines and money. Upon departure, each passenger must pass through passport and customs control points after handing over their main baggage at the airport.",
          faq12text1: "Rules for the transport of animals",
          faq12text2:
            "So, you have planned the trip to Uzbekistan, but you want to take your pet or favorite flowers with you. In this case, you have to prepare the special documents and get acquainted with the rules of the veterinary and phytosanitary control. When transporting pets and decorative birds, you must have a pet passport and a veterinary certificate, confirming its health. You can get this document from any veterinary service at your place of residence.",
          faq12text3:
            "When transporting and exporting animals and plants listed in the Red book, you need to get permission from the State Committee for protection of nature of the Republic of Uzbekistan.",
          faq12text4:
            "Therefore, make all the documents for your animals in time, do all the necessary veterinary procedures and travel with pleasure.",
          faq12text5: "Staying in the country",
          faq13text1: "Registration",
          faq13text2:
            "You have already arrived to Uzbekistan and, if you plan to stay here for more than 1 day, you have to make a temporary registration within 3 days.",
          faq13text3:
            "If you arrive to Uzbekistan on your own, without an invitation from an individual or legal entity, the administration of your accommodation facility (hotel, hostel or guest house) must issue you the temporary registration.",
          faq13text4:
            "If you were sent the invitation, then the inviting person registers you at their place of residence or at your living place.",
          faq13text5:
            "However, we live in the XXI century and the remote registration of foreign citizens has been operating here for a long time.",
          faq13text6:
            "A single form of registration of foreign citizens through the “E-mehmon” system has been launched in Uzbekistan in 2018.",
          faq13text7: "Registration of independent tourists in hotels",
          faq13text8_1:
            "If you have already registered at the accommodation facility and have already paid the tourist fee, but do not live there,",
          faq13text8: "“E-mehmon” ",
          faq13text8_2:
            "system has a special section for the independent tourists. You just need to fill in all the fields, specifying the number of days of your stay, the system will calculate the payment amount, which can be paid by cash or by card upon your arrival. Please note that the administration of any accommodation facility on the territory of Uzbekistan must independently register foreign citizens upon request.",
          faq13text9: "Modern accommodation facilities",
          faq14text1:
            "So, you have registered and now you have a choice where to stay. There is a huge number of different accommodation facilities in Uzbekistan: from the fashionable hotel chains and the modern hotels to the guest houses in the national style and Yurt camps. All you need for your stay at the hotels in Uzbekistan is a passport, a booking coupon (if available) and timely payment at the current exchange rate. All accommodation facilities have a check-in and check-out system.",
          faq14text2: "Accommodation types:",
          faq14text3: "Hotels",
          faq14text4: "Hostels",
          faq14text5: "Guest houses",
          faq14text6: "Camping",
          faq14text7: "Yurt camps",
          faq15text1: "Food and cuisine",
          faq15text2:
            "In contrast to the Roman saying 'In vino veritas', we say:The truth is still in the food.'",
          faq15text3: "In Uzbekistan, people like to eat delicious food.",
          faq15text4: "The most delicious bread is in Uzbekistan.",
          faq15text5:
            "Many Uzbek dishes are prepared on an open fire (hearth).",
          faq15text6:
            "In Uzbekistan people get used to eat fat and high-calorie food.",
          faq15text7: "After the meal, Uzbeks drink hot tea.",
          faq15text8:
            "Uzbeks eat lamb, beef and horse meat (horse sausage - kazy).",
          faq15text9:
            "In Uzbekistan guests are greeted with the fragrant tea and the hot flatbread, and farewell with delicious pilaf.",
          faq15text10:
            "Special tea ceremony (before to pass tea to the guest, a bowl of tea is poured into the teapot three times, and tea is served to the guest on the fourth).",
          faq15text11:
            "In Uzbekistan every guest always leaves well-fed and happy and with gifts.",
          faq15text12: "Thus, Welcome to tasty Uzbekistan!",
          faq16text1: "Shopping and souvenirs",
          faq16text2:
            "To get acquainted with the culture and life of Uzbek people, it is better to go to the local Bazaar. The Bazaar is a special separate world, where people of all the colors gather. Here you can enjoy not only an abundance of various goods: souvenirs, fruits, vegetables, spices, bread, food, but also communication with people and a special, soulful atmosphere that you will not find in any shopping center or local hypermarket. If you want to buy souvenirs and gifts, be sure to visit Chorsu Bazaar in Tashkent, Siab Bazaar in Samarkand or Toki-Zargaron in Bukhara. You can also visit the workshops of Rishtan artisans or Margilan factory of silk production 'Yodgorlik'– the real treasures of Uzbekistan.",
          faq17text1: "Security",
          faq17text2:
            "According to the US Gallup Institute, in 2018 Uzbekistan was included in the top five safest countries in the world. If you follow the basic precautions, travel to Uzbekistan will be safe and comfortable. If you still need help on your journey, there are police stations in any public place, where you will receive first aid, or you can contact the police by calling 102. There is a tourist police in Uzbekistan as well, which is responsible for your safety in our country.",
          faq18text1: " Hygiene",
          faq18text2:
            "Since childhood we were taught to wash our hands before eating – the most important rule of personal hygiene. During your stay in Uzbekistan, you should follow the simplest hygiene rules: wash your hands before eating, use wet wipes or hand sanitizers, use the shower more often in hot weather, do not drink raw water, especially from open reservoirs, do not consume untested food and drinks, especially in exotic places.",
          faq18text3:
            "Remember, people in Uzbekistan eat fat and high-calorie food since childhood, and if you did not get used to eat such food, it can be heavy for your stomach. Eat moderately and do not mix unsuitable foods.",
          faq18text4:
            "As summer in Uzbekistan is very hot, during the summer Chillya, follow the appropriate precautions: do not walk around the city at hot noon, wear hats and light and comfortable clothing and shoes, consume as much water as possible to avoid dehydration.",
          faq19text1: "Customs and Rules",
          faq19text2:
            "Uzbekistan is a secular country, but Islam is the main religion in the country. If you visit any local mosque, you should follow some rules. Restraint and respect are required when visiting the mosque. It is better to visit it, when there is no worship. The clothing is also very important: short pants, t-shirts and skirts are definitely not welcome here, and women should cover their heads before entering the mosque.",
          faq19text3:
            "Many mosques do not prohibit shooting, but this is a taboo during the prayer. Usually the parishioners during the prayer do not pay attention to the visitors in order not to interrupt it.",
          faq19text4:
            "If you have decided to photograph people on the street, first of all you should ask their permission, for ethical reasons. You will never be refused, but it is more comfortable and calmer, when they smile in the frame.",
          faq19text5:
            "In Uzbekistan it is forbidden to drink alcohol in the public places and while driving a car. You will be fined 1/3 of the minimum wage for the smoking in the offices, health care facilities, educational and sports facilities, fire-prone areas, including gas stations, streets, stadiums, squares, parks, all types of public transport and other public places. Smoking is allowed only in special designated areas.",
          aboutus1: "Antique Travel",
          aboutus2:
            " “Travel is the main thing you purchase that makes you more extravagant”. We, at ‘Antique Travel’, swear by this and put stock in satisfying travel dreams that make you perpetually rich constantly. We have been moving excellent encounters for a considerable length of time through our cutting-edge planned occasion bundles and other fundamental travel administrations. We rouse our clients to carry on with a rich life, brimming with extraordinary travel encounters. Through our exceptionally curated occasion bundles, we need to take you on an adventure where you personally enjoy the stunning magnificence of Central Asia and far-off terrains. ",
          aboutus3:
            "We need you to observe sensational scenes that are a long way past your creative ability. The powerful inclination of world voyagers to travel more nowadays is something that keeps us inspired to satisfy our vacation necessities. Our vision to give you a consistent occasion encounter makes us one of the main visit administrators in the regularly extending travel industry. To guarantee that you have a satisfying occasion and healthy encounters, all our vacation administrations are available to your no matter what. On your universal occasion, we guarantee that you are very much outfitted with outside trade (Forex Cards, Currency Notes), visa, and travel protection. Regardless of whether it’s reserving flights or inns for your movement, Antique Travel offers everything under one umbrella. We likewise have journey occasions for individuals who are searching for solace and reasonable extravagance. We offer the best limits on our top-rated visit bundles to clients who pick our viable administrations over and over. How about we remind you indeed that we don’t expect to be your visit and travel specialists; we endeavor to be your vacation accomplices until the end of time.",
          tashkentstory:
            "It is in northeastern Uzbekistan, near the border with Kazakhstan. Tashkent comes from the Turkic tash and kent, literally translated as 'Stone City' or 'City of Stones'.",
          samarqandstory:
            "Samarqand, is a city in southeastern Uzbekistan and among the oldest continuously inhabited cities in Central Asia.",
          bukharastory:
            " Bukhara, which is situated on the Silk Route, is more than 2,000 years old. It is the most complete example of a medieval city in Central Asia, with an urban fabric that has remained largely intact.",
          khivastory:
            "Khiva is a beautiful oasis city with ancient walls, minarets and unique clay buildings. Khiva was declared as the tourist capital of the Islamic world in 2024! Khiva is over 2500 years old.",
          ferganastory:
            "Fergana first appears in written records in the 5th-century. However, archeological evidence demonstrates that the city had been populated since the Chalcolithic period.",
          shakhrisabzstory:
            "Shakhrisabz is one of the most ancient and picturesque cities of Uzbekistan. Its historical centre is included in the UNESCO World Heritage List. The great commander Amir Temur was born in this city.",
          goroda: "Cities",
          nature: "Nature",
          culture: "Culture",
          arch: "Architecture",
          people: "People",
          food: "Food/Meals",
          metro: "Metro",
          art: "Art",
          sport: "Extreme and sports",
          mistery: "Mysteries of archeology",
          historic: "Objects of ziyorat tourism",
          subsections: "Subsections",
          general1: "General information",
          general2: "Geographical and space location:",
          general3: "The Planet Earth, Eurasian continent, Central Asia",
          general4: "Area:",
          general5: "447.4 thousand square km.",
          general6: "Population:",
          general7: "Nations:",
          general8:
            "more than 134 nations live in the country, but the majority of the population is Uzbek (83.8%)",
          general9: "Regions:",
          general10: "12 regions + Republic of Karakalpakstan",
          general11: "Famous cities:",
          general12: "Language:",
          general13:
            "the official language is Uzbek, and Russian and English are the languages of international communication.",
          general14: "Religion:",
          general15:
            "Uzbekistan is a secular country, most of the population professes Islam. The country is also home to representatives of Christianity, Buddhism and other religions.",
          general16: "International phone code:",
          general17: "Monetary unit:",
          general18: "Climate:",
          general19: "mild winters, hot summers",
        },
      },
      de: {
        translation: {
          Home: "Zuhause",
          AboutUs: "über uns",
          Tours: "Touren",
          Hotels: "Hotels",
          Transportation: "Transport",
          Destination: "Ziel",
          Services: "Dienstleistungen",
          Staff: "das Personal",
          PhotoGallery: "Fotogallerie",
          UsefulLinks: "handige links",
          infoUsefulLinks: "Voel de veiligheid en gastvrijheid",
          Weather: "Weer",
          HotelBooking: "Hotelboeking",
          BankRate: "Banktarief",
          TrainBooking: "Trein boeken",
          FlightBooking: "Vluchtboeking",
          OnlinePayment: "Online betaling",
          PortalofUzbekistan: "Portaal van Oezbekistan",
          MinistryofForeignAffairs: "Ministerie van Buitenlandse Zaken",
          AssociationofPrivateTourismAgencies:
            "Vereniging van particuliere toerismebureaus",
          usefulInformation: "Bruikbare informatie",
          faq1title: "Oezbekistan. Veilig reizen GEGARANDEERD",
          faq1text1:
            "Nieuwe tijden vragen om nieuwe beveiligingsoplossingen. De dreiging van de verspreiding van het coronavirus blijft relevant en negatief fysieke en emotionele gezondheid beïnvloeden. Nu, voor elke reis, de reiziger denkt onwillekeurig na over voorzorgsmaatregelen en sanitair normen. Hoe kunnen we de negatieve gevolgen van de pandemie vermijden en toch de wens om te reizen behouden? Er is een uitweg! Vertrouw namelijk op de verantwoordelijke professionals en speciale diensten voor de veiligheid van elke toerist. Voor deze doeleinden hebben we ontwikkelde een systeem van veilig toerisme Oezbekistan. Veilig reizen GEGARANDEERD, die voldoet aan alle sanitaire normen die voldoen aan internationale normen.",
          faq1text2:
            "In feite impliceert een dergelijk systeem strikte naleving van de sanitaire normen. en hygiënemaatregelen ter bestrijding van COVID-19 in Oezbekistan. Alle toeristische sites, gerelateerde infrastructuur en openbare plaatsen moeten een speciale vergunning of certificaat krijgen om hun activiteiten voort te zetten. Dergelijke objecten omvatten: accommodatiefaciliteiten (hotels, pensions, hostels, etc.), alle punten van de staatsgrens, lucht-, trein- en autostations, objecten van materieel cultureel erfgoed, musea, theaters en andere culturele objecten",
          faq1text3:
            "Wat zit er in het maatregelenpakket van het veilig toerisme  systeem  Oezbekistan. Veilig reizen GEGARANDEERD?",
          faq1text4:
            " ✔️Bij aankomst in het land wordt u opgewacht door een voertuig dat vooraf is ontsmet en half gevuld. Maskers mogen niet worden afgezet.,",
          faq1text5:
            "✔️Bij de ingang van het hotel of een andere plaats meet de beveiliging de temperatuur en zorgt voor een ontsmettingsmiddel.",
          faq1text6:
            "✔️Alle medewerkers zijn verplicht mondkapjes en handschoenen te dragen.",
          faq1text7:
            "✔️Geleverd om contactpersoneel tot een minimum te beperken - voor gasten. Minimum contacten – het minimale risico.",
          faq1text8: "✔️Communiceer alleen op veilige afstand.",
          faq1text9:
            "✔️Op openbare plaatsen worden tafels en stoelen bij een kluis geplaatst afstand.",
          faq1text10:
            "✔️Alle openbare items worden meerdere keren behandeld met antiseptische middelen keer per dag.",
          faq1text11:
            "✔️Antiseptica zijn vrij verkrijgbaar op alle openbare plaatsen.",
          faq1text12: "Meer details",
          faq2text1: "Vakantie",
          faq3text1: "Openingstijden vestigingen",
          faq3text2:
            "Alle staatsinstellingen in Oezbekistan werken binnen 8 uur werkend regime. Staatsinstellingen (banken, ambassades en consulaten) - van 9.00 tot 18.00 uur of van 8.00 tot 17.00 uur, lunch van 13:00 tot 14:00 uur. Speciale diensten-Ambulance, apotheken, hulpdiensten, brandweer, politie, transport bedrijven: luchthaven, treinstations, werk de klok rond. Accommodatievoorzieningen voor toeristen (hotels, hotels, pensions, resorts, sommige toeristische recreatiegebieden) - bij het inchecken en check-out modus. Handelscentra (winkelcentra, hypermarkten, winkels) - van 08:00 tot 23:00 uur. Amusementsinrichtingen (pretparken, bioscopen, theaters, concertzalen) - vanaf 10:00 uur tot 23:00 Horecapunten (restaurants, cafés, bars, theehuizen) van 10:00 tot 23:00 Nachtgelegenheden (restaurants, bars, nachtclubs) van 21.00 tot 05.00 uur en in de regel tot de laatste klant.",
          faq4text1: "Vervoer",
          faq4text2:
            "U kunt naar Oezbekistan reizen per vliegtuig, trein, internationale bussen en fans van extreme reizen - per auto, motor en zelfs liftend. Het belangrijkste is dat je handig bent. Er is rechts verkeer in Oezbekistan.",
          faq4text3:
            "Dit is verreweg de snelste manier om naar Oezbekistan te reizen. De de belangrijkste luchthaven van het land bevindt zich in Tasjkent. Het moderne passagiersvloot op I.Karimov International Airport Tasjkent wordt vertegenwoordigd door moderne vliegtuigen Boeing-767-300, Boeing-757-200, Airbus-320-200, Boeing 787-8 Dreamliner en British-Aerospace Avro RJ85.. Moderne en comfortabele economie en business class lounges, multimediadiensten, heerlijk eten, vriendelijke stewardessen - al deze voorzieningen kunnen zijn opgericht op Oezbekistan airlines. De moderne internationale luchthaventerminals staan voor u open in elke regio van Oezbekistan.",
          faq4text4: "Vliegtuigen",
          faq4text5: "De belangrijkste luchtvaartmaatschappij van het land:",
          faq4text6: "Oezbekistan Luchtwegen",
          faq4text7:
            "JSC vervoert een groot aantal mensen over de hele wereld, zijn passagiers «Veiligheid, stabiliteit, comfort» bieden. Het bedrijf voert de reguliere vluchten uit vanaf meer dan 40 steden rond de wereld . Daarnaast is het bedrijf actief regelmatige vluchten naar de GOS-landen en binnen het land. Vertegenwoordigingskantoren van de luchtvaartmaatschappij zijn actief in 25 landen rond de wereld.",
          faq4text8: "Koop een kaartje",
          faq4text9: "Vluchtschema",
          faq4text10: "Buitenlandse luchtvaartmaatschappijen in Oezbekistan",
          faq4text11:
            "Oezbekistan voert de nieuwe hervormingen door. Binnenkort zal ons land het grootste transportknooppunt ter wereld worden, zal de lucht zijn geopend voor de buitenlandse luchtvaartmaatschappijen, en het nieuwe handvest vluchten zullen worden gelanceerd naar Oezbekistan. Elke dag Oezbekistan ontvangt vluchten van internationale luchtvaartmaatschappijen zoals Turkish Airlines, Aeroflot, UTair, Asiana Airlines, Koreaans Lucht, vlieg Dubai, S7. Onder andere buitenlandse luchtvaartmaatschappijen Atlas global (Turkije), Zhejang Loong Airlines (China) al lanceerde de nieuwe chartervluchten naar ons land.",
          faq4text12: "Treinen",
          faq4text13:
            "Tegenwoordig is dit type openbaar vervoer in Oezbekistan zo populair als de vliegreis. Als je wilt genieten van de schoonheid van de steden van Oezbekistan of rijden van Tasjkent naar Samarkand, en dan Bukhara of zelfs Khiva bereiken, het zal meer zijn handig om met de trein te reizen. Een van de meest populaire en hogesnelheidstrein is Afrosiyob, die dagelijks 2 keer per dag rijdt dag. Afrosiyob is gemak en comfort, kwaliteitsvoedsel en eersteklas bediening.",
          faq4text14: "Treinstations van Oezbekistan",
          faq4text15: "Boek of koop tickets",
          faq4text16: "Tasjkent metro",
          faq4text17:
            "Als u naar de hoofdstad van Oezbekistan reist, kunt u er een bezoeken van de belangrijkste bezienswaardigheden van de stad - Tasjkent ondergronds. Het heeft een klein netwerk, dus het is gemakkelijk om daarheen te navigeren. Desalniettemin is elk station voor bewoners slechts een plek wachten op treinen, maar voor toeristen is het een unieke kunst galerij. Metrodiensten zijn dagelijks beschikbaar van 06:00 tot 00:00.",
          faq4text18: "Ander vervoer:",
          faq4text19: "Intercity bussen",
          faq4text20:
            "In ons land rijden de intercity en de internationale bussen dagelijks en elk uur, het verbinden van alle steden van Oezbekistan en buurlanden. Als u bijvoorbeeld wilt vertrekken Tasjkent naar Samarkand of bijvoorbeeld naar Bukhara, en van daar rechtstreeks naar Khiva, is het beter om de hoge snelheid te nemen trein naar Bukhara, en vervolgens de intercitybus naar Khiva. Dit is de standaardroute voor de reiziger. Dit is zowel zuinig en informatief.",
          faq4text21: "Koop een kaartje voor streekbussen",
          faq4text22: "Stadsbussen",
          faq4text23:
            "Een van de handigste en voordeligste opties om te verhuizen rond de stad is een stadsvervoer. Tegenwoordig de stadsbussen zijn uitgerust met moderne mediatechnologieën, de lucht airconditioning, Wi-fi, en zelfs daar zijn de faciliteiten voor de gehandicapt. De kosten van een kaartje voor één reis bedragen 1400 sommen. U kunnen de kaartjes kopen bij de kaartjescontroleurs in de bus zelf.",
          faq4text24: "minibus taxi's",
          faq4text25:
            "De minibus taxi in Oezbekistan wordt voornamelijk gebruikt om je te verplaatsen de stad over lange afstanden, meestal om van één kant te komen van de stad naar een ander. Als de taxi duur is, mensen kies minibussen; het is snel, zuinig en handig. U kan de taxidiensten in de stad gebruiken om de luchthaven en het treinstation, of om bijvoorbeeld een dagtocht naar interessante plaatsen, om buiten de stad te gaan of om met vrienden naar de andere steden van ons uitgestrekte te reizen land.",
          faq4text26:
            "In Tasjkent en Samarkand kunt u een taxi bestellen via de mobiele apps Yandex Taxi en MyTaxi.",
          faq4text27: "Huur een auto",
          faq4text28:
            "Als je liever door de stad rijdt, dan is dat de beste optie voor jou is het huren van een auto. Er zitten veel bedrijven in Tasjkent die de auto's van verschillende klassen verhuren. Jij gewoon paspoort en rijbewijs nodig. En als je dat bent in Oezbekistan kun je sinds kort bij elke stad een stadsplattegrond vinden kraam.",
          faq5text1: "Alarmnummers",
          faq5text2: "Hulpverleningsdiensten:",
          faq5text3: "Brand noodgeval",
          faq5text4: "Politie",
          faq5text5: "Ambulance",
          faq5text6: "Noodgas service",
          faq5text7: "Referentie",
          faq6text1: "Diplomatieke missies",
          faq6text2:
            "Oezbekistan onderhoudt diplomatieke betrekkingen met bijna alle landen over de hele wereld en dit weerspiegelt de rol en plaats van de land onder de wereldgemeenschap.",
          faq6text3:
            "Tegenwoordig heeft Oezbekistan zijn diplomatieke missies in meer dan 50 landen en hebben meer dan 60 landen hun vertegenwoordigingen hier in ons land.",
          faq6text4: "Meer te weten komen",
          faq7text1: "Veelgebruikte zinnen",
          faq7text2:
            "De Oezbeekse taal is best ingewikkeld, maar als je er een paar kent zinnen die in dit zonnige land het meest worden gebruikt, zul je niet verdwaald geraken. Bovendien zijn Oezbeekse mensen erg vriendelijk en responsief en klaar om u op elk moment te helpen. Het is geen geheim dat Oezbeekse gastvrijheid over de hele wereld bekend is.",
          faq7text3: "Meest populaire zoekwoorden",
          faq7text4: "Voor de reis",
          faq8text1:
            "Wilt u een visum voor Oezbekistan krijgen? Het is nu veel gemakkelijker. U hebt alleen een internetverbinding en een paspoort nodig. U kunt een elektronisch toeristenvisum voor Oezbekistan aanvragen via de website. En als uw land in de lijst staat tussen 86 visumvrije landen, koop dan gewoon kaartjes, pak je koffers en welkom in Oezbekistan!",
          faq9text1: "Reizen met kinderen",
          faq9text2:
            "De meest inspirerende, maar tegelijkertijd vervelende manier van reizen is een familievakantie met kinderen. We geven enkele handige lifehacks voor degenen die willen ontspannen ten behoeve van zichzelf en kinderen, zonder moe te worden van de constante drukte, om de meest positieve emoties en indrukken voor het geheel te krijgen jaar.",
          faq9text3: "Het land binnenkomen",
          faq10text1: "Douaneregels",
          faq10text2: "Oezbekistan heeft een single goedgekeurd",
          faq10text2_1: "formulier",
          faq10text2_2:
            "van douaneaangifte (T-6). Het voorbeeld van de aangifte is verkrijgbaar bij alle douanepunten en de luchthavens van de Republiek.",
          faq10text3:
            "Welke goederen kunnen worden geïmporteerd in Oezbekistan",
          faq10text4:
            "Als u Oezbekistan binnenkomt via de internationale luchthavens, kunt u tot 2000 US dollar goederen zonder invoerrechten invoeren, via de spoor- en riviercontroleposten - tot 1000 US dollar, via wegcontroleposten (voetgangers) - tot 300 US dollar. In in dit geval hoeft u deze niet op te geven in de douaneaangifte en kunt u door de 'Groene' gang.",
          faq10text5:
            "Er zijn echter enkele beperkingen op de invoer van bepaalde goederen zonder invoerrechten. U kunt met name alcohol invoeren, inclusief bier, tot 2 liter, tabaksproducten van verschillende soorten - tot 10 dozen, eau de cologne en vloeistoffen die alcohol bevatten in hun samenstelling – tot 3 stuks, edelmetaal en sieraden, gemaakt van edelstenen – tot 65 gram.",
          faq10text6:
            "Welke goederen kunnen worden geëxporteerd vanuit Oezbekistan",
          faq10text7:
            "Als u vertrekt vanuit de Republiek Oezbekistan, kunt u exporteren goederen ter waarde van maximaal 3.000 Amerikaanse dollars vrij. Je hoeft niet specificeer ze in de douaneaangifte.",
          faq10text8: "Hoeveel geld kan ik importeren",
          faq10text9:
            "Wanneer u in Oezbekistan aankomt, kunt u vreemde valuta invoeren contant zonder enige limiet, maar het moet worden gespecificeerd in T-6 Declaratie formulier. Op verzoek van de bezoeker contant geld in het buitenland valuta kan worden geaccepteerd voor opslag door TC-21-ontvangstbewijs zonder enige fiscale lasten.",
          faq10text10: "Hoeveel geld kan ik exporteren",
          faq10text11:
            "De burgers van Oezbekistan mogen niet meer dan 5000 Amerikaanse dollars exporteren zonder een speciale vergunning te krijgen. Het bedrag meer dan 5.000 US dollars kunnen alleen met toestemming van de Centrale worden geëxporteerd Bank van de Republiek Oezbekistan.",
          faq10text12:
            "De buitenlandse burgers kunnen geld exporteren binnen het eerder vastgestelde bedrag geïmporteerd en aangegeven in de douaneaangifte, bij binnenkomst Oezbekistan. Als u geld gaat exporteren boven het weergegeven bedrag in uw T-6-aangifteformulier of TC-28-certificaat moet u hebben de bankvergunning. Zorg ervoor dat u dit doet wanneer u reischeques exporteert vermeld hun nummers in de douaneaangifte T-6.",
          faq10text13:
            "Het is verboden om op het grondgebied van Oezbekistan te importeren:",
          faq10text14:
            "- pers, manuscripten, clichés, tekeningen, fotobanden, negatieven, film-, video- en audioproducten, opnames, geluidsmateriaal gericht op het ondermijnen van de staat en de sociale orde, het schenden territoriale integriteit, politieke onafhankelijkheid en staat soevereiniteit, propageren van oorlog, terrorisme, geweld, nationaal exclusiviteit en religieuze haat, racisme en zijn verscheidenheid (antisemitisme, fascisme), evenals pornografische inhoud;",
          faq10text15:
            "- verdovende middelen, psychotrope stoffen en precursoren zonder toestemming van het Ministerie van Volksgezondheid van de Republiek Oezbekistan;",
          faq10text16:
            "- sieraden, gemaakt van edele metalen en edelstenen voor commercieel gebruik doeleinden zonder vergunning van het Ministerie van Buitenlandse Zaken Handel van de Republiek Oezbekistan (de limiet van sieraden van edele metalen en stenen geïmporteerd door fysieke entiteit en niet onderworpen aan douanerechten, is 5 stuks met een totaal gewicht van niet meer dan 30 gram);",
          faq10text17_1: "medicijnen",
          faq10text17:
            "-en medische apparatuur zonder toestemming van het Ministerie van Volksgezondheid van de Republiek Oezbekistan (Download de lijst);",
          faq10text18:
            "- radio-elektronische apparatuur van hoogfrequente apparaten zonder de toestemming van het Ministerie voor Ontwikkeling van Informatie Technologieën en communicatie van de Republiek Oezbekistan;",
          faq10text19:
            "- producten van plantaardige en dierlijke oorsprong zonder toestemming van de sanitaire en epidemiologische dienst;",
          faq10text20: "Het is verboden om buiten Oezbekistan te exporteren:",
          faq10text21:
            "- tarwe, rogge, gerst, haver, rijst, maïs, boekweit; bakkerijproducten (met uitzondering van meel, zoetwaren, cakes, koekjes van hun eigen productie); meel, granen, vee, gevogelte, vlees en eetbare slachtafvallen, suiker, plantaardige oliën ( de maximale exporttarieven voor individuen van deze goederen worden bepaald door de wetgeving van de Republiek Oezbekistan)",
          faq10text22:
            "- ethylalcohol, lederen grondstoffen (inclusief niet-standaard), bont en bontgrondstoffen, waaronder Karakul (inclusief niet standaard); schroot en afval van non-ferrometalen; zijderups cocons geschikt om af te wikkelen, ruwe zijde (afgerold), zijdeafval (inclusief cocons die niet geschikt zijn om af te wikkelen, afval van cocondraad en losgemaakt afval); zeldzame en bedreigde diersoorten en planten van de Republiek Oezbekistan vermeld in het Rode boek.",
          faq11text1: "Grens- en paspoortcontrole",
          faq11text2:
            "Bij het passeren van de douanepunten van de staatsgrens van de Republiek Oezbekistan, luchthavens, zorg ervoor dat alle benodigde documenten zijn aanwezig en veilig: ticket, paspoort met visum, T-6 Verklaring, vergunningen voor het vervoer van dieren, planten, medicijnen en geld. Bij vertrek, elk passagier moet paspoort- en douanecontrolepunten passeren na het overhandigen van hun hoofdbagage op de luchthaven.",
          faq12text1: "Regels voor het vervoeren van dieren",
          faq12text2:
            "Dus je hebt de reis naar Oezbekistan gepland, maar je wilt neem uw huisdier of favoriete bloemen mee. In dit geval jij de speciale documenten moeten voorbereiden en leren kennen de regels van de veterinaire en fytosanitaire controle. Wanneer voor het vervoeren van huisdieren en siervogels moet u een huisdier hebben paspoort en een veterinair certificaat dat de gezondheid bevestigt. U kunt dit document opvragen bij elke veterinaire dienst bij u woonplaats.",
          faq12text3:
            "Bij het vervoeren en exporteren van dieren en planten vermeld in de Redbook, je hebt toestemming nodig van het Staatscomité voor de bescherming van de natuur van de Republiek Oezbekistan.",
          faq12text4:
            "Maak daarom op tijd alle documenten voor uw dieren op alle noodzakelijke veterinaire procedures en reizen met plezier.",
          faq12text5: "In het land blijven",
          faq13text1: "Registratie",
          faq13text2:
            "U bent al in Oezbekistan aangekomen en, als u dat van plan bent verblijf hier langer dan 1 dag, dan moet je een tijdelijk verblijf maken inschrijven binnen 3 dagen.",
          faq13text3:
            "Als u op eigen gelegenheid in Oezbekistan aankomt, zonder uitnodiging van een natuurlijke of rechtspersoon, de administratie van uw accommodatievoorziening (hotel, hostel of pension) moet u de tijdelijke registratie verstrekken.",
          faq13text4:
            "Als je de uitnodiging hebt ontvangen, dan de uitnodigende persoon u inschrijft op hun woon- of verblijfplaats plaats.",
          faq13text5:
            "We leven echter in de eenentwintigste eeuw en de afstandsbediening registratie van buitenlandse burgers is hier al een tijdje actief lange tijd.",
          faq13text6:
            "Een enkele vorm van registratie van buitenlandse burgers via de Het E-mehmon -systeem is in 2018 in Oezbekistan gelanceerd.",
          faq13text7: "Registratie van onafhankelijke toeristen in hotels",
          faq13text8_1:
            "Als je je al hebt ingeschreven bij de accommodatie en de toeristenbelasting al hebt betaald, maar daar niet woont,",
          faq13text8: "E-mehmon ",
          faq13text8_2:
            "systeem heeft een speciaal gedeelte voor de onafhankelijke toeristen. U hoeft alleen maar alle velden in te vullen en het aantal dagen van uw verblijf op te geven, het systeem berekent het betalingsbedrag, dat bij aankomst contant of met een kaart kan worden betaald. Houd er rekening mee dat de administratie van elke accommodatie op het grondgebied van Oezbekistan op verzoek onafhankelijke buitenlandse staatsburgers moet registreren.",
          faq13text9: "Moderne accommodatiefaciliteiten",
          faq14text1:
            "Dus je hebt je geregistreerd en nu heb je de keuze waar je wilt verblijven. Er is een enorm aantal verschillende accommodaties in Oezbekistan: van de modieuze hotelketens tot het moderne hotels tot de pensions in nationale stijl en Yurt-kampen. Alles wat u nodig heeft voor uw verblijf in de hotels in Oezbekistan is een paspoort, een boekingsbon (indien aanwezig) en tijdige betaling bij de huidige wisselkoers. Alle accommodaties hebben een check-in en check-out systeem.",
          faq14text2: "Soort accommodatie:",
          faq14text3: "Hotels",
          faq14text4: "Herbergen",
          faq14text5: "Gast kampen",
          faq14text6: "camping",
          faq14text7: "joerten kampen",
          faq15text1: "Voedsel en keuken",
          faq15text2:
            "In tegenstelling tot het Romeinse gezegde 'In vino veritas', zeggen wij: de waarheid zit nog in het eten.'",
          faq15text3: "In Oezbekistan houden mensen van lekker eten.",
          faq15text4: "Het lekkerste brood is in Oezbekistan.",
          faq15text5:
            "Veel Oezbeekse gerechten worden bereid op een open vuur (haard).",
          faq15text6:
            "In Oezbekistan raakt men eraan gewend vet en calorierijk te eten eten.",
          faq15text7: "Na de maaltijd drinken Oezbeken hete thee.",
          faq15text8:
            "Oezbeken eten lamsvlees, rundvlees en paardenvlees (paardenworst - kazy).",
          faq15text9:
            "In Oezbekistan worden gasten begroet met de geurige thee en het warme flatbread en tot ziens met heerlijke pilaf.",
          faq15text10:
            "Speciale theeceremonie (voordat de thee aan de gast wordt doorgegeven, een kom thee wordt drie keer in de theepot gegoten en thee wordt geserveerd aan de gast op de vierde).",
          faq15text11:
            "In Oezbekistan verlaat elke gast altijd goed gevoed en gelukkig en met geschenken.",
          faq15text12: "Welkom in het smakelijke Oezbekistan!",
          faq16text1: "Winkelen en souvenirs",
          faq16text2:
            "Om kennis te maken met de cultuur en het leven van Oezbeekse mensen, dat wel beter om naar de plaatselijke bazaar te gaan. De Bazaar is een bijzondere apart wereld, waar mensen van alle kleuren samenkomen. Hier kunt u genieten niet alleen een overvloed aan verschillende goederen: souvenirs, fruit, groenten, kruiden, brood, eten, maar ook communicatie met mensen en een speciale, soulvolle sfeer die je niet zult vinden elk winkelcentrum of lokale hypermarkt. Als je wilt kopen souvenirs en geschenken, bezoek dan zeker de Chorsu Bazaar in Tasjkent, Siab Bazaar in Samarkand of Toki-Zargaron in Bukhara. Je kan ook bezoek de werkplaatsen van Rishtan-ambachtslieden of de Margilan-fabriek van zijdeproductie 'Yodgorlik' – de echte schatten van Oezbekistan.",
          faq17text1: "Veiligheid",
          faq17text2:
            "Volgens het Amerikaanse Gallup Institute was Oezbekistan dat in 2018 opgenomen in de top vijf van veiligste landen ter wereld. als jij volg de basisvoorzorgsmaatregelen, reizen naar Oezbekistan zal veilig zijn en comfortabel. Als je nog steeds hulp nodig hebt tijdens je reis, die is er politiebureaus op een openbare plaats, waar u als eerste ontvangt hulp of u kunt contact opnemen met de politie door 102 te bellen ook de toeristenpolitie in Oezbekistan, die verantwoordelijk is voor uw veiligheid in ons land.",
          faq18text1: "Hygiëne",
          faq18text2:
            "Van kinds af aan hebben we geleerd om onze handen te wassen voor het eten – de belangrijkste regel van persoonlijke hygiëne. Tijdens uw verblijf in Oezbekistan, u moet de eenvoudigste hygiëneregels volgen: wassen uw handen voor het eten, gebruik natte doekjes of handdesinfecterende middelen, gebruik bij warm weer vaker douchen, geen rauw water drinken, vooral uit open reservoirs, consumeer geen ongetest voedsel en drankjes, vooral op exotische plaatsen.",
          faq18text3:
            "Vergeet niet dat mensen in Oezbekistan sindsdien vet en calorierijk voedsel eten kindertijd, en als je niet gewend bent geraakt om dergelijk voedsel te eten, kan dat zo zijn zwaar voor je maag. Eet matig en meng niet ongeschikt voedingsmiddelen.",
          faq18text4:
            "Aangezien de zomer in Oezbekistan erg heet is, tijdens de zomer Chillya, volg de gepaste voorzorgsmaatregelen: loop niet rond in de stad hete middag, draag hoeden en lichte en comfortabele kleding en schoenen, drink zoveel mogelijk water om uitdroging te voorkomen.",
          faq19text1: "Douane en Regels",
          faq19text2:
            "Oezbekistan is een seculier land, maar de islam is de belangrijkste religie in het land. Als je een plaatselijke moskee bezoekt, moet je je aan enkele regels houden. Terughoudendheid en respect zijn vereist bij het bezoeken van de moskee. Het is beter om deze te bezoeken wanneer er geen aanbidding. De kleding is ook erg belangrijk: korte broeken, t-shirts en rokjes zijn hier absoluut niet welkom, en vrouwen moeten hun hoofd bedekken voordat ze de moskee betreden.",
          faq19text3:
            "Veel moskeeën verbieden het schieten niet, maar dit is tijdens het taboe het gebed. Meestal betalen de parochianen tijdens het gebed niet aandacht aan de bezoekers om deze niet te onderbreken.",
          faq19text4:
            "Als je hebt besloten om eerst mensen op straat te fotograferen alles wat u om ethische redenen moet vragen, is hun toestemming. Jij zal nooit worden geweigerd, maar het is comfortabeler en rustiger als ze glimlach in het kader.",
          faq19text5:
            "In Oezbekistan is het verboden om in het openbaar alcohol te drinken plaatsen en tijdens het autorijden. U krijgt een boete van 1/3 van de boete minimumloon voor het roken in de kantoren, gezondheidszorg faciliteiten, onderwijs- en sportfaciliteiten, brandgevoelige gebieden, inclusief benzinestations, straten, stadions, pleinen, parken, alles soorten openbaar vervoer en andere openbare plaatsen. Roken wel alleen toegestaan ​​in speciaal daarvoor bestemde gebieden.",
          aboutus2:
            "„Reisen ist die erste Anschaffung, die Sie luxuriös macht.“ Wir von „Antique Travel“ schwören darauf und bieten Ihnen einen befriedigenden Reisetraum, der Sie für immer bereichern wird. Wir sorgen seit geraumer Zeit für großartige Begegnungen durch hochmoderne geplante Opportunity-Pakete und andere grundlegende Reiseverwaltung. Durch speziell kuratierte Gelegenheitspakete müssen wir Sie auf ein Abenteuer mitnehmen, um die erstaunliche Pracht Zentralasiens und seines abgelegenen Terrains persönlich zu genießen. ",
          aboutus3:
            "Der jüngste starke Trend unter globalen Reisenden, immer mehr zu reisen, inspiriert uns weiterhin dazu, unsere Urlaubsnotwendigkeiten zu erfüllen.Wir werden regelmäßig zu einem der führenden Besuchsmanager in der expandierenden Reisebranche. Unser gesamtes Urlaubsmanagement steht Ihnen jederzeit zur Verfügung, um befriedigende Gelegenheiten und gesunde Begegnungen zu gewährleisten. Wir garantieren, dass Sie Devisenkarten, Geldscheine), Visa und Reiseschutz haben. Egal, ob Sie Flüge oder Unterkünfte buchen, um sich fortzubewegen, Antique Travel bietet alles unter einem Dach. Ebenso gibt es Reisemöglichkeiten für Personen, die Trost und angemessene Extravaganz suchen. Wir bieten die höchsten Limits für die am besten bewerteten Besuchspakete für Kunden, die sich wiederholt für ein praktikables Management entscheiden. Denken Sie daran, dass wir nicht erwarten, dass Sie ein Besuchs- oder Reiseexperte sind, bitte geben Sie es mir. Wir sind bestrebt, bis zum Ende Ihr Urlaubskomplize zu sein. ",
          tashkentstory:
            "Het ligt in het noordoosten van Oezbekistan, vlakbij de grens met Kazachstan. Tasjkent komt van het Turkse tash en kent, letterlijk vertaald als 'Stone City' of 'City of Stones'.",
          samarqandstory:
            "Samarqand, is een stad in het zuidoosten van Oezbekistan en een van de oudste continu bewoonde steden in Centraal-Azië.",
          bukharastory:
            " Bukhara, gelegen aan de Zijderoute, is meer dan 2000 jaar oud. Het is het meest complete voorbeeld van een middeleeuwse stad in Centraal-Azië, met een stedelijk weefsel dat grotendeels intact is gebleven.",
          khivastory:
            "Khiva is een prachtige oasestad met oude muren, minaretten en unieke lemen gebouwen. Khiva werd in 2024 uitgeroepen tot toeristische hoofdstad van de islamitische wereld! Khiva is meer dan 2500 jaar oud.",
          ferganastory:
            "Fergana verschijnt voor het eerst in schriftelijke verslagen in de 5e eeuw. Archeologisch bewijs toont echter aan dat de stad dat wel had bevolkt sinds de Chalcolithische periode.",
          shakhrisabzstory:
            "Shakhrisabz is een van de oudste en meest pittoreske steden van Oezbekistan. Het historische centrum is opgenomen in de UNESCO Wereld Erfgoed lijst. Hierin is de grote commandant Amir Temur geboren stad.",
          goroda: "Steden",
          nature: "Natuur",
          culture: "Cultuur",
          arch: "Architectuur",
          people: "Mensen",
          food: "Eten",
          metro: "Metro",
          art: "Kunst",
          sport: "Extreem en sportief",
          mistery: "Mysteries van de archeologie",
          historic: "Objecten van ziyorat-toerisme",
          subsections: "Onderafdelingen",
          general1: "Algemene informatie",
          general2: "Geografische locatie en ruimte:",
          general3: "De planeet aarde, Euraziatische continent, Centraal-Azië",
          general4: "Аrеа",
          general5: "447,4 duizend vierkante kilometer.",
          general6: "Bevolking: ",
          general7: "Landen: ",
          general8:
            "er wonen meer dan 134 landen in het land, maar de meerderheid van de bevolking is Oezbeeks (83,8%)",
          general9: "Regio's: ",
          general10: "12 regio's + Republiek Karakalpakstan",
          general11: "Beroemde steden: ",
          general12: "Taal: ",
          general13:
            "de officiële taal is Oezbeeks, en Russisch en Engels zijn de talen van internationale communicatie.",
          general14: "Religie: ",
          general15:
            "Oezbekistan is een seculier land, het grootste deel van de bevolking belijdt de islam. Het land is ook de thuisbasis van vertegenwoordigers van het christendom, het boeddhisme en andere religies.",
          general16: "Internationale telefooncode: ",
          general17: "Munteenheid: ",
          general18: "Klimaat: ",
          general19: "milde winters, hete zomers",
        },
      },
      ru: {
        translation: {
          Home: "Главная",
          AboutUs: "O нас",
          Tours: "Туры",
          Hotels: "Отели",
          Transportation: "Транспорт",
          Destination: "Место Hазначения",
          Services: "Услуги",
          Staff: "Персонал",
          PhotoGallery: "Фотогалерея",
          UsefulLinks: "Полезные ссылки",
          infoUsefulLinks: "Почувствуйте безопасность и гостеприимство",
          Weather: "Погода",
          HotelBooking: "Бронирование отеля",
          BankRate: "Банковский курс",
          TrainBooking: "Бронирование поездов",
          FlightBooking: "Бронирование авиабилетов",
          OnlinePayment: "Онлайн платеж",
          PortalofUzbekistan: "Портал Узбекистана",
          MinistryofForeignAffairs: "Министерство иностранных дел",
          AssociationofPrivateTourismAgencies:
            "Ассоциация частных туристических агентств",
          usefulInformation: "Полезная информация",
          faq1title: "«Узбекистан. Безопасное путешествие ГАРАНТИРОВАНО»",
          faq1text1:
            " «Новые времена требуют новых решений в области безопасности. Угроза распространения коронавируса продолжает оставаться актуальной и негативно влиять на физическое и эмоциональное здоровье. Сейчас перед любой поездкой путешественник невольно задумывается о мерах предосторожности и санитарных нормах. Как избежать негативного воздействия пандемии и при этом сохранить желание путешествовать?Выход есть!А именно довериться профессионалам и специальным службам, отвечающим за безопасность каждого туриста.Для этих целей мы разработали систему безопасного туризма Узбекистан.Безопасное путешествие ГАРАНТИРОВАНО, который соответствует всем санитарным нормам, соответствующим международным стандартам.»",
          faq1text2:
            "По сути, такая система подразумевает строгое соблюдение санитарных  норм. и гигиенические мероприятия по борьбе с COVID-19 в Узбекистане. Все туристические объекты, соответствующая инфраструктура и общественные места должны получить специальное разрешение или сертификат на продолжение деятельности. К таким объектам относятся: средства размещения (гостиницы, гостевые дома, общежития и др.), все пункты госграницы, авиа, ж/д и автомобильные станции, объекты материального культурного наследия, музеи, театры и другие объекты культуры",
          faq1text3:
            "Что входит в комплекс мер безопасного туризма система Узбекистан. Безопасное путешествие ГАРАНТИРОВАНО?",
          faq1text4:
            " ✔️По прибытии в страну вас встретит предварительно продезинфицированный и наполовину заполненный автомобиль. Маски снимать не разрешается.",
          faq1text5:
            "«✔️На входе в отель или любое другое место охрана измеряет температуру и выдает дезинфицирующее средство.»,",
          faq1text6: "✔️Все сотрудники должны быть в масках и перчатках.",
          faq1text7:
            "✔️Предусмотрено минимизировать контакт персонала – гостя. Минимум контакты – минимум риска.",
          faq1text8: "✔️Общаться только на безопасном расстоянии.",

          faq1text9:
            "✔️В общественных местах столы и стулья размещаются у сейфа расстояние.",
          faq1text10:
            "✔️All common items are treated with antiseptics several times a day.",
          faq1text11:
            "✔️Антисептики есть в свободном доступе во всех общественных местах.",
          faq1text12: "Подробнее",
          faq2text1: "Каникулы",
          faq3text1: "Режим работы заведений",
          faq3text2:
            "Все госучреждения в Узбекистане работают в 8-часовом режиме рабочий режим. Государственные учреждения (банки, посольства и консульства) - с 9:00 до 18:00 или с 8:00 до 17:00, обед с 13:00 до 14:00. Спецслужбы-Скорая помощь, аптеки, экстренные службы, пожарная помощь, полиция, транспорт предприятия: аэропорт, вокзалы, работают круглосуточно. Объекты размещения туристов (гостиницы, гостиницы, гостевые дома, курорты, некоторые туристические зоны отдыха) - при заселении и режим выезда. Торговые центры (торговые центры, гипермаркеты, магазины) - с 08:00 до 23:00. Развлекательные заведения (парки аттракционов, кинотеатры, театры, концертные залы) - с 10:00 до 23:00 Пункты общественного питания (рестораны, кафе, бары, чайханы) с 10:00 до 23:00 Ночные заведения (рестораны, бары, ночные клубы) с 21:00 до 05:00 и, как правило, до последнего покупатель.",
          faq4text1: "Транспорт",
          faq4text2:
            "Путешествовать по Узбекистану можно на самолете, поезде, международных автобусах, а любителям экстремальных путешествий – на машине, мотоцикле и даже автостопом. Главное, чтобы вам было удобно. В Узбекистане правостороннее движение.",
          faq4text3:
            "Это, безусловно, самый быстрый способ добраться до Узбекистана. Главный аэропорт страны находится в Ташкенте. Современный пассажирский флот в Международном аэропорту имени И.Каримова «Ташкент» представлена современными самолетами Боинг-767-300, Boeing-757-200, Airbus-320-200, Boeing 787-8 Dreamliner и British-Aerospace Avro RJ85.. Современный и комфортный эконом-класс и салоны бизнес-класса, мультимедийные услуги, вкусные питание, приветливые бортпроводники – все эти приятности можно основана на базе Узбекских авиалиний. Современный международный терминалы аэропорта открыты для вас в каждом регионе Узбекистан.",
          faq4text4: "Самолеты",
          faq4text5: "Главный авиаперевозчик страны:",
          faq4text6: "Узбекские авиалинии",
          faq4text7:
            "ЗАО перевозит огромное количество людей по всему миру, обеспечение своих пассажиров «Безопасностью, стабильностью, комфортом». Компания выполняет регулярные рейсы из более чем 40 города по всему миру. Кроме того, компания работает регулярные рейсы в страны СНГ и внутри страны. Представительства авиакомпании работают в 25 странах мира. по всему миру.",
          faq4text8: "Купить билет",
          faq4text9: "Расписание полетов",
          faq4text10: "Иностранные авиакомпании в Узбекистане",
          faq4text11:
            "Узбекистан проводит новые реформы. Скоро наша страна стать крупнейшим транспортным узлом в мире, небо будет открыт для иностранных авиаперевозчиков, а новый чартер рейсы будут запущены в Узбекистан. Каждый день Узбекистан принимает рейсы международных авиаперевозчиков, таких как Турецкие авиалинии, Аэрофлот, ЮТэйр, Asiana Airlines, Korean Авиа, Флай Дубай, S7. Среди прочих, иностранные авиакомпании Atlas global (Турция), Zhejang Loong Airlines (Китай) уже запустили новые чартерные рейсы в нашу страну.",
          faq4text12: "Поезда",
          faq4text13:
            "На сегодняшний день этот вид общественного транспорта в Узбекистане популярен как авиаперелет. Если вы хотите насладиться красотой города Узбекистана или на машине из Ташкента в Самарканд, а потом дойти до Бухары или даже до Хивы, это будет больше удобно путешествовать на поезде. Один из самых популярных и скоростной поезд «Афросиаб», который ходит ежедневно 2 раза в день. «Афросиаб» — это удобство и комфорт, качественная еда и первоклассный сервис.",
          faq4text14: "Железнодорожные вокзалы Узбекистана",
          faq4text15: "Забронировать или купить билеты",
          faq4text16: "Ташкентское метро",
          faq4text17:
            "Если вы путешествуете в столицу Узбекистана, вы можете посетить один главная достопримечательность города – Ташкентское метро. Это имеет небольшую сеть, поэтому ориентироваться там легко. Тем не менее, каждая станция для жителей – это просто место. ждать поезда, а для туристов это уникальное искусство галерея. Услуги метро доступны ежедневно с 06:00 до 00:00.",
          faq4text18: "Другой транспорт:",
          faq4text19: "Междугородние автобусы",
          faq4text20:
            "В нашей стране курсируют междугородние и международные автобусы ежедневно и ежечасно, соединяя все города Узбекистана и соседние страны. Если вы хотите, например, перейти от Ташкента в Самарканд или, например, в Бухару, а из там прямо до Хивы лучше ехать скоростной поездом до Бухары, а затем междугородним автобусом до Хивы. Это Стандартный маршрут для путешественника. Это и экономично и информативно.",
          faq4text21: "Купить билет на междугородние автобусы",
          faq4text22: "Городские автобусы",
          faq4text23:
            "Один из самых удобных и экономичных вариантов переезда по городу ходит городской транспорт. В настоящее время городские автобусы оборудованы современными медиатехнологиями, воздух кондиционер, Wi-Fi, и даже есть условия для отключен. Стоимость билета на одну поездку 1400 сум. Ты можно купить билеты у билетных контролеров в автобусе сам.",
          faq4text24: "Маршрутки такси",
          faq4text25:
            "Маршрутное такси в Узбекистане в основном используется для передвижения город на дальние расстояния, чаще всего добраться с одного конца города в другой. Если такси дорогое, ребята выбирать микроавтобусы; это быстро, экономично и удобно. Ты можно воспользоваться услугами такси по городу, чтобы добраться до аэропорт и вокзал, или, например, взять однодневная поездка по интересным местам, выезд за город или путешествовать с друзьями по другим городам нашей необъятной страна.",
          faq4text26:
            "В Ташкенте и Самарканде заказать такси можно через мобильные приложения Яндекс Такси и MyTaxi.",
          faq4text27: "Аренда автомобилей",
          faq4text28:
            " Если вы предпочитаете ездить по городу, то лучший вариант для вас арендовать автомобиль. Есть много компаний в Ташкент, которые сдают в аренду автомобили разного класса. Ты только нужен паспорт и водительское удостоверение. И, если вы в узбекистане в последнее время можно найти карту города в любом городе ларек.",
          faq5text1: "Номера экстренных служб",
          faq5text2: "Службы спасения:",
          faq5text3: "Пожарная ситуация",
          faq5text4: "Полиция",
          faq5text5: "Скорая помощь",
          faq5text6: "Аварийная газовая служба",
          faq5text7: "Ссылка",
          faq6text1: "дипломатические миссии",
          faq6text2:
            "Узбекистан имеет дипломатические отношения практически со всеми странами во всем мире, и это отражает роль и место страна среди мирового сообщества.",
          faq6text3:
            "«На сегодняшний день Узбекистан имеет свои дипломатические представительства более чем в 50 странах и более 60 стран имеют свои представительства здесь, в нашей стране.»,",
          faq6text4: "Узнать больше",
          faq7text1: "Часто используемые фразы",
          faq7text2:
            "Узбекский язык довольно сложный, но если вы знаете пару фраз, наиболее употребляемых в этой солнечной стране, вы не убирайся. Более того, узбеки действительно дружелюбны и отзывчивы и готовы помочь вам в любое время. это не секрет что узбекское гостеприимство известно во всем мире.",
          faq7text3: "Самые популярные ключевые слова",
          faq7text4: "Перед поездкой",
          faq8text1:
            "«Хотите получить визу в Узбекистан? Теперь это намного проще. Все, что вам нужно, это подключение к Интернету и паспорт. Вы можете подать заявку на электронную туристическую визу в Узбекистан через веб-сайт. И, если ваша страна указана среди 86 безвизовых стран, тогда просто покупайте билеты, собирайте чемоданы и добро пожаловать в Узбекистан!»,",
          faq9text1: "Путешествие с детьми",
          faq9text2:
            "Самый вдохновляющий, но в то же время утомительный вариант путешествия это семейный отдых с детьми. Даем несколько полезных лайфхаков для тех, кто хочет отдохнуть с пользой для себя и дети, не уставая от постоянной суеты, получить максимум положительных эмоций и впечатлений на весь год.",
          faq9text3: "Въезд в страну",
          faq10text1: "Таможенные правила",
          faq10text2: "Узбекистан утвердил единую",
          faq10text2_1: "форма",
          faq10text2_2:
            "таможенной декларации (Т-6). Образец декларации доступна на всех таможенных постах и ​​в аэропортах Республика.",
          faq10text3: "Какие товары можно ввозить в Узбекистан",
          faq10text4:
            "«При въезде в Узбекистан через международные аэропорты можно ввозить без пошлины товаров на сумму до 2000 долларов США, через железнодорожный и речной пункты пропуска – до 1000 долларов США, через автомобильные (пешеходные) пункты пропуска – до 300 долларов США. в этом случае их не нужно указывать в таможенной декларации и можно пройти по «Зеленому» коридору.»",
          faq10text5:
            "«Однако существуют некоторые ограничения на ввоз некоторых товаров без пошлин. В частности, можно ввозить алкоголь, в том числе пиво, до 2 литров, табачные изделия различных видов – до 10 ящиков, одеколон и жидкости, содержащие спирт в их составе. состав – до 3-х штук, драгоценный металл и украшения из драгоценных камней – до 65 грамм.»",
          faq10text6: "Какие товары можно вывозить из Узбекистана",
          faq10text7:
            "Если вы вылетаете из Республики Узбекистан, вы можете вывозить товары на сумму до 3000 долларов США свободно. Тебе не нужно указать их в таможенной декларации.",
          faq10text8: "Сколько денег я могу импортировать",
          faq10text9:
            "Когда вы приедете в Узбекистан, вы можете ввезти иностранную валюту в наличными без ограничений, но это необходимо указать в Т-6 Бланк декларации. По желанию посетителя наличная иностранная валюта может быть принята на хранение по квитанции ТС-21 без каких-либо налоговые сборы.",
          faq10text10: "Сколько денег я могу экспортировать",
          faq10text11:
            "Граждане Узбекистана могут вывозить не более 5000 долларов США. без получения специального разрешения. Сумма более 5000 долларов США долларов можно вывозить только с разрешения Центрального Банк Республики Узбекистан.",
          faq10text12:
            "Иностранные граждане могут вывозить средства в пределах суммы, ранее ввозится и декларируется в таможенной декларации при ввозе Узбекистан. Если вы собираетесь экспортировать средства сверх указанной суммы в форме декларации T-6 или сертификате TC-28 вы должны иметь разрешение банка. При вывозе дорожных чеков обязательно указать их номера в таможенной декларации Т-6.",
          faq10text13: "Запрещается ввозить на территорию Узбекистана:",
          faq10text14:
            "- пресса, рукописи, клише, рисунки, фотокассеты, негативы, кино, видео и аудио продукция, записи, звуковые материалы направленные на подрыв государственного и общественного порядка, нарушение территориальная целостность, политическая независимость и государство суверенитет, пропаганда войны, терроризм, насилие, национальное исключительность и религиозная ненависть, расизм и его разновидности (антисемитизм, фашизм), а также порнографического содержания;",
          faq10text15:
            "- наркотических средств, психотропных веществ и прекурсоров без разрешение Министерства здравоохранения Республики Узбекистан;",
          faq10text16:
            "- ювелирные изделия из драгоценных металлов и драгоценных камней для коммерческого использования целях без лицензии, выданной Министерством иностранных дел Торговля Республики Узбекистан (лимит ювелирных изделий от драгоценные металлы и камни, ввозимые физическим лицом и не облагается таможенными пошлинами, составляет 5 мест общей массой не более 30 грамм);",
          faq10text17_1: "- лекарственные ",
          faq10text17:
            "средства и медицинская техника без разрешения Министерства здравоохранения Республики Узбекистан (Скачать список);",
          faq10text18:
            "- радиоэлектронное оборудование из высокочастотных устройств без разрешение Министерства по развитию информации Технологии и коммуникации Республики Узбекистан;",
          faq10text19:
            "- продукты растительного и животного происхождения без разрешения санитарно-эпидемиологическая служба;",
          faq10text20: "Запрещается вывозить за пределы Узбекистана:",
          faq10text21:
            "- пшеница, рожь, ячмень, овес, рис, кукуруза, гречка; хлебобулочные изделия (кроме мучных кондитерских изделий, тортов, печенья собственного производства); мука, крупы, скот, птица, мясо и пищевые субпродукты, сахар, растительные масла ( предельные нормы вывоза физическими лицами этих товаров определяются законодательством Республики Узбекистан)",
          faq10text22:
            "- спирт этиловый, кожевенное сырье (в том числе нестандартное), меха и меховое сырье, в том числе каракуль (в т.ч. нестандартный); лом и отходы цветных металлов; тутовый шелкопряд коконы, пригодные для размотки, шелк-сырец (несмотанный), шелковые отходы (в том числе коконы, непригодные для разматывания, отходы коконных нитей и разрыхленные отходы); редкие и исчезающие виды животных и растения Республики Узбекистан, занесенные в Красную книгу.",
          faq11text1: "Пограничный и паспортный контроль",
          faq11text2:
            "При прохождении через таможенные пункты Государственной границы Республики Узбекистан, аэропорты, убедитесь, что все необходимые документы в наличии и сохранности: билет, паспорт с визой, декларацией Т-6, разрешениями на перевозку животные, растения, лекарства и деньги. При выезде каждый пассажир должен пройти паспортный и таможенный контроль после сдачи основного багажа в аэропорту.",
          faq12text1: "Правила перевозки животных",
          faq12text2:
            "Итак, вы запланировали поездку в Узбекистан, но хотите возьмите с собой домашнего питомца или любимые цветы. В этом случае вы подготовить специальные документы и ознакомиться с правила ветеринарного и фитосанитарного контроля. Когда перевозка домашних животных и декоративных птиц, необходимо иметь домашнее животное паспорт и ветеринарное свидетельство, подтверждающее его здоровье. Вы можете получить этот документ в любой ветеринарной службе по месту жительства. место жительства.",
          faq12text3:
            "При перевозке и вывозе животных и растений, перечисленных в Красная книга, нужно получить разрешение Госкомитета по охране природы Республики Узбекистан.",
          faq12text4:
            "Поэтому вовремя оформляйте все документы на своих животных, делайте все необходимые ветеринарные процедуры и проезд с удовольствие.",
          faq12text5: "Пребывание в стране",
          faq13text1: "Постановка на учет",
          faq13text2:
            "Вы уже прибыли в Узбекистан и, если планируете остаться здесь более чем на 1 день, вы должны сделать временную регистрация в течение 3 дней.",
          faq13text3:
            "Если вы прибываете в Узбекистан самостоятельно, без приглашения от физического или юридического лица, администрация вашего средства размещения (гостиница, общежитие или гостевой дом) должны выдать вам временную регистрацию.",
          faq13text4:
            "Если вам было отправлено приглашение, то приглашающее лицо регистрирует вас по месту жительства или по месту жительства место.",
          faq13text5:
            "Однако мы живем в XXI веке и далеком регистрация иностранных граждан действует здесь уже много времени.",
          faq13text6:
            "Единая форма регистрации иностранных граждан через В 2018 году в Узбекистане запущена система «Е-мехмон».",
          faq13text7: "Регистрация самостоятельных туристов в отелях",
          faq13text8_1:
            "Если вы уже зарегистрированы в объекте размещения и уже оплатили туристический сбор, но не проживаете там,",
          faq13text8: "«Э-мехмон» ",
          faq13text8_2:
            "в системе есть специальный раздел для самостоятельных туристов. Вам достаточно заполнить все поля, указав количество дней проживания, система рассчитает сумму платежа, которую можно оплатить наличными или картой по прибытии. Обратите внимание, что администрация любого средства размещения на территории Узбекистана обязана самостоятельно регистрировать иностранных граждан по их требованию.",
          faq13text9: "Современные средства размещения",
          faq14text1:
            "Итак, вы зарегистрировались и теперь у вас есть выбор, где остановиться. Существует огромное количество различных средств размещения в г. Узбекистан: от фешенебельных гостиничных сетей до современных гостиницы до гостевых домов в национальном стиле и юртовых лагерей. Все, что вам нужно для проживания в отелях Узбекистана, это паспорт, купон бронирования (при наличии) и своевременная оплата на текущий обменный курс. Все средства размещения имеют система регистрации заезда и отъезда.",
          faq14text2: "Типы размещения:",
          faq14text3: "Oтели",
          faq14text4: "Oбщежития",
          faq14text5: "Гостевые лагеря",
          faq14text6: "Поход",
          faq14text7: "Юртовые лагеря",
          faq15text1: "Еда и кухня",
          faq15text2:
            "«В отличие от римской поговорки «In vino veritas», мы говорим: «Истина все еще в еде».",
          faq15text3: "В Узбекистане любят вкусно поесть.",
          faq15text4: "Самый вкусный хлеб в Узбекистане.",
          faq15text5:
            "Многие узбекские блюда готовятся на открытом огне (очаре).",
          faq15text6: "В Узбекистане привыкают есть жирное и калорийное еда.",
          faq15text7: "После еды узбеки пьют горячий чай.",
          faq15text8:
            "Узбеки едят баранину, говядину и конину (конскую колбасу - казы).",
          faq15text9:
            "В Узбекистане гостей встречают ароматным чаем и горячие лепешки, а на прощание вкусный плов.",
          faq15text10:
            "Специальная чайная церемония (перед подачей чая гостю чаша чая трижды наливают в чайник и подают чай гостю на четвертом).",
          faq15text11:
            "В Узбекистане каждый гость всегда уходит сытым и довольным. с подарками.",
          faq15text12: "Итак, добро пожаловать во вкусный Узбекистан!",
          faq16text1: "Шопинг и сувениры",
          faq16text2:
            "Чтобы познакомиться с культурой и бытом узбекского народа, лучше сходить на местный базар. Базар – это особое отдельное мир, где собираются люди всех мастей. Здесь вы можете насладиться не только обилием различных товаров: сувениров, фруктов, овощи, специи, хлеб, еда, но и общение с людей и особую, душевную атмосферу, которую вы не найдете в любой торговый центр или местный гипермаркет. Если вы хотите купить сувениры и подарки, обязательно посетите базар Чорсу в Ташкенте, Сиабский базар в Самарканде или Токи-Заргарон в Бухаре. Вы также можете посетить мастерские риштанских ремесленников или маргиланскую фабрику шелковая продукция «Ёдгорлик» – настоящие сокровища Узбекистана.",
          faq17text1: "Безопасность",
          faq17text2:
            "По данным Института Гэллапа США, в 2018 г. входит в пятерку самых безопасных стран мира. если ты соблюдайте основные меры предосторожности, поездка в Узбекистан будет безопасной и удобно. Если вам все еще нужна помощь в вашем путешествии, есть полицейские участки в любом общественном месте, где вы получите в первую очередь помощи, или вы можете обратиться в полицию, позвонив по номеру 102. Существует туристической полиции Узбекистана, которая отвечает за Ваша безопасность в нашей стране.",
          faq18text1: "Гигиена",
          faq18text2:
            "Нас с детства приучали мыть руки перед едой – главное правило личной гигиены. Во время вашего пребывания в Узбекистане следует соблюдать самые простые правила гигиены: умываться руки перед едой, используйте влажные салфетки или дезинфицирующие средства для рук, используйте чаще принимайте душ в жаркую погоду, не пейте сырую воду, особенно из открытых водоемов, не употреблять непроверенную пищу и напитки, особенно в экзотических местах.",
          faq18text3:
            "Помните, что жители Узбекистана едят жирную и калорийную пищу с детства, и если вы не привыкли есть такую пищу, это может быть тяжелый для желудка. Ешьте умеренно и не смешивайте неподходящие еда.",
          faq18text4:
            "Так как лето в Узбекистане очень жаркое, летом Чилья, соблюдайте соответствующие меры предосторожности: не гуляйте по городу в жаркий полдень, носите головные уборы, легкую и удобную одежду и обувь, потребляйте как можно больше воды, чтобы избежать обезвоживания.",
          faq19text1: "Обычаи и правила",
          faq19text2:
            "«Узбекистан – светская страна, но ислам является основной религией в стране. Если вы посещаете любую местную мечеть, то должны соблюдать некоторые правила. При посещении мечети требуется сдержанность и уважение. Без богослужений.Одежда тоже очень важна: короткие штаны, футболки и юбки здесь точно не приветствуются, а женщинам перед входом в мечеть следует покрыть голову.",
          faq19text3:
            "Многие мечети не запрещают стрелять, но во время это табу. священник. Обычно прихожане во время молитвы не платят внимание к посетителям, чтобы не прерывать его.",
          faq19text4:
            "Если вы решили фотографировать людей на улице, в первую очередь на все вы должны спрашивать их разрешения по этическим соображениям. Ты сможешь никогда не откажут, но комфортнее и спокойнее, когда они улыбка в кадре.",
          faq19text5:
            "В Узбекистане запрещено распивать алкоголь в общественных местах местах и ​​во время вождения автомобиля. Вас оштрафуют на 1/3 минимальная заработная плата за курение в офисах, здравоохранение объекты, образовательные и спортивные объекты, пожароопасные территории, включая заправочные станции, улицы, стадионы, площади, парки, все виды общественного транспорта и другие общественные места. Смокинг допускается только в специально отведенных местах.",
          aboutus2:
            "«Путешествие — это главная покупка, которая делает вас роскошным.» Мы в «Antique Travel» заявляем об этом и инвестируем в мечту об увлекательном путешествии, которое навсегда обогатит вас. Уже довольно давно мы организуем отличные встречи с помощью передовых запланированных пакетов возможностей и других базовых методов управления поездками. С помощью специально подобранных пакетов возможностей мы должны отправить вас в приключение, чтобы лично насладиться удивительным великолепием Центральной Азии и ее удаленной местности. ",
          aboutus3:
            "Недавняя сильная тенденция среди путешественников со всего мира путешествовать все больше и больше - это то, что продолжает вдохновлять нас на удовлетворение наших потребностей в отпуске Мы регулярно становимся одним из ведущих менеджеров посещений в расширяющейся индустрии туризма. Чтобы обеспечить удовлетворяющие возможности и здоровые встречи, все наши услуги по управлению отпуском доступны для вас, несмотря ни на что. Для вашего универсального случая мы гарантируем, что у вас есть внешние транзакции (форекс-карты, денежные знаки), визы и защита путешествий. От бронирования авиабилетов до отелей в соответствии с вашими путешествиями, Antique Travel предлагает все под одной крышей. Кроме того, есть возможности для путешествий для людей, ищущих утешения и разумной экстравагантности. Мы предлагаем самые высокие лимиты на пакеты посещений с самым высоким рейтингом для клиентов, которые неоднократно выбирают жизнеспособное управление. Помните, что мы не ожидаем, что вы будете экспертом по посещениям или путешествиям. Пожалуйста, дайте мне. Мы стремимся быть вашими соучастниками в вашем отпуске до самого конца. ",
          tashkentstory:
            "«Он находится на северо-востоке Узбекистана, недалеко от границы с Казахстаном. Ташкент происходит от тюркских слов таш и кент, что дословно переводится как «Каменный город» или «Город камней».",
          samarqandstory:
            "Самарканд — город на юго-востоке Узбекистана, один из Древнейшие постоянно населенные города Средней Азии.",
          bukharastory:
            "«Бухаре, расположенной на Шелковом пути, более 2000 лет. Это наиболее полный пример средневекового города в Центральной Азии, городская структура которого сохранилась практически нетронутой».",
          khivastory:
            "«Хива — красивый город-оазис с древними стенами, минаретами и уникальными глиняными постройками. В 2024 году Хива была объявлена туристической столицей исламского мира! Хиве более 2500 лет.»,",
          ferganastory:
            "Впервые Фергана упоминается в письменных источниках V века. Однако археологические данные свидетельствуют о том, что город был был заселен с эпохи энеолита.",
          shakhrisabzstory:
            "Шахрисабз – один из древнейших и живописнейших городов Узбекистан. Его исторический центр включен в список Всемирного наследия ЮНЕСКО. Список наследия. В этом городе родился великий полководец Амир Темур. город.",
          goroda: "Города",
          nature: "Природа",
          culture: "Культура",
          arch: "Архитектура",
          people: "Люди",
          food: "Еда",
          metro: "Метро",
          art: "Искусство",
          sport: "Экстрим и спорт",
          mistery: "Загадки археологии",
          historic: "Объекты зиёрат-туризма",
          subsections: "Подразделы",
          general1: "Основная информация",
          general2: "Географическое и космическое расположение:",
          general3: "Планета Земля, Евразийский континент, Центральная Азия",
          general4: "Площадь: ",
          general5: "447,4 тыс. кв. км.",
          general6: "Численность населения: ",
          general7: "Наций: ",
          general8:
            "в стране проживает более 134 национальностей, но большинство населения составляют узбеки (83,8%).",
          general9: "Регионы: ",
          general10: "12 областей + Республика Каракалпакстан",
          general11: "Известные города: ",
          general12: "Язык: ",
          general13:
            "официальный язык – узбекский, русский и английский – языки международного общения.",
          general14: "Религия: ",
          general15:
            "Узбекистан светская страна, большая часть населения исповедует ислам. Страна также является домом для представителей христианства, буддизма и других религий.",
          general16: "Международный телефонный код:",
          general17: "Денежная единица:",
          general18: "Климат:",
          general19: " мягкая зима, жаркое лето",
        },
      },
    },
  });
