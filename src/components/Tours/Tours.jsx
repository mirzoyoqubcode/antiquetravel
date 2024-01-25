import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Nav1 from "../Nav1/Nav1";
import style from "../Tours/Tours.module.scss";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
const Tours = () => {
  const { t } = useTranslation();
  return (
    <div>
      <Header />
      <Nav1 />
      <div className={style.body}>
        <h1>Tour packages</h1>
        <section className={style.wrapper}>
          <Accordion className={style.accordion}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Budget Travel (7 days 6 nights)</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className={style.faq1}>
                <h1>Budget Travel</h1>
                <h3>Tashkent-Bukhara-Shahrisabz-Samarkand-Tashkent</h3>
                <p>
                  <span>Specialization:</span>
                  Cultural program on the Great Silk Road.
                </p>
                <ul>
                  <li>
                    1. Accommodation (Leisure package-small hotel, VIP package
                    –luxurious hotel)
                    <ul>
                      <li>Tashkent-2 nights</li>
                      <li>Bukhara-2 nights </li>
                      <li>Samarkand-2 nights</li>
                    </ul>
                  </li>
                  <li>
                    2. Vehicles with A/C throughout the whole trip
                    <ul>
                      <li>Up to 2 person - 4*4 comfortable car.</li>
                      <li>Up to 8 person - Mini Van </li>
                      <li>Up to 16 person - Mini Bus.</li>
                      <li>More than 16 person – Bus.</li>
                    </ul>
                  </li>
                  <li>
                    3. Breakfast and 2 options of meals (e.g. lunch or dinner ){" "}
                  </li>
                  <li>
                    4. Admission fees to historical monuments (this fee doesn’t
                    include museum and cam/video fees)
                  </li>
                  <li>Tour Guide in following languages.</li>
                  <p className={style.list_type}>
                    • English, German, French, Italian, Spanish, Arabian,
                    Persian, Turkish and etc…
                  </p>
                  <li>Air tickets within Uzbekistan</li>
                </ul>
                <p>Duration: 7 days/ 6 nights.</p>
                <div className={style.info}>
                  <p>
                    Day 1: Tashkent Arrival into Tashkent Airport, where you
                    will be met by our tour guide who will arrange your
                    transportation to the hotel. Accommodation and dinner local
                    restaurant.{" "}
                  </p>
                  <img
                    src="https://c1.wallpaperflare.com/preview/814/967/649/railway-station-tashkent-uzbekistan-arrive.jpg"
                    alt=""
                  />
                </div>
                <div className={style.info}>
                  <p>
                    Day 2: Tashkent-Bukhara. After breakfast, flight to Bukhara
                    and accommodation at hotel. Visit to Chor Minor (the tower
                    of four ), the Kukeldash meddresseh, Lyabi Khauz. This will
                    be followed by visit to the statue of the wise fool Hoja
                    Nasreddin, Caravanserai of Nadir Divanbegi and lunch near
                    the old pool. After lunch visit to 1st Trade Dome (Toki
                    Sarrafon), walk through the garden to 2nd Trade Dome (Toki
                    Zargaron) centre for Jewelry in medieval ages, straight walk
                    through Bukharian shops to 3rd Trade Dome (Toki
                    Telpakfurushon), visit to medrressehs of two famous rulers
                    who have made a lot of contribution in architecture of
                    Bukhara Ulughbek and Abdulazizkhan, the Kalyan Minaret.{" "}
                  </p>
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/2012_Bukhara_7515821196.jpg/1200px-2012_Bukhara_7515821196.jpg"
                    alt=""
                  />
                </div>
                <div className={style.info}>
                  <p>
                    Day 3: Bukhara. Visit to the Ark Fortress, Balakhauz mosque,
                    Old Walls of Bukhara, Chashma-i-Ayub and Sitora-i-Mokhikhosa
                    – the summer residence of the last emir of Bukhara.
                  </p>
                  <img
                    src="https://media.istockphoto.com/id/1316900032/photo/bukhara-uzbekistan-kalyan-minaret-and-madressa-sunset-twilight.jpg?b=1&s=170667a&w=0&k=20&c=a0PuW76EKCWlf_OLWs_8kr5UTuZijADPbLr-G28_sZo="
                    alt=""
                  />
                </div>
                <div className={style.info}>
                  <p>
                    {" "}
                    Day 4: Bukhara-Shakhriabz-Samarkand After breakfast depart
                    to Shakhrisabz, birthplace of Amir Timur and tour around
                    Ark-Saray Palace, Kok-Gumbaz Mosque, House of Mediation and
                    Crypt of Temur. Continue with the drive to Samarkand.
                    Accommodation and dinner in the local restaurant.
                  </p>
                  <img
                    src="https://thumbs.dreamstime.com/b/dorut-tilovat-complex-kok-gumbaz-mosque-sheikh-shamsiddin-kulol-gumbazi-saidon-mausoleums-shahrisabz-uzbekistan-261401787.jpg"
                    alt=""
                  />
                </div>
                <div className={style.info}>
                  <p>
                    Day 5: Samarkand The famed city of Samarkand is the jewel or
                    the desert and the home of Amir Temur. More than any other
                    city in Uzbekistan, Samarkand is a symbol of a living
                    history, which seems to be almost untouched by the
                    centuries. After breakfast full day tour around famous
                    Registan square, Bibi Khanum Mosque, Mausoleum of Amir Temur
                    with onyx covered tomb of Amir Temur dating back to the
                    15-th century, Ulugbek`s observatory, Shahi Zinda necropolis
                  </p>
                  <img
                    src="https://media.istockphoto.com/id/1249451586/photo/panorama-samarkand-uzbekistan-registan-square-sher-dor-madrasah.jpg?b=1&s=170667a&w=0&k=20&c=2yRTxLjPcnALJdk4rgROuoeHqN4DfD-8yRYEMgQlM4c="
                    alt=""
                  />
                </div>
                <p>
                  Day 6: Samarkand –Tashkent Visit Siyab bazaar of Samarkand
                  (Oriental food market). Drive to Tashkent and continue with
                  sightseeing the downtown after a short rest.
                </p>
                <p>Day 7 Tashkent Departure. End of a trip</p>
                <Link to={"/book"}>
                  <button className={style.btn_tours}>{t("booknow")}</button>
                </Link>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className={style.accordion}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>
                “UZBEKISTAN SILK ROAD TOUR” (8 days 9 nights)
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className={style.faq2}>
                <h1>“UZBEKISTAN SILK ROAD TOUR”</h1>
                <p>
                  Our journey will give you an excellent chance to discover such
                  well-known ancient cites as Tashkent, Samarkand, Bukhara. You
                  will plunge into the interesting world of history. High
                  minarets, blue domes madrassahs, mosques and the mausoleums,
                  eastern markets, interesting legends, hospitality of the
                  population with their traditions and many other things remain
                  in your memory forever.
                </p>
                <h3>
                  ROUTE: TASHKENT- BUKHARA-VABKENT
                  VILLAGE-BUKHARA-SAMARKAND-GIJDUVAN-TASHKENT DURATION: 8 DAYS /
                  7 NIGHTS
                </h3>
                <h2>DAY 1.</h2>
                <h3>TASHKENT Arrival to Tashkent.</h3>
                <div className={style.info}>
                  <img
                    src="https://cdn.pixabay.com/photo/2016/08/31/17/01/tashkent-1634109__340.jpg"
                    alt=""
                  />
                  <p>
                    Meeting at the airport by English-speaking guide and
                    transfer to the hotel to have breakfast then we will begin
                    Sightseeing of the city Tashkent. Hazrati Imam Mausoleum and
                    Mosque it has been constructed in first half of 16 centuries
                    by Kakand’s khan (ruler) of a dynasty of Sheibanids. In the
                    madrassah which is formed of two mausoleums adjoining the
                    ensemble of Hazrati Imam, there is since 1943 an
                    Administration of Moslems (synnits) Uzbekistan ". The museum
                    of “Applied Art”. There are presented subjects of a national
                    applied art: decorative carpets, embroidery gold, and
                    products from fabric, ornaments for women, ceramics,
                    porcelain, musical instruments. Lunch in the Local
                    Restaurant. Check in the hotel at 14:00 p.m. Visit
                    Independence Square and Walk in the city “artist-street”
                    opera building. Free time at leisure on their own. Dinner in
                    the Local Restaurant and overnight in the hotel.
                  </p>
                </div>
                <h2>DAY 2.</h2>
                <h3>TASHKENT-BUKHARA</h3>
                <div className={style.info}>
                  <div>
                    <p>
                      Breakfast in the hotel at 05.00-06.00. Transfer to
                      Tashkent Airport at 07:00 a.m. and fly to Bukhara by
                      HY-037 at 09:15 a.m. Arrival to Bukhara at 10:25 a.m. and
                      transfer and accommodation at the hotel. Excursion of the
                      city. In Bukhara there are a lot of interesting places of
                      sightseeing. You will adore the ancient historical places.
                    </p>
                    <p>
                      Mausoleum of Ismail Samani (10 century) has been erected
                      during board Ismail Samani (892-907) and became family
                      tomb of Samanids. Despite of the modest sizes of the basis
                      (10×10) and height of 14 m this monument serves as the
                      proof of high art skill. Citadel Ark (1-20 centuries) as a
                      symbol of greatness and authority towers above the area.
                      Construction of a citadel is dated approximately the
                      beginning of 1 millennium BC. The citadel served as the
                      strengthened residence of the masters of Bukhara. There
                      were palaces, temples, a barracks, office, mint, water
                      basins and warehouses, masterful, shelters, weapon
                      workshops, and prison.
                    </p>
                  </div>
                  <img
                    src="https://media.istockphoto.com/id/1193462464/photo/bukhara-poi-kalon-complex-aerial-view-minaret-in-uzbekistan.jpg?b=1&s=170667a&w=0&k=20&c=3Wt_0PjJoRB96_krzSPgFUpIlsJVQ98PwnpPqQ9HEJg="
                    alt=""
                  />
                </div>
                <p>
                  During the history the fortress has been some times destroyed,
                  however is again restored. All buildings of the citadel had
                  been arisen mainly during the XVII-XXI centuries. Lunch in the
                  Local Restaurant. The symbol of Bukhara considers Minaret
                  Kalian costing in city centre with the height of 46, 6 m. -
                  achievement of architecture, which is before the Mongols
                  invasion specified to caravans a way to sacred city. First of
                  all the minaret should, however to be not "beacon", and more
                  likely especially noted place of “muezzin “ In Islam the
                  official, who calls prayers to Friday Praying (Namoz juma) the
                  public worship and to the daily prayer (five times a day)
                  whose voice sounded from far above.Just next to the Minaret
                  Kalian stands the great mosque – Mosque Kalian which is
                  connected with a minaret by the small bridge towers. It is the
                  oldest and second-largest mosque of the Central Asia after
                  mosque Bibi Hanum in Samarkand. Folklore in Madrassah of Nodir
                  Devanbegy & Dinner in National Guest House. Overnight in the
                  hotel.
                </p>
                <h2>DAY 3</h2>
                <h3>BUKHARA-VABKENT VILLAGE-BUKHARA </h3>
                <div className={style.info}>
                  <p>
                    Breakfast in the hotel. Transfer to Vabkent District the
                    village house, tourists can visit village on foot and to
                    talk with village people and can see village life, can see
                    how village people can make Uzbek breads (non) in tandoor
                    (clay oven), how to make Uzbek national dishes in big pot
                    (kazan) by Uzbek village women and to learn Uzbek
                    traditional meals too by explanation of our local guide.
                    Lunch in Vabkent village. Afternoon return to Bukhara visit
                    Summer Residence of Bukhara Emir and Free time at leisure in
                    ancient city on their own. Dinner in the Local Restaurant &
                    Overnight in the hotel.
                  </p>
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Vobkent_minaret_14-33.JPG"
                    alt=""
                  />
                </div>
                <h2>DAY 4</h2>
                <h3>BUKHARA-GIJDUVAN-SAMARKAND</h3>
                <div className={style.info}>
                  <img
                    src="https://media.cntraveler.com/photos/5a0b441eee38fc1bcffcda91/16:9/w_4448,h_2502,c_limit/mag-uzbekistan-01-cr-felix-odell.jpg"
                    alt=""
                  />
                  <p>
                    Breakfast in the hotel. Lunch at Local Pottery Master’s
                    House in Gijduvan. Drive to Samarkand from Bukhara (320 km,
                    5 hrs). On the road visit Raboti Malik and Sardoba in Navoi.
                    Arrival to Samarkand and accommodation in hotel. Dinner in
                    Local Restaurant and Overnight in the hotel.
                  </p>
                </div>
                <h2>DAY 5</h2>
                <h3>Breakfast in the hotel.</h3>
                <div className={style.info}>
                  <p>
                    Visit Gur-Emir mausoleum (15 century) - in translation means
                    the mausoleum "a tomb of the khan’s" - is a burial place of
                    Amir Temur and his dynasty. The mausoleum has been designed
                    under Timur's order for its favorite grandson Mohammed
                    Sultan who has suddenly died in 1403. Registan square with
                    three madrassahs (15-17 c.c.) - literally " the sandy square
                    " - the well-known symbol of Uzbekistan, a symbol of city, a
                    cultural heritage of UNESCO. In the medieval East the square
                    was a place where governors disclosed orders where passed
                    court where also there was a brick market. Lunch in the
                    Local Restaurant. Mosque Bibi Khanim (15 century) - was the
                    greatest architectural monument some kind of in the Islamic
                    world. Amir Timur ordered to construct this mosque after the
                    successful campaign to India to show the boundless technical
                    and financial opportunities. He wished to construct a
                    greater “Friday mosque” (mosque for praying on Fridays)
                    which should be the terrestrial sample of paradise. Amir
                    Timur itself observed the construction of a mosque. Eastern
                    Market Siyab Bazaar. Visit Russian Orthodox Church. Dinner
                    in Local Restaurant and Overnight in the hotel.
                  </p>
                  <img
                    src="https://media.istockphoto.com/id/1156403507/photo/registan-an-old-public-square-in-samarkand-uzbekistan.jpg?b=1&s=612x612&w=0&k=20&c=OM5wyLeCiB75JhSPRMXNSUhx83_BpTMvvwXSCOSnGFA="
                    alt=""
                  />
                </div>
                <h2>DAY 6</h2>
                <h3>SAMARKAND</h3>
                <div className={style.info}>
                  <img
                    src="https://i.ytimg.com/vi/693SnCTYCqI/maxresdefault.jpg"
                    alt=""
                  />
                  <p>
                    Breakfast in the hotel. Continuation of city tour in
                    Samarkand. Visit Observatory of Ulugbek (1428-1429) which is
                    in northwest of city, has been constructed by the governor
                    and scientists Ulugbek. By means of chronicles from 17
                    century the Russian archeologist Viyatkin managed to
                    discover an observatory. The main tool of an observatory was
                    sextant presumably laid out from a brick with the radius of
                    40,4 m in the end of a line of a meridian. Complex Shakhi
                    Zinda (14-15 c.) consists of the several mausoleums which
                    were consistently attached to each other within centuries.
                    The decor is diverse and fantastic, the leitmotiv which can
                    admire already on the main portal, is presented by colors
                    and stars - a so-called Samarkand ornament. Shahi Zinda in
                    translation literally is meant “a living shah (king)". As
                    the place of pilgrims, which visiting in the beginning 20th
                    century was forbidden to other believers, widely known far
                    outside Samarkand. Visit Silk Paper Factory “Meros”. Lunch
                    in the Local Restaurant. Afternoon Free Time at Leisure to
                    walk in ancient city on their own. Dinner in Local
                    Restaurant and Overnight in the hotel.
                  </p>
                </div>
                <h2>DAY 7</h2>
                <h3>SAMARKAND-TASHKENT</h3>
                <div className={style.info}>
                  <p>
                    Breakfast in the hotel. To have a free time at leisure in
                    old part of city before leave Samarkand. Lunch in the Local
                    Restaurant. At 14:00 p.m. transfer to Tashkent by bus.
                    Arrival to Tashkent and accommodation in the hotel. Farewell
                    Dinner in the hotel or in Local Restaurant and Overnight in
                    the hotel.
                  </p>
                  <img
                    src="https://media.istockphoto.com/id/1216649775/video/dji-inspire-4k-aerial-shoot-tashkent-tv-tower.jpg?s=640x640&k=20&c=7WE8VVDsAPG3TSD5fgLTPU0d5u5Vfppc82CCyBZ1EhA="
                    alt=""
                  />
                </div>
                <h3 className={style.green}>TOUR PROGRAM PRICE INCLUDES:</h3>
                <ul className={style.items}>
                  <li>Accommodation in 4/3 star * hotels double/twin rooms;</li>
                  <li>
                    Tours and transfers on the deluxe coach A/C
                    airport-hotel-airport;
                  </li>
                  <li>English Speaking Guide through the tour itinerary;</li>
                  <li>
                    Entrance fees to all visiting sightseeing places, excursions
                    and museums;
                  </li>
                  <li>
                    Folklore show in Madrassah of Nodir Devan Begi in Bukhara;
                  </li>
                  <li>Full Board Meals (Breakfast, Lunch and Dinner);</li>

                  <li>
                    Visit Bek’s House in Vabkent village near to Bukhara to see
                    and learn Uzbek local people traditions, ceremonies, habits
                    and cooking meals by Uzbek local village
                    women;Tashkent-Bukhara domestic economy flight tickets;
                  </li>
                  <li>Visit Silk Paper Factory “Meros” in Samarkand;</li>
                  <li>Visit Russian Orthodox Church in Samarkand;</li>
                  <li>Mineral water per person per a day.</li>
                </ul>
                <h3 className={style.red}>
                  TOUR PROGRAM PRICE DOES NOT INCLUDES:
                </h3>
                <ul className={style.items}>
                  <li>Strong drinks (vodka, beer, wine, etc);</li>
                  <li>Photo and Camera fees;</li>
                  <li>Taxes in the International Airport;</li>
                  <li>International Flight Tickets;</li>
                  <li>Tips for guide and driver;</li>
                  <li>Single Supplement room (---USD).</li>
                </ul>
                <Link to={"/book"}>
                  <button className={style.btn_tours}>{t("booknow")}</button>
                </Link>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className={style.accordion}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography> “WELCOME TOUR TO UZBEKISTAN”</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className={style.faq3}>
                <h1> “WELCOME TOUR TO UZBEKISTAN” </h1>
                <p>
                  Our journey will give you an excellent chance to discover such
                  well known ancient cites as Tashkent, Samarkand, Bukhara,
                  Kokand, Margilan, Rishtan, Fergana Valley. You will plunge
                  into the interesting world of history. High minarets, blue
                  domes madrassahs, mosques and the mausoleums, eastern markets,
                  interesting legends, hospitality of the population with their
                  traditions and many other things remain in your memory
                  forever.
                </p>
                <h3>
                  ROUTE:
                  TASHKENT-KOKAND-FERGANA-MARGILAN-RISHTAN-TASHKENT-BUKHARA-SAMARKAND-JOZMON
                  VILLAGE-SAMARKAND-TASHKENT DURATION: 9 DAYS / 8 NIGHTS
                </h3>
                <div className={style.info}>
                  <div>
                    <h2>DAY 1</h2>
                    <h3>TASHKENT</h3>
                    <h4>Arrival to Tashkent</h4>
                    <p>
                      Meeting at the airport by English-speaking guide and
                      transfer to the hotel to have breakfast then we will begin
                      Sightseeing of the city Tashkent. Tashkent –the capital of
                      Uzbekistan. It is one of the largest cities in the Central
                      Asia. Here live about 3 million inhabitants. The city lies
                      in the northeast part of republic, in the valley of the
                      river Chirchik. To the north from Tashkent it is possible
                      to see snow- covered tops of Big and Small Chimgan.
                      Tashkent - one of the most ancient cities. Its history
                      totals more than 2 thousand years. For the first time the
                      name "Tashkent" is mentioned in XI century in works of
                      Beruni and Mahmud Kashgari. Tashkent is translated from
                      the Uzbek language as "city of a stone ". In the madrassah
                      which is formed of two mausoleums adjoining the ensemble
                      of Hazrati Imam & Old Koran, there is since 1943 an
                      Administration of Moslems (synnits) Uzbekistan ". The
                      museum of “Applied Art”. There are presented subjects of a
                      national applied art: decorative carpets, embroidery gold,
                      and products from fabric, ornaments for women, ceramics,
                      porcelain, musical instruments. Lunch in the Local
                      Restaurant. Check in the hotel at 14:00 p.m. Sightseeing
                      in Tashkent: Market Chorsu with Uzbek it is translated
                      (“four roads”) is full of sweets, eastern fruits and
                      spices. It is also useful to visit a mechanical lane in
                      northern part of a market. There it is possible to see
                      national cradles.Free time at leisure in old city and for
                      shopping in Tashkent. Dinner in the Local Restaurant and
                      overnight in the hotel.
                    </p>
                  </div>
                  <div className={style.faq_img}>
                    <img
                      src="https://thumbs.dreamstime.com/b/tashkent-tv-tower-aerial-shot-sunset-uzbekistan-taken-shutterstock-id-purchase-order-198496654.jpg"
                      alt=""
                    />
                    <img
                      src="https://st4.depositphotos.com/1023102/22108/i/600/depositphotos_221084074-stock-photo-tashkent-uzbekistan-august-2018-people.jpg"
                      alt=""
                    />
                  </div>
                </div>
                <div className={style.info}>
                  <div className={style.faq_img}>
                    <img
                      src="https://images.unsplash.com/photo-1623487077269-ad53c5a59108?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHV6YmVraXN0YW58ZW58MHx8MHx8&w=1000&q=80"
                      alt=""
                    />
                  </div>
                  <div>
                    <h2>DAY 2</h2>
                    <h3>TASHKENT-KOKAND-FERGANA 330 km </h3>
                    <p>
                      Breakfast in the hotel. Morning Transfer to Kokand “the
                      city of winds” by train via Kamchik Pass Mountains.
                      Arrival to Kokand Lunch in the Local Restaurant and
                      excursion of the city.　The Palace of Khudayar Khan was
                      constructed in 1871-1873 by the masters from Kokand,
                      Kanibadam, Chust, Namangan and Uratyube, which produce on
                      guests impression by its 70m high facade. After the
                      excursion drive to Fergana and accommodation in the hotel.
                      Dinner & Overnight in the hotel.
                    </p>
                  </div>
                </div>
                <div className={style.info}>
                  <div>
                    <h2>DAY 3.</h2>
                    <h3>FERGANA-MARGILAN-RISHTAN-TASHKENT 330 km </h3>
                    <p>
                      Breakfast in the hotel. Drive to Margilan The day will be
                      spend on excursing city Margilan (12km from Ferghana).
                      “Yodgorlik”- silk weaving factory which is known for its
                      goods made of silk. Kaftalik mausoleum which is famous for
                      its pigeons, burial place of Pir Muhammad saint. Lunch in
                      the Local Restaurant. After the lunch transfer to Rishtan.
                      Visit to Master Pottery House in Rishtan, masterclass with
                      painting! Then transfer to Tashkent by small private cars
                      via Kamchik Pass Mountains. Arrival to Tashkent and
                      accommodation in the hotel. Dinner and Overnight in the
                      hotel.
                    </p>
                  </div>
                  <div className={style.faq_img}>
                    <img
                      src="https://i5.walmartimages.com/asr/a70e9eed-3390-4d5e-9c9d-19c850989f0b.70c037cb340a58f1cd32d50d6229d2a7.jpeg"
                      alt=""
                    />
                  </div>
                </div>
                <div className={style.info}>
                  <div>
                    <h2>DAY 4</h2>
                    <h3>TASHKENT- BUKHARA </h3>
                    <p>
                      Breakfast in the hotel. Transfer to Tashkent airport at
                      07:00 a.m. and Flight to Bukhara by HY - 037 at 09.15 a.m.
                      Arrival to Bukhara at 10.25 a.m. Excursion in the city. In
                      Bukhara there are a lot of interesting places of
                      sightseeing. You will adore the ancient historical places.
                      Mausoleum of Ismail Samani (10 century) has been erected
                      during board Ismail Samani (892-907) and became family
                      tomb of Samanids. Lunch in the Local Restaurant. Transfer
                      & accommodation in the hotel at 14:00 p.m. The symbol of
                      Bukhara considers Minaret Kalian costing in city centre
                      with the height of 46, 6 m. - achievement of architecture,
                      which is before the Mongols invasion specified to caravans
                      a way to sacred city. Just next to the Minaret Kalian
                      stands the great mosque – Mosque Kalian which is connected
                      with a minaret by the small bridge towers. It is the
                      oldest and second-largest mosque of the Central Asia after
                      mosque Bibi Hanum in Samarkand. Chor Minor Mausoleum. Free
                      time at leisure and for shopping in Bukhara city. Concert
                      of Folklore Show in Madrassah of Nodir Devanbegy and
                      Dinner in National Guest House. Overnight at the hotel.
                    </p>
                  </div>
                  <img
                    src="https://i.ytimg.com/vi/BlCxQ4Ci1qg/maxresdefault.jpg"
                    alt=""
                  />
                </div>
                <div className={style.info}>
                  <img
                    src="https://www.turkestantravel.com/wp-content/uploads/2020/02/DSC_4938.jpg"
                    alt=""
                  />
                  <div>
                    <h2>DAY 5</h2>
                    <h3>BUKHARA</h3>
                    <p>
                      Breakfast in the hotel. Excursion around the suburbs of
                      Bukhara: Sitorai Mokhi Khosa (end of XIX c-begining of XX
                      c ) : The residence of the last ruled emir (ruler) of
                      Bukhara. It is the only remained sample of bukharan emir
                      country palaces. Sitora and Mokhi-Khosa Palace was
                      quartered on two territories. Old palace of
                      Abdul-Akhad-khan (1892) is a traditional three-house
                      complex with one- and two-storey building in the spirit of
                      bukharian dwelling houses. Puppet Makers by Masters near
                      Lyabi Hauz complex. Bukhara is an excellent place to visit
                      the workshops of puppet makers: Iskandar Khakimov's
                      atelier is located on the south side of the Lyabi Hauz. He
                      explains each step of how he makes his gorgeous puppets,
                      from the papier-mâché heads beautifully painted in oils to
                      the hand-stitched traditional costumes. Lunch in the Local
                      Restaurant. Free time at leisure in old part of the city
                      on their own. Dinner in the Local Restaurant. Overnight in
                      the hotel.
                    </p>
                  </div>
                </div>
                <div className={style.info}>
                  <div>
                    <h2>DAY 6</h2>
                    <h3>BUKHARA-SAMARKAND 280 km </h3>
                    <p>
                      Breakfast in the hotel. Drive to Samarkand from Bukhara
                      (280 km, 5 hrs). On the road visit Raboti Malik and
                      Sardoba in Navoi. Arrival to Samarkand and accommodation
                      in hotel. Lunch in the Local Restaurant. Samarkand is one
                      of the ancient cities of the world. In the city is
                      remained a lot of historical monuments of antiquity. You
                      will certainly enjoy tour in Samarkand. P.M. Visit
                      Observatory of Ulugbek, visit to Necropolis Shakhi-Zinda
                      and ensemble of mausoleums of the 11th-19th centuries, the
                      necropolis of Samarkand rulers and nobles, Gur-Emir
                      mausoleum (15 century) - in translation means the
                      mausoleum "a tomb of the khan’s" - is a burial place of
                      Amir Temur and his dynasty. The mausoleum has been
                      designed under Amir Temur's order for its favorite
                      grandson Mohammed Sultan who has suddenly died in 1403.
                      Dinner in the Local Restaurant. Overnight in the hotel.
                    </p>
                  </div>
                  <img
                    src="https://www.shutterstock.com/shutterstock/videos/1015138015/thumb/1.jpg?ip=x480"
                    alt=""
                  />
                </div>
                <div className={style.info}>
                  <img
                    src="https://static.zarnews.uz/crop/0/9/720__80_09a852112f27abb1e17003be9eecb666.jpg?img=self&v=1588982274"
                    alt=""
                  />
                  <div>
                    <h2>DAY 7</h2>
                    <h3>SAMARKAND-JOZMON VILLAGE-SAMARKAND 45 km</h3>
                    <p>
                      Breakfast in the hotel. Drive to Jozmon village in Urgut
                      District near Samarkand. There will be our Uzbek women
                      will show of our Uzbek wedding ceremony with Uzbek Bride,
                      our Uzbek old grandmothers and women will sing song with
                      national instruments and will be show of cradle how to do
                      sleep little Uzbek baby in cradle with ceremony in Uzbek
                      local family, Uzbek girls will wear our national clothes
                      and dance with sing song, tourists will see and learn our
                      Uzbek local traditions and habits in Jozmon village in
                      Urgut district. Lunch in the Local Family in Jozmon
                      village with national cuisine at 13:00. Presentation &
                      cooking class of the Uzbek national Dish of “Palov” and
                      cooking Uzbek bread in tandoor by Local Uzbek Woman. She
                      will explain the cooking style of Uzbek meal in local
                      family house. After visit Jozmon village transfer to
                      Samarkand on the way Visit Samarkand Silk Paper Factory.
                      Drive and accommodation at the hotel. Free time at leisure
                      in old city on their own. Dinner in Local Restaurant and
                      Overnight in the hotel.
                    </p>
                  </div>
                </div>
                <div className={style.info}>
                  <div>
                    <h2>DAY 8</h2>
                    <h3>SAMARKAND-TASHKENT 310 km </h3>
                    <p>
                      Breakfast in the hotel. Visit Registan square with three
                      madrassahs (15-17 c.c.) - literally " the sandy square " -
                      the well-known symbol of Uzbekistan, a symbol of city, a
                      cultural heritage of UNESCO. In the medieval East the
                      square was a place where governors disclosed orders where
                      passed court where also there was a brick market. Mosque
                      Bibi Khanim (15 century) - was the greatest architectural
                      monument some kind of in the Islamic world. Timur ordered
                      to construct this mosque after the successful campaign to
                      India to show the boundless technical and financial
                      opportunities. He wished to construct a greater “Friday
                      mosque” (mosque for praying on Fridays) which should be
                      the terrestrial sample of paradise. Timur itself observed
                      the construction of a mosque. Visit Siyab Bazaar & free
                      time for shopping and walking in bazaar on their own.
                      Lunch in the Local Restaurant. At 14:00 p.m. transfer to
                      Tashkent by bus. Arrival to Tashkent and accommodation in
                      the hotel. Farewell Dinner in the hotel or in Local
                      Restaurant and Overnight in the hotel.
                    </p>
                  </div>
                  <img
                    src="https://i0.wp.com/cdn.statically.io/img/lanniesfoodandtravel.com/f=auto/wp-content/uploads/2020/05/IMG_2130-1-683x1024.jpg?resize=683%2C1024&ssl=1"
                    alt=""
                  />
                </div>
                <h2>DAY 9</h2>
                <h3>Tashkent</h3>
                <p>Breakfast in the hotel. Transfer to Tashkent airport</p>
                <h3 className={style.green}>TOUR PROGRAM PRICE INCLUDES:</h3>
                <ul className={style.items}>
                  <li>Accommodation in 4/3 star * hotels twin share rooms;</li>
                  <li>
                    Tours and transfers on the deluxe coach A/C
                    airport-hotel-airport;
                  </li>
                  <li>
                    Transfers by private cars via Kamchik Pass Mountain from
                    Tashkent-Fergana Valley-Tashkent;
                  </li>
                  <li>English Speaking Guide through the tour itinerary;</li>
                  <li>
                    Entrance fees to all visiting places and museums per
                    itinerary;
                  </li>
                  <li>
                    Folklore show in Madrassah of Nodir Devan Begi in Bukhara;
                  </li>
                  <li>Full Board Meals (Breakfast, Lunch and Dinner);</li>
                  <li>
                    Cooking Class with National Cuisine of “Palov” in Samarkand;
                  </li>
                  <li>
                    Tashkent-Bukhara economy class flight tickets by Uzbekistan
                    Airways;
                  </li>
                  <li>
                    Visit Jozmon village in Urgut district to see and learn
                    Uzbek local people traditions, habits, wedding ceremony show
                    with Uzbek bride and Baby Cradle ceremony by our old women
                    sing song and dance by Uzbek girls with Uzbek National
                    Folklore Show;
                  </li>
                  <li>
                    Visit Silk Weaving Factory in Margilan and Pottery House in
                    Rishtan
                  </li>
                  <li>
                    Visit Silk Paper Factory “Meros” in Samarkand & Puppet
                    Makers Masters in Bukhara;
                  </li>
                  <li>Mineral water per person per a day.</li>
                </ul>
                <h3 className={style.red}>
                  TOUR PROGRAM PRICE DOES NOT INCLUDES:
                </h3>
                <ul className={style.items}>
                  <li>Strong drinks (vodka, beer, wine, etc);</li>
                  <li>Photo and Camera fees;</li>
                  <li>Taxes in the International Airport;</li>
                  <li>International flight tickets;</li>
                  <li>Tips for guide and driver;</li>
                  <li>Single Supplement room (---- USD).</li>
                </ul>
                <Link to={"/book"}>
                  <button className={style.btn_tours}>{t("booknow")}</button>
                </Link>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className={style.accordion}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>“THE PEARL OF THE EAST TOUR UZBEKISTAN”</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <h1>“THE PEARL OF THE EAST TOUR UZBEKISTAN”</h1>
                <h3>Tashkent – Samarkand – Bukhara – Tashkent</h3>
                <p>
                  Our travel is opening to you Uzbekistan from Tashkent to
                  Samarkand and Bukhara. You plunge into interesting history.
                  Accommodation at the national houses and hotels, East markets,
                  interesting legends, hospitality of the population with their
                  traditions and many other things remains to the area in your
                  memory for ever.
                </p>
                <p>
                  <span>Specialization:</span>Cultural program on the Great Silk
                  Road
                </p>
                <h3>What is included:</h3>
                <ul className={style.items}>
                  <li>
                    Accommodation
                    <li>• Tashkent- 4 nights</li>
                    <li>• Samarkand- 2 nights</li>
                    <li>• Bukhara- 2 nights</li>
                  </li>
                  <li>
                    Vehicles with A/C throughout the whole trip
                    <li>• Up to 3 person - 4*4 comfortable car.</li>
                    <li>• Up to 8 person - Mini Van </li>
                    <li>• Up to 16 person - Mini Bus</li>
                    <li>• More than 16 person – Bus. </li>
                  </li>
                  <li>Breakfast</li>
                  <li>
                    Admission fees to historical monuments (this fee doesn’t
                    include museum and cam/video fees)
                  </li>
                  <li>
                    Tour Guide in following languages.
                    <li>
                      • English, German, French, Italian, Spanish, Arabian,
                      Persian, Turkish and etc…
                    </li>
                    <li>Air or train tickets within Uzbekistan.</li>
                  </li>
                </ul>
                <h4>Duration: 9 days/ 8 nights.</h4>
                <h5>Tour Summary:</h5>
                <h2>DAY 1.TASHKENT</h2>
                <p>
                  {" "}
                  Arrival to Tashkent. From the airport and transfer to the
                  hotel.
                </p>
                <h2>DAY 2. TASHKENT- SAMARKAND</h2>
                <div className={style.info}>
                  <p>
                    Breakfast in the hotel at 07:00-09:00. After breakfast
                    transfer to Samarkand by coach or by train. Arrival in
                    Samarkand. Accommodation the hotel. Lunch in the cal
                    restaurant, after lunch half day sity tour: The Square of
                    Registan (15-17 centuries) - literally " the sandy area " -
                    the well-known symbol of Uzbekistan, a symbol of city, a
                    cultural heritage of UNESCO. In the medieval East the area
                    was a place where governors disclosed orders where passed
                    court where also there was a brisk market. Gur-Emir
                    mausoleum (15 century) - in translation means the mausoleum
                    " a tomb of the master " - is a place of burial place of
                    Tamerlan and its followers. The mausoleum has been designed
                    under Timur's order for its favourite grandson Mohammed
                    Sultana who has suddenly died in 1403. Mausoleum Ruhabod -
                    the small mausoleum located near to the Gur-emir mausoleum.
                    Ak Saray mausoleum (15 century), Nadir Devon Begi madrasah
                    (16 century), Ishratkhona (14 century), Khodja Ahrar
                    complex. Overnight and in the hotel.
                  </p>
                  <img
                    src="https://cdn.odysseytraveller.com/app/uploads/2019/07/registan-square-samarkand.jpg"
                    alt=""
                  />
                </div>
                <h2>DAY 4</h2>
                <h3>SAMARKAND</h3>
                <div className={style.info}>
                  <img
                    src="https://www.sbs.com.au/food/sites/sbs.com.au.food/files/styles/full/public/gettyimages-629573913.jpg?itok=S76cLR1T"
                    alt=""
                  />
                  <p>
                    Breakfast in the hotel at 07.00-09.00. . Excursion on city.
                    Observatory of Ulugbek (1428-1429) which is in northwest of
                    city, has been constructed by the governor and scientists
                    Ulugbek. By means of chronicles from 17 century the Russian
                    archeologist Vyatkin managed to find an observatory. The
                    main tool of an observatory was sextant presumably laid out
                    from a brick with radius 40,4 m in the end of a line of a
                    meridian. Lunch in the Uzbek Traditional Restaurant. Complex
                    Shakhi Zinda (14-15) consists of the several mausoleums
                    which were consistently attached to each other within
                    centuries. The decor is diverse and fantastic, the leitmotif
                    which can admire already on the main portal, is presented by
                    colors and stars - a so-called Samarkand ornament. Shakhi
                    Zinda in translation literally is meant with "a living
                    king". As the place of pilgrims, which visiting else in the
                    beginning 20 century was forbidden to other believers,
                    widely known far outside Samarkand. Mosque Bibi Hanim (15
                    century) - was the greatest architectural monument some kind
                    of in the Islamic world. Timur ordered to construct this
                    mosque after the successful campaign to India to show the
                    boundless technical and financial opportunities. It wished
                    to construct a greater Friday mosque which should be the
                    terrestrial sample of paradise. Timur itself observed of
                    construction of a mosque.Visiting of east market Siyob.
                    Visit Afrasiyab Museum and Ruins, Khoja Daniyar Mausoelum,
                    Khazrati Khizr Mausoleum. Overnight in the hotel.
                  </p>
                </div>
                <h2>DAY 5</h2>
                <h3>SAMARKAND- BUKHARA</h3>
                <p>
                  Breakfast in the hotel at 07.00-09.00 Transfer to Bukhara in
                  the morning. Arrival and accommodation in the hotel. Lunch in
                  The Uzbek Traditional Restaurant. After the lunch free time in
                  Bukhara.Dinner in the Local Restaurant and Overnight in the
                  hotel
                </p>
                <div className={style.info}>
                  <div>
                    <h2>DAY 6</h2>
                    <h3>BUKHARA</h3>
                    <p>
                      Breakfast in the hotel at 07.00-09.00. After the breakfast
                      a full day tour of Bukhara. Excursion of Bukhara begins
                      with visits to significant places such as: Lyabi Khauz,
                      Madrassaah of Nodir Devonbegi, Fortress Ark , Madrassah of
                      Ulugbek, Madrassah of Abdulazizkhan, Mosque Magoki Ataru,
                      Mausoleum Chashma Ayub, The mosque Bolo House and etc..
                      Madrassah Nadir Devanbegy (1622) it has been initially
                      constructed as a caravan-shed, and then it is transformed
                      in to madrassah. The building in the size 70×70 has not
                      initial decor for the Islamic world: on the main portal
                      alive essences - flying herons are represented alongside
                      with the accepted vegetative motives also. Madrassah of
                      Kukeldash (1568-1569.) - The oldest and simultaneously the
                      greatest part of complex Lyaby Hauz. It is monumental and
                      is very richly decorated, as a characteristic building of
                      the period Abdulla Khan (1557-1598). In madrassah veins
                      the writer and poet Sadriddin Aini (1878-1954) also
                      learned. Madrassah of Ulugbek (1417) - unique construction
                      in Bukhara, named in memory of the great astronomer
                      Ulugbek. Above the entrée of the madrassah master Ulugbek
                      ordered to cut words: «Aspiration to knowledge - a duty of
                      each Moslem and Moslem women". Madrassah has arisen during
                      prospering period of the Central Asian architecture
                      (1417-1418) and it is considered the ideal sample
                      madrassah in Central Asia. Madrassah of Abdulazizkhan
                      (1652) surpasses madrassah of Ulugbek in scales and
                      riches. Abdulazizkhan wished to surpass all predecessors
                      in decorative furnish and the architectural attitude. The
                      projection reminds opposite of the madrassah of Ulugbek.
                      In city centre where was a market on which twice a year at
                      the presence of the governor of Bukhara were exposed for
                      sale of the image of deities earlier, there is today one
                      of the most ancient kept mosques of the Central Asia -
                      Mosque Magoki Ataru It is constructed on the same place
                      where during pre-Islamic time was Zoroastrian a temple.The
                      symbol of Bukhara considers Minaret Kalian costing in city
                      centre which height makes 46, 6 m. – architectural
                      construction, which before Directly near to Minaret Kalian
                      the great mosque – mosque Kalian which is connected with a
                      minaret the small bridge towers. It is the oldest and
                      second-largest mosque of the Central Asia after mosque
                      Bibi Hanum in Samarkand. Fortress (Citadel) Ark (1-20 ) is
                      a symbol of greatness and authority towers above the area.
                      Construction of a citadel is dated approximately in the
                      beginning of 1 millennium BC. The mosque Bolo House (1712)
                      - a complex of special harmony and beauty - served as the
                      main Friday mosque. The ensemble includes building of
                      Friday mosque (1712), minaret (1917) and reservoir. In the
                      mosque gather Moslems for fivefold namaz today again.
                      Mausoleum Chashma Ayub (1380-1384/85 y.) - the mausoleum
                      with set of domes. The most ancient part of the mausoleum
                      should have been built at the deputy of Karakhanids.
                      Arslan Khan in 12 century but most likely it was Timur who
                      in 14 century has planned to construct a tomb and in 1380
                      realized the plan owing to the Khorezm architects.
                      Mausoleum of Ismail Samani (X century) has been erected
                      during board of Ismail Samani (892-907 y.y) and became
                      family tomb of Samanids. Despite of the modest sizes of
                      the basis (10×10) and height of 14 m this monument serves
                      as the proof of high art skill. Dinner at the local
                      restaurant. Overnight in the hotel.
                    </p>
                  </div>

                  <div className={style.faq_img}>
                    <img
                      src="https://avatars.mds.yandex.net/get-altay/1001354/2a000001619391201f5bc150acf51af2bd58/XXXL"
                      alt=""
                    />
                    <img
                      src="https://stat.uz/images/topik/173841_5ded4dae951f1d88f226613b8d6c.jpg"
                      alt=""
                    />
                    <img
                      src="https://i.pinimg.com/originals/e5/c8/bf/e5c8bfcfab6acecfe84159af9784c12b.jpg"
                      alt=""
                    />
                  </div>
                </div>
                <div className={style.info}>
                  <div>
                    <h2>DAY 7</h2>
                    <h3>Tashkent</h3>
                    <p>
                      Breakfast in the hotel at 07.00-09.00. Sightseeing of the
                      city Tashkent. Tashkent –the capital of Uzbekistan. It is
                      one of the largest cities in the Central Asia. Here live
                      about 3 million inhabitants. The city lies in the
                      northeast part of republic, in the valley of the river
                      Chirchik. To the north from Tashkent it is possible to see
                      snow- covered tops of Big and Small Chimgan. Tashkent -
                      one of the most ancient cities. Its history totals more
                      than 2 thousand years. For the first time the name
                      "Tashkent" is mentioned in XI century in works of Beruni
                      and Mahmud Kashgari. Tashkent is translated from the Uzbek
                      language as "city of a stone ". Khast-Imam and Barak Khan
                      Madrassah were founded in the 16th century in Tashkent,
                      Uzbekistan. The Khast-Imam complex features an ornate
                      façade of blue-tiled mosaic concealing a rose garden
                      courtyard with 35 hujras Teleshayakh Mosque which contains
                      an important religious library, the Kaffal-Shashi
                      mausoleum, built over the grave of Abubekr Mukhmmad
                      Kaffal-Shashi, and the Imam al-Bukhari Institute, a
                      training center for Moslem clergy. Mausoleum of
                      Abu-Bakr-Muhammad Kafal Al Shashi Kafal Al-Shashi
                      originated from the Shash region (present Tashkent) and
                      was a missionary who propagated shafiitism. the Mausoleum
                      of Kafal Shashi, a mystical poet and interpreter of Koran
                      of the 10th century, who later was worshiped as a Saint.
                      Also, he was a very educated person and mystic poet. He
                      died in 10th century AD and his mausoleum, rebuilt in 16th
                      century, was a popular pilgrimage destination for
                      thousands of Muslims. Madrassah and Cathedral Mosque Barak
                      Khan madrassah (XVI c) - headquarter of the Sunni Mufti of
                      ex-Sogdian Central Asia & Kazakhstan. It is interesting
                      with its mosaic and Arabic calligraphy dated late 16
                      century. Brick facade and the intricately carved doors
                      made by Samarkand craftsmen Built in 16 century by
                      Ulugbek's grandson Suyunij-khan. Presently it accommodates
                      the Clerical Board of Muslims of Central Asia. Next to it
                      is the Board's Library, containing a precious Koran
                      written by the famous fourth Caliph Osman, known as the
                      compiler of Holy Korans for the entire Islamic world. The
                      legend goes that he was murdered while working with the
                      book, and it still keeps blood stains on its pages made of
                      gazelle skin.
                    </p>
                  </div>
                  <div className={style.faq_img}>
                    <img
                      src="https://i.pinimg.com/originals/95/95/94/9595944afe1ea39a5ad4ffdc5eefe208.jpg"
                      alt=""
                    />
                    <img
                      src="https://lyubosvit.com.ua/wp-content/uploads/2018/06/TASHKENT-750x499.jpg"
                      alt=""
                    />
                    <img
                      src="https://cdn1.matadornetwork.com/blogs/1/2019/05/Metro-station-in-Tashkent-Uzbekistan-1200x858.jpg"
                      alt=""
                    />
                  </div>
                </div>
                <div className={style.info}>
                  <div className={style.faq_img}>
                    <img
                      src="https://images.squarespace-cdn.com/content/v1/5940f2725016e1c79e469470/1540004147826-C6ZIE42DALBW63ZAKEVJ/DSC09847+%282%29-min.JPG?format=1500w"
                      alt=""
                    />
                    <img
                      src="https://media.tacdn.com/media/attractions-splice-spp-674x446/07/ae/e9/25.jpg"
                      alt=""
                    />
                  </div>
                  <div>
                    <h2>DAY 8</h2>
                    <h3>Tashkent</h3>
                    <p>
                      Breakfast in the hotel at 07.00-09.00. Excursion in the
                      city. Tashkent city tour includes visits to significant
                      places such as: Chorsu Bazaar, madrasaah of Abduraim
                      Sheikh and the museum of Applied Arts and Tamerlane museum
                      of Tashkent. Kukeldash Madrassah is one of the few
                      remained monumental architectural monuments of Tashkent.
                      It was built in the second half of the 16th century in the
                      time of Abdullachan (1557-1598) under the Leadership of
                      Kulbobo Kukeldash who was a vizier, a scientist and a
                      poet. Madrassah Kukeldash is under the authority of
                      Religious Board of Mawarannahr Moslems, and at present it
                      is a regularly acting mosque. There is a primary school,
                      which teaches the basis of Islam. . There it is possible
                      to see national cradles. Market Chorsu which is in
                      translation from Uzbek means (“four roads”) is full of
                      sweets, eastern fruits and spices. Lunch in the Uzbek
                      Local Restaurant. The museum of “Applied Art”. There are
                      presented subjects of a national applied art: decorative
                      carpets, embroidery gold, and products from fabric,
                      ornaments for women, ceramics, porcelain, musical
                      instruments. Visit Tamerlane Museum, Independence
                      Square.Overnight in the hotel.
                    </p>
                  </div>
                </div>
                <h2>DAY 9</h2>
                <h3>Tashkent</h3>
                <p>
                  Breakfast in the hotel at 07.00-09.00. End of the tour
                  Transfer to Tashkent airport
                </p>
                <Link to={"/book"}>
                  <button className={style.btn_tours}>{t("booknow")}</button>
                </Link>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className={style.accordion}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Along the Silk Road – Uzbekistan</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <h1>Along the Silk Road – Uzbekistan</h1>
                <h2>
                  Tashkent – Khiva – Bukhara – Shakhrisabz – Samarkand –
                  Tashkent{" "}
                </h2>
                <p>
                  <span>Specialization:</span>Cultural program on the Great Silk
                  Road.
                </p>
                <h3 className={style.green}>What is included:</h3>
                <ul className={style.items}>
                  <li>
                    Accommodation (Leisure package-small hotel, VIP package
                    –luxurious hotel)
                    <li>Tashkent - 2 nights</li>
                    <li>Khiva - 1 nights</li>
                    <li>Bukhara - 3 nights</li>
                    <li>Samarkand - 3 nights</li>
                  </li>
                  <li>
                    Vehicles with A/C throughout the whole trip
                    <li>Up to 3 person - 4*4 comfortable car.</li>
                    <li>Up to 8 person - Mini Van </li>
                    <li>Up to 16 person - Mini Bus. </li>
                    <li>More than 16 person – Bus. </li>
                  </li>
                  <li>
                    Breakfast and 2 options of meals (e.g. lunch or dinner ){" "}
                  </li>
                  <li>
                    Admission fees to historical monuments (this fee doesn’t
                    include museum and cam/video fees)
                  </li>
                  <li>
                    Tour Guide in following languages.
                    <li>
                      English, German, French, Italian, Spanish, Arabian,
                      Persian, Turkish etc…
                    </li>
                  </li>
                  <li>Air or train tickets within Uzbekistan</li>
                </ul>
                <p>Duration: 10 days/ 9 nights.</p>
                <h4>Tour Summary:</h4>
                <h3>DAY 1</h3>
                <h2>Tashkent</h2>
                <p>
                  Arrival to Tashkent. Transfer from the airport to the hotel.{" "}
                </p>

                <div className={style.info}>
                  <div>
                    <h3>DAY 2</h3>
                    <h2>Tashkent- Urgench-Khiva</h2>
                    <p>
                      Morning flight to Urgench. Arrival to Urgench, transfer to
                      the hotel in Khiva. Later proceed for guided sightseeing
                      of Khiva, spend a day in UNESCO World Heritage site
                      Ichan-Qala fortress. In Ichan-Qala fortress visit
                      Mukhammad Amin Khan medresah, Mukhammad Rahimkhan
                      Medresah, Kalta Minor, Kunya-Ark, Juma mosque, Toshkhovli
                      palace, Pakhlavan Makhmud mausoleum, minaret Islom-khodja.
                      Free time in the afternoon. Overnight at the hotel.{" "}
                    </p>
                  </div>
                  <div>
                    <img
                      src="https://static.horizonguides.com/images/_matrixImage/Uzbekistan_Khiva_Kalta-Minor-in-walled-inner-town-of-tchan-Kala.jpg"
                      alt=""
                    />
                  </div>
                </div>
                <div className={style.info}>
                  <div>
                    <h3>DAY 3</h3>
                    <h2>Khiva - Bukhara</h2>
                    <p>
                      In the morning depart Khiva and drive to Bukhara (500 km,
                      7 hours). On the way stop to see Amu-Darya river. Arrival
                      to Bukhara in the afternoon. Check in to the hotel. Free
                      time. Overnight at the hotel
                    </p>
                  </div>
                  <div>
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/2012_Bukhara_7515821196.jpg/1200px-2012_Bukhara_7515821196.jpg"
                      alt=""
                    />
                  </div>
                </div>
                <div className={style.info}>
                  <div>
                    <img
                      src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/94/4d/d3/caption.jpg?w=700&h=-1&s=1"
                      alt=""
                    />
                  </div>
                  <div>
                    <h3>DAY 4</h3>
                    <h2>Bukhara</h2>
                    <p>
                      Continue sightseeing Bukhara. Trip to summer palace of
                      Bukhara emirs Sitorai-Mokhikhosa, Chor-Bakr and Bakhoutdin
                      Naqshbandi mausoleum. In the afternoon free time in
                      Bukhara.{" "}
                    </p>
                  </div>
                </div>
                <div className={style.info}>
                  <div>
                    <h3>DAY 5</h3>
                    <h2>Bukhara</h2>
                    <p>
                      Continue sightseeing Bukhara. Trip to summer palace of
                      Bukhara emirs Sitorai-Mokhikhosa, Chor-Bakr and Bakhoutdin
                      Naqshbandi mausoleum. In the afternoon free time in
                      Bukhara.{" "}
                    </p>
                  </div>
                  <div>
                    <img
                      src="https://cdn.britannica.com/02/137502-050-4652990C/Kalyan-Mosque-Bukhara-Uzbekistan.jpg"
                      alt=""
                    />
                  </div>
                </div>
                <div className={style.info}>
                  <div>
                    <h3>DAY 6</h3>
                    <h2>
                      Bukhara-Shakhrisabz-Samarkand (290 km, 4hrs + 90 km, 1,5
                      hrs){" "}
                    </h2>
                    <p>
                      In the morning depart Bukhara and drive to Samarkand via
                      Shakhrisabz. Stop in Shakhrisabz for sightseeing. Visit
                      ruins of Ak-Saray palace, mausoleum of Jakhongir and
                      Omar-Shaykh, mausoleum Dorut-Tilovat where conqueror
                      Tamerlane’s father and his spiritual tutor are buried,
                      Kok-Gumbaz mosque. In the afternoon continue driving to
                      Samarkand. Arrival to Samarkand, check in to the hotel.
                      Free time.{" "}
                    </p>
                  </div>
                  <div>
                    <img
                      src="https://uzbek-travel.com/images/uz/Cities/Shakhrisabz/8322350072_6718ec2f0d_b.jpg"
                      alt=""
                    />
                  </div>
                </div>
                <div className={style.info}>
                  <div>
                    <img
                      src="https://worlderingaround.com/wp-content/uploads/2019/11/Uzbekistan-Central-Asia-1-5-1024x683.jpg"
                      alt=""
                    />
                  </div>
                  <div>
                    <h3>DAY 7</h3>
                    <h2>Samarkand</h2>
                    <p>
                      Sightseeing tour in Samarkand. Visit Registan Square,
                      ruins of Bibi-Khanum Mosque, Shakhi-Zinda necropolis,
                      Gur-Emir mausoleum, Ulugbek observatory. Overnight at the
                      hotel.{" "}
                    </p>
                  </div>
                </div>
                <div className={style.info}>
                  <div>
                    <h3>DAY 8</h3>
                    <h2>Samarkand</h2>
                    <p>
                      Continue sightseeing Samarkand. Visit Afrosiyob museum,
                      the tomb of Saint Daniel. Drive to Imam Al Bukhari
                      complex, Muslim pilgrimage place (25 km, 30 min). The
                      place is famous for its modern mosque built after the
                      independence of Uzbekistan, mausoleum of Imam Al Bukhari,
                      sufist and the author of second holy book Hadis after
                      Qoran in Islam. Free time in the afternoon. Overnight at
                      the hotel.
                    </p>
                  </div>
                  <div>
                    <img
                      src="https://www.advantour.com/img/uzbekistan/samarkand/shakhi-zinda.jpg"
                      alt=""
                    />
                  </div>
                </div>
                <div className={style.info}>
                  <div>
                    <img
                      src="https://www.advantour.com/img/uzbekistan/tashkent/minor-mosque4.jpg"
                      alt=""
                    />
                  </div>
                  <div>
                    <h3>DAY 9</h3>
                    <h2>Samarkand-Tashkent (297km, 4hrs)</h2>
                    <p>
                      In the morning depart Samarkand and drive to Tashkent.
                      Arrival to Tashkent, check in to the hotel. Sightseeing
                      program in Tashkent. Visit center of Tashkent, Amir Temur
                      Square, Independence Square, Old City part of Tashkent
                      with Khast-Imom Complex and Chor-Su bazaar, Applied Arts
                      Museum. Overnight at the hotel. In the morning depart
                      Samarkand and drive to Tashkent. Arrival to Tashkent,
                      check in to the hotel. Sightseeing program in Tashkent.
                      Visit center of Tashkent, Amir Temur Square, Independence
                      Square, Old City part of Tashkent with Khast-Imom Complex
                      and Chor-Su bazaar, Applied Arts Museum. Overnight at the
                      hotel.{" "}
                    </p>
                  </div>
                </div>
                <h3>DAY 10</h3>
                <h2>Tashkent-departure </h2>
                <p>End of the tour. Transfer to the airport, departure. </p>
                <Link to={"/book"}>
                  <button className={style.btn_tours}>{t("booknow")}</button>
                </Link>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className={style.accordion}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>“LOUVRE of UZBEKISTAN”</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <h1>“LOUVRE of UZBEKISTAN”</h1>
                <p>DURATION: 11 DAYS / 10 NIGHTS </p>
                <p>
                  ROUTE: TASHKENT-NUKUS-CHILPIK KALA
                  FORTRESS-KHIVA-BUKHARA-SAMARKAND-TASHKENT
                </p>
                <div className={style.info}>
                  <div>
                    {" "}
                    <h3>DAY 1</h3>
                    <h2>TASHKENT-NUKUS</h2>
                    <p>
                      Arrival to Tashkent Meeting at the airport by
                      English-speaking guide and transfer to the hotel to have
                      breakfast at the hotel then we will begin Sightseeing of
                      the city Tashkent. Visit Khazrati Imam Complex, Applied
                      Art Museum. Lunch in Local Restaurant. Transfer to airport
                      at 16:00 p.m. and flight to Nukus from Tashkent by HY-017
                      at 17:30 p.m. Arrival to Nukus at 19:15 p.m. Meet and
                      transfer to the hotel. Dinner & Overnight at the hotel.
                    </p>
                  </div>
                  <img
                    src="https://i.pinimg.com/originals/e5/c8/bf/e5c8bfcfab6acecfe84159af9784c12b.jpg"
                    alt=""
                  />
                </div>
                <div className={style.info}>
                  <div>
                    <img
                      src="https://media-cdn.tripadvisor.com/media/photo-s/17/a3/08/6a/mizdakhan-general-view.jpg"
                      alt=""
                    />
                  </div>
                  <div>
                    <h3>DAY 2</h3>
                    <h2>NUKUS</h2>
                    <p>
                      Nukus is the capital city of Karakalpakistan Republic.
                      Excursion in the city. Visit the Museum of Karakalpakistan
                      “Savitskiy” both buildings. Accommodation at the hotel.
                      Lunch in Local Restaurant. P.M. Visit Mazdakhan Fortress.
                      Dinner in Local Restaurant. Overnight in the hotel.
                    </p>
                  </div>
                </div>
                <div className={style.info}>
                  <div>
                    <h3>DAY 3</h3>
                    <h2>NUKUS-CHILPIKKALA-KHIVA</h2>
                    <p>
                      Breakfast in the hotel. Morning transfer to Chilpik Kala
                      Fortress, Lunch. Then transfer to Khiva and accommodation
                      at the hotel. Dinner & Overnight at the hotel.
                    </p>
                  </div>
                  <img
                    src="https://www.thetimes.co.uk/travel/wp-content/uploads/sites/6/2021/09/VJV-The-Golden-Road-to-Samarkand-Itchan-Kala-Khiva-uzbekistan.jpg?w=380&h=285&crop=1"
                    alt=""
                  />
                </div>
                <div className={style.info}>
                  <div>
                    <img
                      src="https://static.horizonguides.com/images/_matrixImage/Uzbekistan_Khiva_Kalta-Minor-in-walled-inner-town-of-tchan-Kala.jpg"
                      alt=""
                    />
                  </div>
                  <div>
                    <h3>DAY 4</h3>
                    <h2>KHIVA</h2>
                    <p>
                      Breakfast in the hotel. Excursion in Khiva Ichan Kala.
                      Full day SS tour of Khiva: Ichan –Kala (UNESCO World
                      Heritage List) with towers, a heavily fortified citadel
                      called Kunya-Ark – the Old Fortress, palace-fortress
                      Kurynysh-khana, Juma mosque the Seyid Allauddin mausoleum,
                      the Pakhlavan–Makhmud mausoleum, the caravanserai, the
                      Tash-Khauli palace. Lunch in Local Restaurant. Free time
                      at leisure on their own. Dinner in Local Restaurant.
                      Overnight at the hotel
                    </p>
                  </div>
                </div>
                <div className={style.info}>
                  <div>
                    <h3>DAY 5</h3>
                    <h2>KHIVA-BUKHARA</h2>
                    <p>
                      Breakfast in the hotel. Drive to Bukhara via Kyzylkum
                      desert along Caravan road. Lunch Picnic on the road.
                      Arrival and accommodation in hotel. P.M. Self walk to
                      ancient city. Dinner in National Guest House. Overnight at
                      the hotel.
                    </p>
                  </div>
                  <div>
                    <img
                      src="https://whc.unesco.org/uploads/thumbs/site_0602_0016-750-750-20130729144635.jpg"
                      alt=""
                    />
                  </div>
                </div>
                <div className={style.info}>
                  <div>
                    <img
                      src="https://difotoediviaggi.it/images/foto-articoli/uzbekistan-bukhara/bukhara-ulug-beg.webp"
                      alt=""
                    />
                  </div>
                  <div>
                    <h3>DAY 6</h3>
                    <h2>BUKHARA </h2>
                    <p>
                      Breakfast in the hotel. Full day S/S tour in Bukhara
                      including: The Lyabi-Khaus ensemble Also visit 3 remaining
                      domed bazaars – Taqi Zargaron, or Jeweler’s Bazaar, Taqi
                      Telpak Furushon or Cap Makers’ Bazaar and Taqi Sarrafon,
                      or Moneychangers’ Bazaar, Mausoleum of the Samanids, (From
                      high walls of citadel the interesting skyline of the city
                      is made up of a mixture of modern buildings and monuments
                      of the past), Friday Mosque & Ensemble Poi Kalian. Lunch
                      in Local Restaurant. Free time at leisure on their own.
                      Folklore show in Nodir Devon Begi. Dinner in National
                      Guest House. Overnight at the hotel.
                    </p>
                  </div>
                </div>
                <div className={style.info}>
                  <div>
                    <h3>DAY 7</h3>
                    <h2>BUKHARA-VABKENT-SAMARKAND </h2>
                    <p>
                      Breakfast in the hotel. In the morning visit Summer
                      Residence of Bukhara Emir at the outside of Bukhara city.
                      Transfer to Vabkent District the village house, tourists
                      can visit village on foot and to talk with village people
                      and can see village life, can see how village people can
                      make Uzbek breads (non) in tandoor (clay oven), how to
                      make Uzbek national dishes in big pot (kazan) by Uzbek
                      village women and to learn Uzbek traditional meals too by
                      explanation of our local guide Bek, Lunch in Vabkent
                      village. . Drive to Samarkand from Bukhara (320 km, 5
                      hrs). On the road visit Raboti Malik and Sardoba in Navoi.
                      On the road visit Karavansaray Ruins and Water
                      Dome-Sardoba. Arrival to Samarkand and accommodation at
                      the hotel. Dinner in Local Restaurant and overnight in the
                      hotel.
                    </p>
                  </div>
                  <div>
                    <img
                      src="https://c8.alamy.com/comp/PTGXYG/traditional-uzbek-flatbread-baking-in-the-tandyr-oven-PTGXYG.jpg"
                      alt=""
                    />
                  </div>
                </div>
                <div className={style.info}>
                  <div>
                    <h3>DAY 8</h3>
                    <h2>SAMARKAND</h2>
                    <p>
                      Breakfast in the hotel. Visit Guri Emir Mausoleum and
                      Registan Square with three madrassah, Lunch in Local
                      Restaurant. Visit Mosque Bibi Hanim, Eastern Market Siyob
                      for shopping time. Visit Russian Orthodox Church. Dinner
                      in Local Restaurant. Overnight at the hotel.
                    </p>
                  </div>
                  <div>
                    <img
                      src="https://lifejourney4two.com/wp-content/uploads/2020/01/Best-things-to-do-in-Samarkand-Uzbekistan_FI.jpg"
                      alt=""
                    />
                  </div>
                </div>
                <div className={style.info}>
                  <div>
                    <img
                      src="https://minzifatravel.com/wp-content/uploads/2022/02/c18d8824bab9cfd90a537d0a44afff8f.webp"
                      alt=""
                    />
                  </div>
                  <div>
                    <h3>DAY 9</h3>
                    <h2>SAMARKAND</h2>
                    <p>
                      Breakfast in the hotel. Visit Observatory of Ulugbek,
                      visit to Necropolis Shakhi-Zinda and ensemble of
                      mausoleums of the 11th-19th centuries, the necropolis of
                      Samarkand rulers and nobles, Visit Silk Paper Factory.
                      Lunch in Local Restaurant. Afternoon Free Time at leisure
                      to enjoy and walk in old part of Samarkand city on their
                      own. Dinner in Local Restaurant. Overnight at the hotel.
                    </p>
                  </div>
                </div>
                <div className={style.info}>
                  <div>
                    <h3>DAY 10</h3>
                    <h2>SAMARKAND-TASHKENT</h2>
                    <p>
                      Breakfast in the hotel. Morning transfer to Tashkent by
                      bus. Arrival to Tashkent and accommodation in the hotel.
                      Lunch in the Local Restaurant. Visit Underground Metro &
                      Independence Square and Walk in the city “artist-street”
                      opera building. Farewell Dinner in the hotel or in Local
                      Restaurant and Overnight in the hotel.
                    </p>
                  </div>
                  <div>
                    <img
                      src="https://www.journalofnomads.com/wp-content/uploads/2019/09/Yunus-Rajabiy-Tashkent-metro-station-1024x768.jpg"
                      alt=""
                    />
                  </div>
                </div>
                <h3>DAY 11</h3>
                <h2>Tashkent</h2>
                <p>Transfer to Tashkent airport </p>
                <h2 className={style.green}>TOUR PROGRAM PRICE INCLUDES: </h2>
                <ul className={style.items}>
                  <li>Accommodation in 4/3 star * hotels double/twin rooms;</li>
                  <li>Tours and transfers on the deluxe coach with A/C;</li>
                  <li>English Speaking Guide along the tour itinerary;</li>
                  <li>
                    Entrance fees to all visiting places, historical monuments,
                    museums etc per program;
                  </li>
                  <li>
                    Tashkent-Nukus domestic flight tickets by Uzbekistan
                    Airways;
                  </li>
                  <li>Full Board Meals (Breakfast, Lunch and Dinner);</li>
                  <li>
                    Folklore show in Madrassah of Nodir Devan Begi in Bukhara;
                  </li>
                  <li>Visit Silk Paper Factory “Meros” in Samarkand;</li>
                  <li>Visit Russian Orthodox Church in Samarkand;</li>

                  <li>Mineral water per person per a day.</li>
                </ul>
                <h2 className={style.red}>
                  TOUR PROGRAM PRICE DOES NOT INCLUDES:
                </h2>
                <ul className={style.items}>
                  <li>Strong drinks (vodka, beer, wine, etc);</li>
                  <li>Photo and Camera fees;</li>
                  <li>Taxes in the International Airport;</li>
                  <li>Tips for guide and driver;</li>
                  <li>International Flight Tickets;</li>
                  <li>Single supplement room (---- USD). </li>
                </ul>
                <Link to={"/book"}>
                  <button className={style.btn_tours}>{t("booknow")}</button>
                </Link>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className={style.accordion}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>“THE PEARL OF THE EAST TOUR UZBEKISTAN”</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <p>DURATION: 12 days/ 11 nights</p>
                <h2>
                  ROUTE:
                  TASHKENT-URGENCH-KHIVA-BUKHARA-NURATA-SAMARKAND-SHAKHRISABZ-
                  SAMARKAND-TASHKENT-FERGANA-TASHKENT
                </h2>
                <p>
                  Our journey will open to you such well-known ancient cities as
                  Samarkand, Bukhara and Khiva. You will plunge into the
                  interesting world of history. For a long time these cities
                  belonged to the empire of Tamerlan. High minarets, blue domes
                  madrassahs and mosques and the mausoleums, eastern markets,
                  interesting legends, hospitality of the population with their
                  traditions and many other things remain in your memory
                  forever.
                </p>
                <p>
                  <span>Specialization: </span>Cultural program on the Great
                  Silk Road.
                </p>
                <h2 className={style.green}>What is included:</h2>
                <ul className={style.items}>
                  <li>
                    Accommodation
                    <li>• Tashkent-3 nights</li>
                    <li>• Khiva-1 nights</li>
                    <li>• Bukhara-2 nights</li>
                    <li>• Nurata-1 nights</li>
                    <li>• Samarkand-3 nights</li>
                    <li>• Fergana-1 nights</li>
                  </li>
                  <li>
                    Vehicles with A/C throughout the whole trip
                    <li>Up to 3 person - 4*4 comfortable car.</li>
                    <li>Up to 8 person - Mini Van </li>
                    <li>Up to 16 person - Mini Bus. </li>
                    <li>More than 16 person – Bus. </li>
                  </li>
                  <li>
                    Breakfast and 2 options of meals (e.g. lunch or dinner ){" "}
                  </li>
                  <li>
                    Admission fees to historical monuments (this fee doesn’t
                    include museum and cam/video fees)
                  </li>
                  <li>
                    Tour Guide in following languages.
                    <li>
                      English, German, French, Italian, Spanish, Arabian,
                      Persian, Turkish etc…
                    </li>
                    <li>Visa support.</li>
                    <li>Air tickets within Uzbekistan.</li>
                  </li>
                </ul>
                <div className={style.info}>
                  <div>
                    <h3>DAY 1</h3>
                    <h2>Tashkent</h2>
                    <p>
                      {" "}
                      Arrival in Tashkent. Meet at the airport. Transfer to the
                      hotel. Half day sightseeing tour - visiting the old city,
                      Barak-Khan madrassah (XVI c.)- founded in the 16 century
                      by a descendent of Tamerlane who ruled Tashkent for the
                      Shaybanid dynasty, Yunus-Khan mausoleum, Kaffal-al-Shashi
                      Mazar – the grave of a local doctor, philosopher and pet
                      who lived from 904 to 979, Kukeldash madrassah (XVIII) –
                      built in the mid-16 century by the ruler‘s vizier
                      Kukaldash, after lunch visit museum of Applied Art, square
                      of Independence, Friendship peoples square, metro, square
                      of Amir Timir, the building of National Theatre of opera
                      and ballet. Dinner in the local restaurant. Overnight at
                      the hotel.
                    </p>
                  </div>
                  <div className={style.faq_img}>
                    <img
                      src="https://www.advantour.com/img/uzbekistan/tashkent/tashkent-photo-gallery/barak-khan-madrasah.jpg"
                      alt=""
                    />
                  </div>
                </div>
                <div className={style.info}>
                  <img
                    src="https://www.gazeta.uz/media/img/2021/01/NdG8nn16099417847865_l.jpg"
                    alt=""
                  />
                  <div>
                    <h3>DAY 2</h3>
                    <h2>Tashkent-Urgench</h2>
                    <p>
                      Transfer to a/p, flight to Urgench. . Meet at the a/port.
                      Transfer to Khiva (90 km). Accommodation in hotel .
                      Starting Sightseeing in Khiva . Visiting of Ichan-Kala –
                      inner cite of ancient settlement, Mohammed-Amin Khan
                      madrassah and minaret (XIX c.), Kunya Ark – Old fortress
                      (XVII c.), Pakhlavan Mahmud complex (XIV-XIX cc.), Lunch
                      in the local restaurant. Continuation of the excursion
                      from Islam Khodja madrassah & Minaret (1908), Jumma mosque
                      (X–XVIII cc.), Tash Hauli Allakuli-Khan Palace (XVIII-XIX
                      cc.). Dinner. Overnight at the hotel
                    </p>
                  </div>
                </div>
                <div className={style.info}>
                  <div>
                    <h3>DAY 3</h3>
                    <h2>Khiva-Bukhara </h2>
                    <p>
                      After breakfast drive to Bukhara crossing the river Amu
                      Darya and desert Kizil kum. Arrival in Bukhara at 15.00.
                      Transfer and accommodation in the hotel. Free time. Dinner
                      in the local restaurant.
                    </p>
                  </div>
                  <img
                    src="https://www.advantour.com/img/uzbekistan/images/khiva.jpg"
                    alt=""
                  />
                </div>
                <div className={style.info}>
                  <img
                    src="https://www.advantour.com/img/uzbekistan/bukhara/chashma-ayub1.jpg"
                    alt=""
                  />
                  <div>
                    <h3>DAY 4</h3>
                    <h2>Bukhara</h2>
                    <p>
                      Sightseeing in Bukhara: Visiting: Chashma Ayub Mazar
                      (graveyard) (XIV-XIX), Poi-Kalan complex (XII-XVI c.),
                      Ulugbek madrassah (it that was built by grandson of
                      Tamerlan – Ulugbek – distinguished mathematician and
                      astronomer). Afternoon sightseeing in Bukhara Lyabi-Khauz
                      complex (XVI-XVII c.); Visiting of Samanid’s Mausoleum
                      (IX-X c.); Nadir Divanbegi Madrassah, built in 1630. Ark -
                      ancient fortress (VI-VII c.). Sitorai Mokhi Khosa –
                      “Palace of Moon and Stars” – summer residence of the last
                      Bukhara Emir (XIX c), (Bolo Khauz mosque, c.). Complex
                      Bakhoutdin Nakshbandy (so-called Central Asian Mecca).
                      Dinner in the National family house. Overnight at the
                      hotel.
                    </p>
                  </div>
                </div>
                <div className={style.info}>
                  <div>
                    <h3>DAY 5</h3>
                    <h2>Bukhara-Nurata</h2>
                    <p>
                      After breakfast check out from hotel and transfer to
                      Nurata, sightseeing in Nurata and in Sarmysh gorge – a
                      museum under the opened sky, thee are more than 3500 rock
                      pictures (petroglyphs) of “Bronze” period. Lunch in
                      national house in Nurata Visiting mosque brothers Hasan
                      and Husein (XVI–XVII cc.), madrassah sheikh Husan Nuri,
                      mosque Namazgoh (XIV), ruins ancient fortress. Then
                      transfer to the base. Overnight in camp. Dinner. Overnight
                      in the Yurta
                    </p>
                  </div>
                  <img
                    src="https://i0.wp.com/travellingcolognian.com/wp-content/uploads/2018/07/IMG_5850_bearbeitet-3.jpg?fit=1000%2C667&ssl=1"
                    alt=""
                  />
                </div>
                <h3>DAY 6</h3>
                <h2>Nurata-Samarkand </h2>
                <p>
                  {" "}
                  Camel riding to the village. Swimming in Aydarkul lake. Lunch
                  and PM – Transfer to (300 km.). Accommodation, Free time.
                  Dinner in the local restaurant.Overnight at the hotel.
                </p>
                <div className={style.info}>
                  <img
                    src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/23/42/f5/89/caption.jpg?w=500&h=400&s=1"
                    alt=""
                  />
                  <div>
                    <h3>DAY 7</h3>
                    <h2>Samarqand</h2>
                    <p>
                      {" "}
                      Starting sightseeing in Samarkand. Visiting of Guri-Emir
                      mausoleum - of Timur and the Timurids –XV c., Rukhabad
                      necropolis (XV c.); Registan square – ensemble of majestic
                      madrassahs (XV-XVII c.) ranks first in Central Asia ,
                      Bibi-Khanum the gigantic congregational mosque (XV c.),
                      Ulugbek observatory (1420.) – the remains of an immense
                      (30 m. tall) astrolabe for observing star position,
                      Shakhi-Zinda – (XII-XVcc.). (The Living King) necropolis
                      of Samarkand rulers and nobles. Dinner. Overnight at the
                      hotel.
                    </p>
                  </div>
                </div>
                <div className={style.info}>
                  <div>
                    <h3>DAY 8</h3>
                    <h2>Samarkand-Shakhrisabz-Samarkand</h2>
                    <p>
                      After the breakfast drive to Shakhrisabz the birth place
                      of Timurlan. The tour in the birth-place of Temurlan
                      includes visits to places such as: Aksarai-Palace,
                      Ko’k-Gumbaz mosque, Khazraty –Imam ansamble and Crypt of
                      Temurlane. Ak Saray Palace a shed (1380-1404 y.) - " a
                      white palace " - even ruins of this palace make impression
                      upon visitors. In translation indicates "a white palace ",
                      as a palace blue as color of the sky. The word "Ак" is
                      used here figuratively and means "aristocratic",
                      "ennobled". Mosque the Kok-Gumbaz (1435) a significant
                      monument of architecture which serves today as a Friday
                      mosque. Architectural construction, which name is
                      translated as "a blue dome ". Complex Doruttilavat - the
                      house of reflection and contemplation. Creation of a
                      memorable place is connected with a name of Judge
                      Shamsiddin Kullol. Kullol was from family whose father was
                      engaged in pottery products and was the authorized
                      representative of Timur’s father and his teacher. After
                      the lunch drive to Samarkand through the crossing of
                      Zarafshan (1760m). Arrival in Samarkand. Free time in old
                      city Samarkand.
                    </p>
                  </div>
                  <div className={style.faq_img}>
                    <img
                      src="https://uzbek-travel.com/images/uz/Cities/Shakhrisabz/kok_gumbaz.jpg"
                      alt=""
                    />
                  </div>
                </div>
                <div className={style.info}>
                  <div>
                    <h3>DAY 9</h3>
                    <h2>Samarkand-Tashkent (330 km).</h2>
                    <p>
                      fter the breakfast check out the hotel. Transfer to
                      Tashkent .On the way to Tashkent you will be able to visit
                      the interesting places such as: “Amir Temur Gate” Big
                      “Honey Market” in Jizzakh. Then across Syr-Darya River
                      between Syr-Darya and Tashkent district. Arrival in
                      Tashkent and accommodation at the hotel. Visit Alisher
                      Navoi Opera and Theatre. Evening Ballet Perform in Navoi
                      Opera. Dinner in the Local Restaurant and overnight in the
                      hotel.
                    </p>
                  </div>
                  <img
                    src="https://uzpharmagency.uz/uploads/news/a531e334480cdb664facfaa3e0eb44af.jpg"
                    alt=""
                  />
                </div>
                <div className={style.info}>
                  <img
                    src="https://central-asia.guide/wp-content/uploads/2021/04/fergana_entral_ark-1024x683.jpg"
                    alt=""
                  />
                  <div>
                    <h3>DAY 10</h3>
                    <h2>Tashkent-Fergana</h2>
                    <p>
                      In the morning drive to Ferghana via Kokand, sightseeing
                      Kokand, visit Khudoyar-khan Palace, Djami Mosque,
                      Kamol-Kazy Madrasah, Dahman-Shakhon and Madirakhan
                      Necropolis. In the afternoon continue drive to Fergana.
                      Arrival to Ferghana, check in to the hotel. Overnight at
                      the hotel.
                    </p>
                  </div>
                </div>
                <h3>DAY 11</h3>
                <h2>Fergana-Tashkent</h2>
                <p>
                  Continue sightseeing Fergana Valley. Visit Rishtan and silk
                  making factory in Margilan. In the afternoon depart Fergana
                  Valley and drive to Tashkent. Arrival to Tashkent, check in to
                  the hotel. Free time.
                </p>
                <h3>DAY 12</h3>
                <h2>Tashkent</h2>
                <p>Transfer to the airport, departure.</p>
                <Link to={"/book"}>
                  <button className={style.btn_tours}>{t("booknow")}</button>
                </Link>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className={style.accordion}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>
                Along Ancient cities of the Silk Road – Uzbekistan{" "}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <h3>
                  Tashkent – Fergana – Tashkent – Khiva – Bukhara – Termez -
                  Shakhrisabz – Samarkand – Tashkent{" "}
                </h3>
                <p>
                  <span>Specialization: </span>Cultural program on the Great
                  Silk Road.
                </p>
                <h3 className={style.green}>What is included:</h3>
                <ul className={style.items}>
                  <li>
                    Accommodation
                    <li>Tashkent-4 nights</li>
                    <li>Fergana-1 night</li>
                    <li>Khiva-2 nights</li>
                    <li>Bukhara-4 nights</li>
                    <li>Samarkand-2 nights</li>
                    <li>Yangigazgan-1 night </li>
                  </li>
                  <li>
                    Vehicles with A/C throughout the whole trip
                    <li>Up to 3 person - 4*4 comfortable car.</li>
                    <li>Up to 8 person - Mini Van </li>
                    <li>Up to 16 person - Mini Bus. </li>
                    <li>More than 16 person – Bus</li>
                  </li>
                  <li>
                    Breakfast and 2 options of meals (e.g. lunch and dinner ){" "}
                  </li>
                  <li>
                    Admission fees to historical monuments (this fee doesn’t
                    include museum and cam/video fees)
                  </li>
                  <li>
                    Tour Guide in following languages.
                    <li>
                      English, German, French, Italian, Spanish, Arabian,
                      Persian, Turkish and etc…
                    </li>
                  </li>
                  <li>Air tickets within Uzbekistan.</li>
                </ul>
                <p>Duration: 15 days/ 14 nights.</p>
                <h3>DAY 1</h3>
                <h2>Tashkent</h2>
                <p>Arrival to Tashkent airport and transfer to the hotel.</p>
                <div className={style.info}>
                  <div>
                    <h3>DAY 2</h3>
                    <h2>Tashkent</h2>
                    <p>
                      Breakfast in the hotel at 07:00-09:00. Excursion in the
                      city. Tashkent city tour includes visits to significant
                      places such as: Chorsu Bazaar, madrasaah of Kukeldash,
                      madrassaah of Barak-Khan, madrassaah of Abduraim Sheikh
                      and the museum of Applied Arts and Tamerlane museum of
                      Tashkent. The Madrassah of Barrak Khan it has been
                      constructed in first half of 16 centuries by Kakand’s khan
                      (ruler) of the dynasty of Sheibanids. In the madrassaah
                      which is formed of two mausoleums adjoining the ensemble
                      of Hazrati Imam, since 1943 it activates as Administration
                      of Moslems (synnits) Uzbekistan It is also useful to visit
                      a mechanical lane in northern part of a market. There it
                      is possible to see national cradles. Market Chorsu which
                      is in translation from Uzbek means (“four roads”) is full
                      of sweets, eastern fruits and spices. Lunch in the Uzbek
                      Local Restaurant. The museum of “Applied Art”. There are
                      presented subjects of a national applied art: decorative
                      carpets, embroidery gold, and products from fabric,
                      ornaments for women, ceramics, porcelain, musical
                      instruments. Visit Tamerlane Museum, Independence
                      Square.Overnight in the hotel.
                    </p>
                  </div>
                  <img
                    src="https://i0.wp.com/roadsandkingdoms.com/uploads/2019/02/Tashkent-Spread.jpg?w=2400&quality=95&strip=color&ssl=1"
                    alt=""
                  />
                </div>
                <div className={style.info}>
                  <div>
                    <h3>DAY 3</h3>
                    <h2>TASHKENT-KOKAND-FERGHANA </h2>
                    <p>
                      Breakfast in the hotel at 07:00-09:00. Then Transfer to
                      Kokand- “the city of winds”. Excursion of the city.　The
                      Palace of Khudayar Khan was constructed in 1871-1873 by
                      the masters from Kokand, Kanibadam,Chust, Namangan and
                      Uratyube, which produce on guests impression by its 70m
                      high facade. 　Mausoleum of Modari Khana- quite
                      interesting sample of islamic architecture, was built in
                      1825 by Umar Khan his mother. Mosque Jomiy (1800y)- there
                      are being held Friday praying (« namaz » from
                      uzbek).　Madrassah Norbutabi (1899y)- one floored , but
                      majestic construction.In XIXc its considered one of the
                      biggest construction of Kokand. Lunch in the Local Uzbek
                      Restaurant. After the lunch drive to Fergana and
                      accommodation in the hotel. Visit Park named after
                      Al-Ferghaniy and Regional Theatre located inside the court
                      of General M. Skobelev’s residence. Overnight in the
                      hotel.
                    </p>
                  </div>
                  <img
                    src="https://cdn.britannica.com/35/145835-050-31C78F23/Palace-Kokand-Uzbekistan.jpg"
                    alt=""
                  />
                </div>
                <div className={style.info}>
                  <img
                    src="http://geografiya.uz/uploads/posts/2015-04/thumbs/1429265263_margilon.jpg"
                    alt=""
                  />
                  <div>
                    <h3>DAY 4</h3>
                    <h3>FERGHANA-MARGILAN-RISHTAN</h3>
                    <p>
                      Breakfast in the hotel at 07.00-09.00. Drive to Margilan
                      The day will be spend on excursing city Margilan (12km
                      from Ferghana). “Yodgorlik”- silk weaving factory which is
                      known for its goods made of silk. And Bazaar which is
                      famous for its eastern fruits, especially grenades and
                      apricots. Mosque Chakar and madrassaah Said Akhmad
                      Khodja(XIXc )- the main composition of this complex,
                      consist of hall and veranda with painted ceilings. Lunch
                      in the Uzbek Traditional Restaurant. After the lunch
                      transfer to Rishtan. Visit to Master Pottery House in
                      Rishtan. Then transfer to Tashkent by coach via Mountains.
                      Arrival in Tashkent. Accommodation the hotel. Overnight
                      and in the hotel.
                    </p>
                  </div>
                </div>
                <div className={style.info}>
                  <div>
                    <h3>DAY 5</h3>
                    <h2>TASHKENT- SAMARKAND</h2>
                    <p>
                      Breakfast in the hotel at 07.00-09.00. Excursion in the
                      city. Excursion on city. The Square of Registan (15-17
                      centuries) - literally " the sandy area " - the well-known
                      symbol of Uzbekistan, a symbol of city, a cultural
                      heritage of UNESCO. In the medieval East the area was a
                      place where governors disclosed orders where passed court
                      where also there was a brisk market. Gur-Emir mausoleum
                      (15 century) - in translation means the mausoleum " a tomb
                      of the master " - is a place of burial place of Tamerlan
                      and its followers. The mausoleum has been designed under
                      Timur's order for its favourite grandson Mohammed Sultana
                      who has suddenly died in 1403. Mausoleum Ruhabod - the
                      small mausoleum located near to the Gur-emir mausoleum. Ak
                      Saray mausoleum (15 century), Nadir Devon Begi madrasah
                      (16 century), Ishratkhona (14 century), Khodja Ahrar
                      complex. Overnight in the hotel
                    </p>
                  </div>
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/3/33/Tashkent_skyline_2019.jpg"
                    alt=""
                  />
                </div>
                <div className={style.info}>
                  <div>
                    <h3>DAY 6</h3>
                    <h2>SAMARKAND</h2>
                    <p>
                      Breakfast in the hotel 07.00 till 08.00 Observatory of
                      Ulugbek (1428-1429) which is in northwest of city, has
                      been constructed by the governor and scientists Ulugbek.
                      By means of chronicles from 17 century the Russian
                      archeologist Vyatkin managed to find an observatory. The
                      main tool of an observatory was sextant presumably laid
                      out from a brick with radius 40,4 m in the end of a line
                      of a meridian. Lunch in the Uzbek Traditional Restaurant.
                      Complex Shakhi Zinda (14-15) consists of the several
                      mausoleums which were consistently attached to each other
                      within centuries. The decor is diverse and fantastic, the
                      leitmotif which can admire already on the main portal, is
                      presented by colors and stars - a so-called Samarkand
                      ornament. Shakhi Zinda in translation literally is meant
                      with "a living king". As the place of pilgrims, which
                      visiting else in the beginning 20 century was forbidden to
                      other believers, widely known far outside Samarkand.
                      Mosque Bibi Hanim (15 century) - was the greatest
                      architectural monument some kind of in the Islamic world.
                      Timur ordered to construct this mosque after the
                      successful campaign to India to show the boundless
                      technical and financial opportunities. It wished to
                      construct a greater Friday mosque which should be the
                      terrestrial sample of paradise. Timur itself observed of
                      construction of a mosque.Visiting of east market Siyob.
                      Visit Afrasiyab Museum and Ruins, Khoja Daniyar Mausoelum,
                      Khazrati Khizr Mausoleum. Overnight in the hotel.
                    </p>
                  </div>
                  <img
                    src="https://wetraveltheworld.de/wp-content/uploads/2020/11/samarkand-sehenswuerdigkeiten-tipps.jpg"
                    alt=""
                  />
                </div>
                <div className={style.info}>
                  <img
                    src="https://minzifatravel.com/wp-content/uploads/2022/05/10_UNESCO-sites-to-Visit-Before-Its-Too-Late_Historic-Centre-of-Shakhrisyabz_shutterstock_471918674.jpg"
                    alt=""
                  />
                  <div>
                    <h3>DAY 7</h3>
                    <h2>SAMARKAND-SHAKHIRISABZ-BUKHARA </h2>
                    <p>
                      Breakfast in the hotel from 07.00 till 08.00 . Transfer to
                      Shahrisabz - native land of Tamrelane " The green city "
                      as the name is translated, was known in due time as Kesh
                      or Kviks. Tamerlane was born near to city and has
                      proclaimed its place of years palace Ак of a shed.
                      Excursion in the city. Palace the Ak of a shed (1379-1404
                      c.) - " a white palace " - even ruins of this palace make
                      impression upon visitors. Translation slightly misleads "
                      a white palace ", as a palace небесно blue color. The word
                      "Ак" is used here figuratively and means "aristocratic",
                      "ennobled". Mosque the Cook-Gumbaz (1435) a significant
                      monument of architecture which serves today as a Friday
                      mosque. Product of architecture, which name is translated
                      as " a blue dome " Complex Doruttilavat - the house of
                      reflection and contemplation. Creation of a memorable
                      place is connected with a name of judge Shamsidini
                      Kuljava. Kulyal occured from family горшечника and was the
                      authorized representative of father Timur and its teacher.
                      From the south mausoleum Gumbozi Seydoni, presumably has
                      been constructed by followers of Ulugbek. This small
                      building bewitches clearness of proportions and well
                      executed groove with a flower ornament. Lunch in the Uzbek
                      Traditional Restaurant. After the lunch transfer to
                      Bukhara city, accommodation in the hotel and overnight in
                      the hotel.
                    </p>
                  </div>
                </div>
                <h3>DAY 8</h3>
                <h2>BUKHARA-NURATA</h2>
                <p>
                  Breakfast in the hotel at 07.00-08.00. Transfer to Nurata. On
                  the way visit petroglifs from Bronze Age. Nurata is a small
                  town (25.000 inhabitants) which history leaves far in 1
                  millenium up to BC. Today the city in which the mosque dated
                  10 in was kept, is the well-known place of pilgrims. Excursion
                  on city: “sacred fishes” in pool near to a mosque which is
                  supplied with “sacred water" from a source is noteworthy.
                  Lunch in Nurata. Transfer to Yangigazgan village, crossing the
                  desert Kizilkum. Arrival. Accommodation in yurts. Ride on
                  camels. Dinner at a fire and overnight in yurtas.
                </p>
                <div className={style.info}>
                  <div>
                    <h3>DAY 9</h3>
                    <h2>YANGIGAZGAN-LAKE AYDARKUL LAKE-BUKHARA </h2>
                    <p>
                      Breakfast in the hotel from 07.00 till 08.00 . Breakfast
                      in Kazakh yurt. A trip to the Lake Aydarkul. Picnic on the
                      lake shore. At good weather it is possible to bathe and to
                      lie down in the sunshines. Drive back to Bukhara, dinner
                      and overnight in the hotel.
                    </p>
                  </div>
                  <img
                    src="https://media-cdn.tripadvisor.com/media/photo-s/11/4f/78/29/yurt-camp-yangigazgan.jpg"
                    alt=""
                  />
                </div>
                <div className={style.info}>
                  <div>
                    <h3>DAY 10</h3>
                    <h2>BUKHARA</h2>
                    <p>
                      Breakfast in the hotel at 07.00-09.00. After the breakfast
                      a full day tour of Bukhara. Excursion of Bukhara begins
                      with visits to significant places such as: Lyabi Khauz,
                      Madrassaah of Nodir Devonbegi, Fortress Ark , Madrassah of
                      Ulugbek, Madrassah of Abdulazizkhan, Mosque Magoki Ataru,
                      Mausoleum Chashma Ayub, The mosque Bolo House and etc..
                      Madrassah Nadir Devanbegy (1622) it has been initially
                      constructed as a caravan-shed, and then it is transformed
                      in to madrassah. The building in the size 70×70 has not
                      initial decor for the Islamic world: on the main portal
                      alive essences - flying herons are represented alongside
                      with the accepted vegetative motives also. Madrassah of
                      Kukeldash (1568-1569.) - The oldest and simultaneously the
                      greatest part of complex Lyaby Hauz. It is monumental and
                      is very richly decorated, as a characteristic building of
                      the period Abdulla Khan (1557-1598). In madrassah veins
                      the writer and poet Sadriddin Aini (1878-1954) also
                      learned. Madrassah of Ulugbek (1417) - unique construction
                      in Bukhara, named in memory of the great astronomer
                      Ulugbek. Above the entrée of the madrassah master Ulugbek
                      ordered to cut words: «Aspiration to knowledge - a duty of
                      each Moslem and Moslem women". Madrassah has arisen during
                      prospering period of the Central Asian architecture
                      (1417-1418) and it is considered the ideal sample
                      madrassah in Central Asia. Madrassah of Abdulazizkhan
                      (1652) surpasses madrassah of Ulugbek in scales and
                      riches. Abdulazizkhan wished to surpass all predecessors
                      in decorative furnish and the architectural attitude. The
                      projection reminds opposite of the madrassah of Ulugbek.
                      In city centre where was a market on which twice a year at
                      the presence of the governor of Bukhara were exposed for
                      sale of the image of deities earlier, there is today one
                      of the most ancient kept mosques of the Central Asia -
                      Mosque Magoki Ataru It is constructed on the same place
                      where during pre-Islamic time was Zoroastrian a temple.The
                      symbol of Bukhara considers Minaret Kalian costing in city
                      centre which height makes 46, 6 m. – architectural
                      construction, which before Directly near to Minaret Kalian
                      the great mosque – mosque Kalian which is connected with a
                      minaret the small bridge towers. It is the oldest and
                      second-largest mosque of the Central Asia after mosque
                      Bibi Hanum in Samarkand. Fortress (Citadel) Ark (1-20 ) is
                      a symbol of greatness and authority towers above the area.
                      Construction of a citadel is dated approximately in the
                      beginning of 1 millennium BC. The mosque Bolo House (1712)
                      - a complex of special harmony and beauty - served as the
                      main Friday mosque. The ensemble includes building of
                      Friday mosque (1712), minaret (1917) and reservoir. In the
                      mosque gather Moslems for fivefold namaz today again.
                      Mausoleum Chashma Ayub (1380-1384/85 y.) - the mausoleum
                      with set of domes. The most ancient part of the mausoleum
                      should have been built at the deputy of Karakhanids.
                      Arslan Khan in 12 century but most likely it was Timur who
                      in 14 century has planned to construct a tomb and in 1380
                      realized the plan owing to the Khorezm architects.
                      Mausoleum of Ismail Samani (X century) has been erected
                      during board of Ismail Samani (892-907 y.y) and became
                      family tomb of Samanids. Despite of the modest sizes of
                      the basis (10×10) and height of 14 m this monument serves
                      as the proof of high art skill. Dinner at the Nadir
                      Devonbegi madrassaahs and national folklore show.
                      Overnight in the hotel.
                    </p>
                  </div>
                  <div className={style.faq_img}>
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgZbkfSsaBa6v91Spf_z3npZXnxIuhALz8wA&usqp=CAU"
                      alt=""
                    />
                    <img
                      src="https://cdn.britannica.com/02/137502-050-4652990C/Kalyan-Mosque-Bukhara-Uzbekistan.jpg"
                      alt=""
                    />
                  </div>
                </div>
                <div className={style.info}>
                  <div>
                    <h3>DAY 11</h3>
                    <h2>BUKHARA</h2>
                    <p>
                      Breakfast in the hotel at 07.00-09.00. Excursion around
                      the suburbs of Bukhara : Sitorai Mokhi Khosa (end of XIX
                      c-begining of XX c ) : The residence of the last ruled
                      emir (ruler) of Bukhara. It is the only remained sample of
                      bukharan emir country palaces. Sitora and Mokhi-Khosa
                      Palace was quartered on two territories. Complex of
                      Bahouddin Naqshbandi(XVI c)-religious complex,one of
                      thesacrede places of Moslems. Being very esteemed in
                      Bukhara, Sheikh Bakhaaddin Nakshbandi (died in 1389) was
                      the tutor of Timur, and a tailor in his early life. He is
                      highly respected in Bukhara as a Saint and protector of
                      handcraftsmen. Mausoleum of Chor Bakr (XVI-XXc.c.) Then,
                      you visit Chor Bakr, a complex of tombstones, one of which
                      belongs to the famous founder of Djuybar Hajjis, Abu Bakr
                      Saad, the grandson of the outstanding Bukhara Sufi Islam
                      Djuybari (16 century AD). After visiting famous places of
                      Bukhara, come back to Bukhara city. Free time for enjoying
                      the old city. Dinner in the local restaurant and overnight
                      in the hotel.
                    </p>
                  </div>
                  <img
                    src="https://uzbek-travel.com/images/uz/Facts/Bukhara/Part_9/news.jpg"
                    alt=""
                  />
                </div>
                <div className={style.info}>
                  <img
                    src="http://uzdaily.uz/storage/article-ru/August2020/ASK_7331.jpg"
                    alt=""
                  />
                  <div>
                    <h3>DAY 12</h3>
                    <h2>BUKHARA-KHIVA </h2>
                    <p>
                      Breakfast in the hotel at 07.00-09.00. After the breakfast
                      transfer to Khiva by car, crossing the river Amu Darya and
                      desert Kizil kum. In Uzbekistan there are two great
                      rivers: the boundary river Amu Darya (in antiquity caled
                      Oxus) and northern Syr-Darya (in antiquity calledYaksard).
                      The length of Syr-Darya makes 2213km, and together with
                      its inflow to Naryn 3019 km. Amu Darya originates in Hindu
                      Kush, its length makes 2540 km. Amu Darya takes start in
                      the east of Pamir where the river Pandj flows through
                      gorges of Hindu Kush, incorporates with Vahsh, and then
                      flows to Aral Sea as Amu Darya. Desert Karakum occupies
                      the greater deserted areas of the Central Asia with its
                      extent of 350.000 km and desert Kyzyl Kum the area of
                      which occupies 300.000 km. In the south only the small
                      part of desert Karakum, which means "black sand", belongs
                      to Uzbekistan. Sands of Karakum, however, are not black,
                      more likely "penalty" means as "dangerous". In the north
                      situated the desert Kyzyl Kum (" red sand ") which is
                      stretched between the Amu Darya and Syr-Darya rivers. The
                      desert at the certain hours during the day seems really
                      reddish. Both deserts are not cleanly sandy deserts, they
                      are covered by plants. As in the Central Asian deserts in
                      one year drops up to 200 mm of deposits, mainly in the
                      spring, both deserts not waterless. It can be felt
                      especially in March when the carpet of grasses,
                      consisting, first of all of a sedge, tamarisk, a saxaul,
                      start to blossom. In deserts lives basically herbivore
                      kowtowing animals: lizards, monitor lizards of the snake.
                      If it’s goes lucky, it is possible to see wild camels and
                      susliks. accommodation in the hotel and overnight in the
                      hotel.
                    </p>
                  </div>
                </div>
                <div className={style.info}>
                  <div>
                    <h3>DAY 13</h3>
                    <h2>KHIVA </h2>
                    <p>
                      Before Khiva was a place where stopped travelers testing
                      thirst. Minarets of city lured in caravans which
                      represented a significant source of the incomes. Khiva
                      concede smallest of magnificent cities of a silk road,
                      however city is not minor in competition with such
                      medieval cities as Samarkand and Bukhara. Here you will
                      feel transferred into the past: close lanes, low apartment
                      houses and set of mosques, mausoleums and madrasaahs. Tour
                      of Khiva includes visits to the significant place such as:
                      Mosque Juma, Ichan-Kala ,Mausoleum of Pahlavan Makhmud,
                      the Tosh-Khovli Palace, the madrasaah of Shergozi-khan,
                      the madrasaah of Alloquli-Khan,Minaret of Kalta-
                      Minor,Uch-Avlya mausoleum and other highlights of Ichan
                      Kala. Mausoleum of Pahlavan Mahmud (19 century) - the most
                      sacred and most beautiful mausoleum of Khiva. Pahlavan
                      Mahmud (1247-1325) was the doctor and the poet; it is
                      esteemed today as sacred. Above its tomb all over again
                      was erected the dome mausoleum which however has
                      collapsed. In 1913 the new complex which includes a tomb
                      has been constructed. If to pass through the court yard,
                      you will be lead directly to the mausoleum. At the left is
                      Gurhane with tomb of Pahlavan Mahmud in front of which
                      believers usually pray. Lunch in the Local Restaurant.
                      ICHAN KALA. The minaret of Islam Hodja is constructed in
                      the beginning of 20th century and it is considered one of
                      the late constructions of Khiva. It is separately costing
                      tower narrowed to the top. Decorated by a belt from a blue
                      and green tile, it is not similar to the minarets of the
                      old epoch of Timurids and owing to the height of 57 m can
                      be seen from any point of city. Museum Tosh Hovli - " a
                      stone court yard " - consists of several constructions and
                      a courtyard which are surrounded by a high wall. The
                      throne hall of khan and various rooms for visitors are
                      located directly by a number of court yards.
                    </p>
                  </div>
                  <img
                    src="https://www.advantour.com/img/uzbekistan/images/khiva.jpg"
                    alt=""
                  />
                </div>
                <div className={style.info}>
                  <div>
                    <h3>DAY 14</h3>
                    <h2>KHIVA-AYAZKALA-URGENCH-TASHKENT </h2>
                    <p>
                      Breakfast in the hotel at 07.00-08.00. At the morning
                      after the breakfast drive to Tuprokqala, Qirqizqala,
                      Ayazqala. Excursion on the Qalas. After lunch Arrival in
                      Urgench airport and flight to Tashkent by domestic flight.
                      Arrival to Tashkent, transfer ot the hotel. Dinner in
                      Tashkent local restaurant Accommodation in hotel.
                      Overnight in the hotel.
                    </p>
                  </div>
                  <img
                    src="https://www.advantour.com/img/uzbekistan/karakalpakstan/ayaz-kala3.jpg"
                    alt=""
                  />
                </div>
                <h3>DAY 15</h3>
                <h2>Tashkent</h2>
                <p>Transfer to Tashkent airport</p>
                <Link to={"/book"}>
                  <button className={style.btn_tours}>{t("booknow")}</button>
                </Link>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className={style.accordion}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>
                “DISCOVER THE GREAT SILK ROAD IN UZBEKISTAN”
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <h1>“DISCOVER THE GREAT SILK ROAD IN UZBEKISTAN”</h1>
                <p>
                  It seems that the boundless desert generates mad dreams of
                  builders of empire: Alexander, Gengizkhan, Tamerlan. Azure
                  domes, gold, spices, silk … These words revive in memory such
                  treasures of the Central Asia, as Samarkand, Bukhara, Khiva.
                  But among mountains and deserts of Asia, the simple life of
                  shepherds of Kyzylkum, appears at eyes of tourists. You make
                  excursion on desert within 2 days, will lead night in yurts in
                  mountains and can learn customs and traditions of Uzbeks and
                  Kazakhs.
                </p>
                <p>DURATION: 18 DAYS/17 NIGHTS </p>
                <p>
                  ROUTE:
                  TASHKENT-KOKAND-FERGANA-MARGILAN-RISHTAN-TASHKENT-URGENCH-KHIVA-BUKHARA-NURATA-YANGIGAZGAN-LAKE
                  AYDARKUL-SAMARKAND-SHAKHRISABZ-TERMEZ-BAYSUN-TERMEZ-
                  SAMARKAND- TASHKENT-CHARVAK-TASHKENT{" "}
                </p>
                <h2 className={style.green}>What is included:</h2>
                <ul className={style.items}>
                  <li>
                    Accommodation (Leisure package-small hotel, VIP package
                    –luxurious hotel)
                    <li>Tashkent-3 nights</li>
                    <li>Khiva-2 nights</li>
                    <li>Bukhara-3 nights</li>
                    <li>Yangigazgan-2 nights </li>
                    <li>Samarkand-3 nights</li>
                    <li>Termiz-2 nights</li>
                    <li>Shahrisabz-1 night</li>
                    <li>Charvak-1 night</li>
                  </li>
                  <li>
                    Vehicles with A/C throughout the whole trip
                    <li>Up to 3 person - 4*4 comfortable car.</li>
                    <li>Up to 8 person - Mini Van </li>
                    <li>Up to 16 person - Mini Bus</li>
                    <li>More than 16 person – Bus. </li>
                  </li>
                  <li>
                    Breakfast and 2 options of meals (e.g. lunch or dinner ){" "}
                  </li>
                  <li>
                    Admission fees to historical monuments (this fee doesn’t
                    include museum and cam/video fees)
                  </li>
                  <li>
                    Tour Guide in following languages.
                    <li>
                      • English, German, French, Italian, Spanish, Arabian,
                      Persian, Turkish and etc…
                    </li>
                  </li>
                  <li>Air tickets within Uzbekistan.</li>
                </ul>
                <h3>DAY 1</h3>
                <h2>TASHKENT </h2>
                <p>
                  {" "}
                  Arrival to Tashkent From the airport and transfer to the
                  hotel.{" "}
                </p>
                <h3>DAY 2</h3>
                <h2>Tashkent</h2>
                <p>
                  Breakfast in the hotel at 07:00-09:00. Excursion in the city.
                  Tashkent city tour includes visits to significant places such
                  as: Chorsu Bazaar, madrasaah of Kukeldash, madrassaah of
                  Barak-Khan, madrassaah of Abduraim Sheikh and the museum of
                  Applied Arts and Tamerlane museum of Tashkent. The Madrassah
                  of Barrak Khan it has been constructed in first half of 16
                  centuries by Kakand’s khan (ruler) of the dynasty of
                  Sheibanids. In the madrassaah which is formed of two
                  mausoleums adjoining the ensemble of Hazrati Imam, since 1943
                  it activates as Administration of Moslems (synnits) Uzbekistan
                  It is also useful to visit a mechanical lane in northern part
                  of a market. There it is possible to see national cradles.
                  Market Chorsu which is in translation from Uzbek means (“four
                  roads”) is full of sweets, eastern fruits and spices. Lunch in
                  the Uzbek Local Restaurant. The museum of “Applied Art”. There
                  are presented subjects of a national applied art: decorative
                  carpets, embroidery gold, and products from fabric, ornaments
                  for women, ceramics, porcelain, musical instruments. Visit
                  Tamerlane Museum, Independence Square.Overnight in the hotel.
                </p>
                <h3>DAY 3</h3>
                <h2>TASHKENT-KOKAND-FERGHANA</h2>
                <p>
                  Breakfast in the hotel at 07:00-09:00. Then Transfer to
                  Kokand- “the city of winds”. Excursion of the city.　The
                  Palace of Khudayar Khan was constructed in 1871-1873 by the
                  masters from Kokand, Kanibadam,Chust, Namangan and Uratyube,
                  which produce on guests impression by its 70m high facade.
                  　Mausoleum of Modari Khana- quite interesting sample of
                  islamic architecture, was built in 1825 by Umar Khan his
                  mother. Mosque Jomiy (1800y)- there are being held Friday
                  praying (« namaz » from uzbek).　Madrassah Norbutabi (1899y)-
                  one floored , but majestic construction.In XIXc its considered
                  one of the biggest construction of Kokand. Lunch in the Local
                  Uzbek Restaurant. After the lunch drive to Fergana and
                  accommodation in the hotel. Visit Park named after
                  Al-Ferghaniy and Regional Theatre located inside the court of
                  General M. Skobelev’s residence. Overnight in the hotel.
                </p>
                <h3>DAY 4</h3>
                <h2>FERGHANA-MARGILAN-RISHTAN-TASHKENT</h2>
                <p>
                  Breakfast in the hotel at 07.00-09.00. Drive to Margilan The
                  day will be spend on excursing city Margilan (12km from
                  Ferghana). “Yodgorlik”- silk weaving factory which is known
                  for its goods made of silk. And Bazaar which is famous for its
                  eastern fruits, especially grenades and apricots. Mosque
                  Chakar and madrassaah Said Akhmad Khodja(XIXc )- the main
                  composition of this complex,consist of hall and veranda with
                  painted ceilings. Lunch in the Uzbek Traditional Restaurant.
                  After the lunch transfer to Rishtan. Visit to Master Pottery
                  House in Rishtan. Then transfer to Tashkent by coach via
                  Mountains. Arrival in Tashkent and accommodation in the hotel.
                  Overnight and in the hotel.
                </p>
                <h3>DAY 5</h3>
                <h2>TASHKENT-URGENCH</h2>
                <p>
                  {" "}
                  Breakfast in the hotel at 05.30-06.30 . Transfer to the
                  airport and flight to Urgench by HY-1051 at 07:00. Arrival at
                  08:40 and Transfer to to Khiva by coach. Transfer to the
                  hotel. Excursion in the city. Tour of Khiva includes visits to
                  the significant place such as: Mosque Juma, Ichan-Kala
                  ,Mausoleum of Pahlavan Makhmud, the Tosh-Khovli Palace, the
                  madrasaah of Shergozi-khan, the madrasaah of
                  Alloquli-Khan,Minaret of Kalta- Minor,Uch-Avlya mausoleum and
                  other highlights of Ichan Kala. Mausoleum of Pahlavan Mahmud
                  (19 century) - the most sacred and most beautiful mausoleum of
                  Khiva. Pahlavan Mahmud (1247-1325) was the doctor and the
                  poet; it is esteemed today as sacred. Above its tomb all over
                  again was erected the dome mausoleum which however has
                  collapsed. In 1913 the new complex which includes a tomb has
                  been constructed. If to pass through the court yard, you will
                  be lead directly to the mausoleum. At the left is Gurhane with
                  tomb of Pahlavan Mahmud in front of which believers usually
                  pray. Lunch in the Local Restaurant. ICHAN KALA. The minaret
                  of Islam Hodja is constructed in the beginning of 20th century
                  and it is considered one of the late constructions of Khiva.
                  It is separately costing tower narrowed to the top. Decorated
                  by a belt from a blue and green tile, it is not similar to the
                  minarets of the old epoch of Timurids and owing to the height
                  of 57 m can be seen from any point of city. Museum Tosh Hovli
                  - " a stone court yard " - consists of several constructions
                  and a courtyard which are surrounded by a high wall. The
                  throne hall of khan and various rooms for visitors are located
                  directly by a number of court yards. Overnight in the hotel.
                </p>
                <h3>DAY 6</h3>
                <h2>KHIVA-BUKHARA (480 KM)</h2>
                <p>
                  Breakfast in hotel at 07.00 till 09.00. Drive from Khiva to
                  Bukhara (450km 6hrs routs). Transfer by car, crossing the
                  river Amu Darya and desert Kizil kum. In Uzbekistan there are
                  two greater rivers: the boundary river Amu Darya (in antiquity
                  Oxus) and northern Syr-Darya (in antiquity Yaksard). Lunch on
                  the road. Arrival in Khiva at 17.00. Transfer and
                  accommodation in hotel. Free time. Overnight in the hotel.
                </p>
                <h3>DAY 7</h3>
                <h2>BUKHARA</h2>
                <p>
                  Breakfast in the hotel at 07.00-09.00. After the breakfast a
                  full day tour of Bukhara. Excursion of Bukhara begins with
                  visits to significant places such as: Lyabi Khauz, Madrassaah
                  of Nodir Devonbegi, Fortress Ark , Madrassah of Ulugbek,
                  Madrassah of Abdulazizkhan, Mosque Magoki Ataru, Mausoleum
                  Chashma Ayub, The mosque Bolo House and etc.. Madrassah Nadir
                  Devanbegy (1622) it has been initially constructed as a
                  caravan-shed, and then it is transformed in to madrassah. The
                  building in the size 70×70 has not initial decor for the
                  Islamic world: on the main portal alive essences - flying
                  herons are represented alongside with the accepted vegetative
                  motives also. Madrassah of Kukeldash (1568-1569.) - The oldest
                  and simultaneously the greatest part of complex Lyaby Hauz. It
                  is monumental and is very richly decorated, as a
                  characteristic building of the period Abdulla Khan
                  (1557-1598). In madrassah veins the writer and poet Sadriddin
                  Aini (1878-1954) also learned. Madrassah of Ulugbek (1417) -
                  unique construction in Bukhara, named in memory of the great
                  astronomer Ulugbek. Above the entrée of the madrassah master
                  Ulugbek ordered to cut words: «Aspiration to knowledge - a
                  duty of each Moslem and Moslem women". Madrassah has arisen
                  during prospering period of the Central Asian architecture
                  (1417-1418) and it is considered the ideal sample madrassah in
                  Central Asia. Madrassah of Abdulazizkhan (1652) surpasses
                  madrassah of Ulugbek in scales and riches. Abdulazizkhan
                  wished to surpass all predecessors in decorative furnish and
                  the architectural attitude. The projection reminds opposite of
                  the madrassah of Ulugbek. In city centre where was a market on
                  which twice a year at the presence of the governor of Bukhara
                  were exposed for sale of the image of deities earlier, there
                  is today one of the most ancient kept mosques of the Central
                  Asia - Mosque Magoki Ataru It is constructed on the same place
                  where during pre-Islamic time was Zoroastrian a temple.The
                  symbol of Bukhara considers Minaret Kalian costing in city
                  centre which height makes 46, 6 m. – architectural
                  construction, which before Directly near to Minaret Kalian the
                  great mosque – mosque Kalian which is connected with a minaret
                  the small bridge towers. It is the oldest and second-largest
                  mosque of the Central Asia after mosque Bibi Hanum in
                  Samarkand. Fortress (Citadel) Ark (1-20 ) is a symbol of
                  greatness and authority towers above the area. Construction of
                  a citadel is dated approximately in the beginning of 1
                  millennium BC. The mosque Bolo House (1712) - a complex of
                  special harmony and beauty - served as the main Friday mosque.
                  The ensemble includes building of Friday mosque (1712),
                  minaret (1917) and reservoir. In the mosque gather Moslems for
                  fivefold namaz today again. Mausoleum Chashma Ayub
                  (1380-1384/85 y.) - the mausoleum with set of domes. The most
                  ancient part of the mausoleum should have been built at the
                  deputy of Karakhanids. Arslan Khan in 12 century but most
                  likely it was Timur who in 14 century has planned to construct
                  a tomb and in 1380 realized the plan owing to the Khorezm
                  architects. Mausoleum of Ismail Samani (X century) has been
                  erected during board of Ismail Samani (892-907 y.y) and became
                  family tomb of Samanids. Despite of the modest sizes of the
                  basis (10×10) and height of 14 m this monument serves as the
                  proof of high art skill. Dinner at the Nadir Devonbegi
                  madrassaahs and national folklore show. Overnight in the
                  hotel.
                </p>
                <h3>DAY 8</h3>
                <h2>BUKHARA</h2>
                <p>
                  Breakfast in the hotel at 07.00-08.00. Excursion around the
                  suburbs of Bukhara : Sitorai Mokhi Khosa (end of XIX
                  c-begining of XX c ) : The residence of the last ruled emir
                  (ruler) of Bukhara. It is the only remained sample of bukharan
                  emir country palaces. Sitora and Mokhi-Khosa Palace was
                  quartered on two territories. Complex of Bahouddin
                  Naqshbandi(XVI c)-religious complex,one of thesacrede places
                  of Moslems. Being very esteemed in Bukhara, Sheikh Bakhaaddin
                  Nakshbandi (died in 1389) was the tutor of Timur, and a tailor
                  in his early life. He is highly respected in Bukhara as a
                  Saint and protector of handcraftsmen. Mausoleum of Chor Bakr
                  (XVI-XXc.c.) Then, you visit Chor Bakr, a complex of
                  tombstones, one of which belongs to the famous founder of
                  Djuybar Hajjis, Abu Bakr Saad, the grandson of the outstanding
                  Bukhara Sufi Islam Djuybari (16 century AD). After visiting
                  famous places of Bukhara, come back to Bukhara city. Free time
                  for enjoying the old city. Dinner in the local restaurant and
                  overnight in the hotel.
                </p>
                <h3>DAY 9</h3>
                <h2>BUKHARA-NURATA-YANGIGAZGAN (250 KM)</h2>
                <p>
                  {" "}
                  Breakfast in the hotel at 07.00-08.00. Transfer to Nurata. On
                  the way visit Sarmish Soy Mountains with Alexander the Great
                  fortress. Nurata is a small town (25.000 inhabitants) which
                  history leaves far in 1 millenium up to BC. Today the city in
                  which the mosque dated 10 in was kept, is the well-known place
                  of pilgrims. Excursion on city: “sacred fishes” in pool near
                  to a mosque which is supplied with “sacred water" from a
                  source is noteworthy. Lunch in Nurata. Transfer to Yangigazgan
                  village, crossing the desert Kizilkum. Arrival. Accommodation
                  in yurts. Ride on camels. Dinner at a fire and overnight in
                  yurtas.
                </p>
                <h3>DAY 10</h3>
                <h2>YANGIGAZGAN-LAKE AYDARKUL LAKE-YANGIGAZGAN </h2>
                <p>
                  Breakfast in Kazakh yurt. A trip to the Lake Aydarkul. Picnic
                  on the lake shore. At good weather it is possible to bathe and
                  to lie down in the sunshines. Drive back to Yangigazgan,
                  dinner and overnight in yurtas.
                </p>
                <h3>DAY 11</h3>
                <h2>YANGIGAZGAN-SAMARKAND </h2>
                <p>
                  Breakfast in the hotel 07.00 till 08.00. Transfer to Samarkand
                  by car. Arrival and accommodation in the hotel. Excursion on
                  city. The Square of Registan (15-17 centuries) - literally "
                  the sandy area " - the well-known symbol of Uzbekistan, a
                  symbol of city, a cultural heritage of UNESCO. In the medieval
                  East the area was a place where governors disclosed orders
                  where passed court where also there was a brisk market.
                  Gur-Emir mausoleum (15 century) - in translation means the
                  mausoleum " a tomb of the master " - is a place of burial
                  place of Tamerlan and its followers. The mausoleum has been
                  designed under Timur's order for its favourite grandson
                  Mohammed Sultana who has suddenly died in 1403. Mausoleum
                  Ruhabod - the small mausoleum located near to the Gur-emir
                  mausoleum. Overnight in the hotel.
                </p>
                <h3>DAY 12</h3>
                <h2>SAMARKAND </h2>
                <p>
                  Breakfast in the hotel 07.00 till 08.00. Observatory of
                  Ulugbek (1428-1429) which is in northwest of city, has been
                  constructed by the governor and scientists Ulugbek. By means
                  of chronicles from 17 century the Russian archeologist Vyatkin
                  managed to find an observatory. The main tool of an
                  observatory was sextant presumably laid out from a brick with
                  radius 40,4 m in the end of a line of a meridian. Complex
                  Shakhi Zinda (14-15) consists of the several mausoleums which
                  were consistently attached to each other within centuries. The
                  decor is diverse and fantastic, the leitmotif which can admire
                  already on the main portal, is presented by colors and stars -
                  a so-called Samarkand ornament. Shakhi Zinda in translation
                  literally is meant with "a living king". As the place of
                  pilgrims, which visiting else in the beginning 20 century was
                  forbidden to other believers, widely known far outside
                  Samarkand. Mosque Bibi Hanim (15 century) - was the greatest
                  architectural monument some kind of in the Islamic world.
                  Timur ordered to construct this mosque after the successful
                  campaign to India to show the boundless technical and
                  financial opportunities. It wished to construct a greater
                  Friday mosque which should be the terrestrial sample of
                  paradise. Timur itself observed of construction of a
                  mosque.Visiting of east market Siyob. Lunch in the Uzbek
                  Traditional Restaurant. Visit Afrasiyab Museum and Ruins,
                  Khoja Daniyar Mausoelum, Khazrati Khizr Mausoleum. Overnight
                  in the hotel.
                </p>
                <h3>DAY 13</h3>
                <h2>SAMARKAND- TERMEZ </h2>
                <p>
                  Breakfast in the hotel from 07.00 till 08.00 . After the
                  breakfast transfer to Termez city in the south of Uzbekistan,
                  lunch on the way accommodation in the hotel and overnight in
                  the hotel.
                </p>
                <h3>DAY 14</h3>
                <h2>TERMEZ</h2>
                <p>
                  Breakfast in hotel at 07.00 till 08.00. Tour of Termez and
                  around: We see archeological museum, Fayaztepa, Buddist Stupa
                  Zurmala, Mausoleum of Hakim at Termezi and Sultan Saodat,
                  Nunnery Kirk Kiz. Lunch in the Local restaurant.. Overnight in
                  the hotel.
                </p>
                <h3>DAY 15</h3>
                <h2>TERMEZ-SHAHRISABZ </h2>
                <p>
                  Breakfast in hotel at 07.00 till 08.00. Lunch on the way Drive
                  to Shahrisabz, overnight in the hotel. Transfer to Shahrisabz
                  - native land of Tamrelane " The green city " as the name is
                  translated, was known in due time as Kesh or Kviks. Tamerlane
                  was born near to city and has proclaimed its place of years
                  palace Ак of a shed. Excursion in the city. Palace the Ak of a
                  shed (1379-1404 c.) - " a white palace " - even ruins of this
                  palace make impression upon visitors. Translation slightly
                  misleads " a white palace ", as a palace небесно blue color.
                  The word "Ак" is used here figuratively and means
                  "aristocratic", "ennobled". Mosque the Cook-Gumbaz (1435) a
                  significant monument of architecture which serves today as a
                  Friday mosque. Product of architecture, which name is
                  translated as " a blue dome " Complex Doruttilavat - the house
                  of reflection and contemplation. Creation of a memorable place
                  is connected with a name of judge Shamsidini Kuljava. Kulyal
                  occured from family горшечника and was the authorized
                  representative of father Timur and its teacher. From the south
                  mausoleum Gumbozi Seydoni, presumably has been constructed by
                  followers of Ulugbek. This small building bewitches clearness
                  of proportions and well executed groove with a flower
                  ornament. Overnight in the hotel.
                </p>
                <h3>DAY 16</h3>
                <h2>SHAHRISABZ-SAMARKAND-URGUT-SAMARKAND </h2>
                <p>
                  Breakfast in the hotel 07.00 till 08.00. Transfer to Samarkand
                  by car. Arrival and accommodation in the hotel. Lunch in the
                  Uzbek Traditional Restaurant. Transfer to Urgut town near
                  Samarkand. Urgut is a small town, 40 min drive south of
                  Samarkand. Urgut is really a town of craftsmen. There live
                  hereditary blacksmiths, potters and embroiderers. After the
                  lunch transfer to Samarkand. Free time for shopping and
                  walking in Samarkand bazaars and streets. Accommodation in
                  hotel. Overnight in the hotel.
                </p>
                <h3>DAY 17</h3>
                <h2>SAMARKAND-TASHKENT-CHARVAK (450 KM)</h2>
                <p>
                  Breakfast in the hotel at 07.00-08.00. At the morning after
                  the breakfast drive to Tashkent. Excursion on the road. Visits
                  to the Tamerlan Gate and Honey Market in Jizzakh. Arrival to
                  Tashkent Lunch in Tashkent local restaurant After lunch drive
                  to Charvak mountains. Nature of Uzbekistan presents an amazing
                  variety of landscapes. The Aral Sea borders on the sands of
                  the Kizilkum Desert; the Pamir mountain range - "The Roof of
                  the World" protects the subtropics of Surkhandarya oasis from
                  northern winds; fertile Fergana Valley is surrounded by the
                  foothills of the Tian-Shan Mountains - "Sky Mountains". For
                  inhabitants of Tashkent the favourite places for recreation
                  are the spurs of the Tian-Shan, a big mountainous area that
                  stretches all along the territory of Central Asia for 1200
                  kilometers from Peak Pobeda and Khan-Tengry in the east to the
                  tops of Big Chimghan in the south-west. Eighty kilometers from
                  Tashkent, at the junction of three wild mountain rivers - the
                  Ugham, Chatkal and Pskem, there has been erected the high dam
                  of Charvak Hydropower Station, which brought about an
                  artificial lake, surrounded by green snow-topped mountain
                  slopes. Accommodation in hotel. Overnight in the hotel.
                </p>
                <h3>DAY 18</h3>
                <h2>CHARVAK-TASHKENT</h2>
                <p>
                  Breakfast in the hotel at 07.00-08.00. After breakfast walking
                  on Chimgan Mountains, Riding Cable Car and walking, drive to
                  Charvak Reservoir, Lunch and excursion, afternoon transfer to
                  Tashkent, accommodation in the hotel. Overnight in the hotel.
                </p>
                <h3>DAY 19</h3>
                <h2>TASHKENT</h2>
                <p>Transfer to Tashkent airport </p>
                <Link to={"/book"}>
                  <button className={style.btn_tours}>{t("booknow")}</button>
                </Link>
              </Typography>
            </AccordionDetails>
          </Accordion>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Tours;
