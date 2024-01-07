import { Routes, Route, useLocation } from "react-router-dom";
import CitiesGallery from "./Pages/CitiesGallery";
import GreenGallery from "./Pages/GreenGallery";
import Main from "./Pages/Main";
import Photo_Gallery from "./Pages/Photo_Gallery";
import CultureGallery from "./Pages/CultureGallery";
import ArchitectureGallery from "./Pages/ArchitectureGallery";
import PeopleGallery from "./Pages/PeopleGallery";
import FoodGallery from "./Pages/FoodGallery";
import MetroGallery from "./Pages/MetroGallery";
import ArtGallery from "./Pages/ArtGallery";
import SportGallery from "./Pages/SportGallery";
import HistoricalGallery from "./Pages/HistoricalGallery";
import TourismGallery from "./Pages/TourismGallery";
import Payment from "./Pages/Payment/Payment";
import AboutUs from "./components/AboutUs/AboutUs";
import Tours from "./components/Tours/Tours";
import { useLayoutEffect } from "react";
import Bukhara from "./Pages/Bukhara";
import Samarkand from "./Pages/Samarkand";
import Khiva from "./Pages/Khiva";
import Shakhrisabz from "./Pages/Shakhrisabz";
import Termiz from "./Pages/Termiz";
import Tashkent from "./Pages/Tashkent";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/Photo_Gallery" element={<Photo_Gallery />} />
      <Route path="/Photo_Gallery/cities_gallery" element={<CitiesGallery />} />
      <Route path="/Photo_Gallery/green_gallery" element={<GreenGallery />} />
      <Route
        path="/Photo_Gallery/culture_gallery"
        element={<CultureGallery />}
      />
      <Route
        path="/Photo_Gallery/architecture_gallery"
        element={<ArchitectureGallery />}
      />
      <Route path="/Photo_Gallery/people_gallery" element={<PeopleGallery />} />
      <Route path="/Photo_Gallery/food_gallery" element={<FoodGallery />} />
      <Route path="/Photo_Gallery/metro_gallery" element={<MetroGallery />} />
      <Route path="/Photo_Gallery/art_gallery" element={<ArtGallery />} />
      <Route path="/Photo_Gallery/sport_gallery" element={<SportGallery />} />
      <Route
        path="/Photo_Gallery/cities_gallery/tashkent_gallery"
        element={<Tashkent />}
      />

      <Route path="/payment" element={<Payment />} />

      <Route
        path="/Photo_Gallery/historical_gallery"
        element={<HistoricalGallery />}
      />
      <Route
        path="/Photo_Gallery/tourism_gallery"
        element={<TourismGallery />}
      />
      <Route path="/aboutUs" element={<AboutUs />} />
      <Route path="/tours" element={<Tours />} />
      <Route
        path="/Photo_Gallery/cities_gallery/samarkand_gallery"
        element={<Samarkand />}
      />
      <Route
        path="/Photo_Gallery/cities_gallery/khiva_gallery"
        element={<Khiva />}
      />
      <Route
        path="/Photo_Gallery/cities_gallery/bukhara_gallery"
        element={<Bukhara />}
      />
      <Route
        path="/Photo_Gallery/cities_gallery/shakhrisabz_gallery"
        element={<Shakhrisabz />}
      />
      <Route
        path="/Photo_Gallery/cities_gallery/termiz_gallery"
        element={<Termiz />}
      />
    </Routes>
  );
}

export default App;
