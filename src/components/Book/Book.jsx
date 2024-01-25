import React, { useState } from "react";
import styles from "./Book.module.scss";
import { useTranslation } from "react-i18next";
import Header from "../Header/Header";
import Nav1 from "../Nav1/Nav1";
import Footer from "../Footer/Footer";
const Book = () => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const countries = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Anguilla",
    "Antigua &amp; Barbuda",
    "Argentina",
    "Armenia",
    "Aruba",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bermuda",
    "Bhutan",
    "Bolivia",
    "Bosnia &amp; Herzegovina",
    "Botswana",
    "Brazil",
    "British Virgin Islands",
    "Brunei",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cambodia",
    "Cameroon",
    "Cape Verde",
    "Cayman Islands",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Congo",
    "Cook Islands",
    "Costa Rica",
    "Cote D Ivoire",
    "Croatia",
    "Cruise Ship",
    "Cuba",
    "Cyprus",
    "Czech Republic",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Estonia",
    "Ethiopia",
    "Falkland Islands",
    "Faroe Islands",
    "Fiji",
    "Finland",
    "France",
    "French Polynesia",
    "French West Indies",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Gibraltar",
    "Greece",
    "Greenland",
    "Grenada",
    "Guam",
    "Guatemala",
    "Guernsey",
    "Guinea",
    "Guinea Bissau",
    "Guyana",
    "Haiti",
    "Honduras",
    "Hong Kong",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Isle of Man",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jersey",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kuwait",
    "Kyrgyz Republic",
    "Laos",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Macau",
    "Macedonia",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Mauritania",
    "Mauritius",
    "Mexico",
    "Moldova",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Montserrat",
    "Morocco",
    "Mozambique",
    "Namibia",
    "Nepal",
    "Netherlands",
    "Netherlands Antilles",
    "New Caledonia",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "Norway",
    "Oman",
    "Pakistan",
    "Palestine",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Puerto Rico",
    "Qatar",
    "Reunion",
    "Romania",
    "Russia",
    "Rwanda",
    "Saint Pierre &amp; Miquelon",
    "Samoa",
    "San Marino",
    "Satellite",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "South Africa",
    "South Korea",
    "Spain",
    "Sri Lanka",
    "St Kitts &amp; Nevis",
    "St Lucia",
    "St Vincent",
    "St. Lucia",
    "Sudan",
    "Suriname",
    "Swaziland",
    "Sweden",
    "Switzerland",
    "Syria",
    "Taiwan",
    "Tajikistan",
    "Tanzania",
    "Thailand",
    "Timor L'Este",
    "Togo",
    "Tonga",
    "Trinidad &amp; Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Turks &amp; Caicos",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "Uruguay",
    "Uzbekistan",
    "Venezuela",
    "Vietnam",
    "Virgin Islands (US)",
    "Yemen",
    "Zambia",
    "Zimbabwe",
  ];

  const handleSelectChange = (event) => {
    setSelectedCountry(event.target.value);
  };
  const [showPopup, setShowPopup] = useState(false);

  const handleSendClick = () => {
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 2000);
  };
  const { t } = useTranslation();
  return (
    <div>
      <Header />
      <Nav1 />
      <div className={styles.wrapper_book}>
        <h1>{t("tourrequest")}</h1>
        <h2>{t("contact")}</h2>
        <p>{t("contactinfo")}</p>
        <div className={styles.inputs}>
          <select name="" id="" className="styles.position">
            <option value="Mr." selected>
              Mr.
            </option>
            <option value="Mrs.">Mrs.</option>
            <option value="Ms.">Ms.</option>
            <option value="Dr.">Dr.</option>
          </select>
          <input
            className={styles.input}
            type="text"
            placeholder={t("firstName")}
          />
          <input
            className={styles.input}
            type="text"
            placeholder={t("lastName")}
          />
          <div>
            <select
              className={styles.countries}
              value={selectedCountry}
              onChange={handleSelectChange}
            >
              <option placeholder={t("citizenship")}>
                --{t("citizenship")}--
              </option>
              {countries.map((country, index) => (
                <option key={index} value={country}>
                  {country}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className={styles.additional_inputs}>
          <input
            type="text"
            className={styles.input}
            placeholder={t("Email")}
          />
          <input
            type="text"
            className={styles.input}
            placeholder={t("Phone")}
          />
        </div>
        <h2>{t("travelInfo")}</h2>
        <div className={styles.label}>
          <div>
            <label htmlFor="">{t("startdate")}</label>
            <input type="date" className={styles.input} />
          </div>
          <div>
            <label htmlFor="">{t("numberTraveller")}</label>
            <input
              type="number"
              className={styles.input}
              placeholder={t("numberTraveller")}
            />
          </div>
        </div>
        <div>
          <textarea placeholder={t("comment")}></textarea>
        </div>

        <button onClick={handleSendClick}>{t("sendrequest")}</button>
        {showPopup && (
          <div className="popup">
            <p className={styles.green}>{t("sent")}</p>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Book;
