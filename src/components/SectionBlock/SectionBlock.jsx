import React, { useState } from "react";
import style from "./SectionBlock.module.scss";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { FaBarcode } from "react-icons/fa";
import { AiFillGift } from "react-icons/ai";
import { RiShareCircleLine } from "react-icons/ri";
import { ImAirplane } from "react-icons/im";
import { BsTelephoneFill } from "react-icons/bs";
import { RiSuitcaseFill } from "react-icons/ri";
import { IoIosPeople } from "react-icons/io";
import { AiFillIdcard } from "react-icons/ai";
import { BsFillPersonPlusFill } from "react-icons/bs";
import { BiBook } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { BsPencilFill } from "react-icons/bs";
import { BiExit } from "react-icons/bi";
import { GiShinyApple } from "react-icons/gi";
import { BsCartFill } from "react-icons/bs";
import { FaKey } from "react-icons/fa";
import { MdCleanHands } from "react-icons/md";
import { MdRule } from "react-icons/md";
import { useTranslation, Trans } from "react-i18next";
import transport2 from "../../images/transport2.jpg";
import faq1_1 from "../../images/faq1_1.jpg";
import faq2_1 from "../../images/faq2_1.jpg";
import faq3_1 from "../../images/faq3_1.png";
import faq4_1 from "../../images/faq4_1.jpg";
import faq4_3 from "../../images/faq4_3.jpg";
import faq4_4 from "../../images/faq4_4.jpg";
import faq4_5 from "../../images/faq4_5.jpg";
import faq4_6 from "../../images/faq4_6.png";
import faq4_7 from "../../images/faq4_7.jpg";
import faq4_8 from "../../images/faq4_8.jpg";
import faq5_1 from "../../images/faq5_1.jpg";
import faq6_1 from "../../images/faq6_1.jpg";
import faq7_2 from "../../images/faq7_2.png";
import visa from "../../images/visa.jpg";
import faq9_1 from "../../images/faq9_1.webp";
import faq10_1 from "../../images/faq10_1.png";
import faq11_1 from "../../images/faq11_1.png";
import faq12_1 from "../../images/faq12_1.jpg";
import registeration from "../../images/registeration.jpg";
import hilton from "../../images/hilton.jpg";
import food from "../../images/food.jpg";
import shopping from "../../images/shopping.jpg";
import security from "../../images/security.jpg";
import gigiyena from "../../images/gigiyena.jpg";
import din from "../../images/din.jpg";
import embassy from "../../files/embassy.pdf";
import deklaraciya from "../../files/deklaraciya.pdf";
import medicine from "../../files/medicine.pdf";
import { HiInformationCircle } from "react-icons/hi";
import Globus from "../../images/globus.jpg";
export default function SimpleAccordion() {
  const { t } = useTranslation();
  return (
    <div className={style.body}>
      <div className={style.wrapper}>
        <h1>
          <Trans t={t}>usefulInformation</Trans>
        </h1>
        <Accordion className={style.accordion}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={style.question}>
              <HiInformationCircle /> <Trans t={t}>general1</Trans>
            </Typography>
          </AccordionSummary>
          <AccordionDetails className={style.answer}>
            <Typography>
              <div className={style.general}>
                <div className={style.info_general}>
                  <p>
                    <span>
                      <Trans t={t}>general2</Trans>
                    </span>
                    <Trans t={t}>general3</Trans>
                  </p>
                  <p>
                    <span>
                      <Trans t={t}>general4</Trans>
                    </span>
                    <Trans t={t}>general5</Trans>
                  </p>
                  <p>
                    <span>
                      <Trans t={t}>general6</Trans>
                    </span>
                    34 million
                  </p>
                  <p>
                    <span>
                      <Trans t={t}>general7</Trans>
                    </span>
                    <Trans t={t}>general8</Trans>
                  </p>
                  <p>
                    <span>
                      <Trans t={t}>general9</Trans>
                    </span>
                    <Trans t={t}>general10</Trans>
                  </p>
                  <p>
                    <span>
                      <Trans t={t}>general11</Trans>
                    </span>
                    Tashkent, Samarkand, Bukhara, Khiva, Shakhrisabz, Termez,
                    Kokand, Ferghana, Muynak.
                  </p>
                  <p>
                    <span>Capital:</span>
                    Tashkent
                  </p>
                  <p>
                    <span>
                      <Trans t={t}>general12</Trans>
                    </span>
                    <Trans t={t}>general13</Trans>
                  </p>
                  <p>
                    <span>
                      <Trans t={t}>general14</Trans>
                    </span>
                    <Trans t={t}>general15</Trans>
                  </p>
                  <p>
                    <span>Time zone:</span>
                    UTC +5
                  </p>
                  <p>
                    <span>Internet zone:</span>
                    .uz
                  </p>
                  <p>
                    <span>
                      <Trans t={t}>general16</Trans>
                    </span>
                    +998
                  </p>
                  <p>
                    <span>
                      <Trans t={t}>general17</Trans>
                    </span>
                    sum
                  </p>
                  <p>
                    <span>
                      <Trans t={t}>general18</Trans>
                    </span>
                    <Trans t={t}>general19</Trans>
                  </p>
                </div>
                <img src={Globus} alt="" />
              </div>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className={style.accordion}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={style.question}>
              <FaBarcode />
              <p>
                <Trans t={t}>faq1title</Trans>
              </p>
            </Typography>
          </AccordionSummary>
          <AccordionDetails className={style.answer}>
            <Typography>
              <div className={style.faq1}>
                <img src={faq1_1} alt="" />
                <p>
                  <Trans t={t}>faq1text1</Trans>{" "}
                </p>
              </div>
              <p className={style.newline}>
                <Trans>faq1text2</Trans>{" "}
              </p>
              <p>
                <Trans t={t}>faq1text3</Trans>
              </p>
              <ul>
                <li>
                  <Trans t={t}>faq1text4</Trans>
                </li>
                <li>
                  <Trans t={t}>faq1text5</Trans>
                </li>
                <li>
                  <Trans t={t}>faq1text6</Trans>
                </li>
                <li>
                  <Trans t={t}>faq1text7</Trans>
                </li>
                <li>
                  <Trans t={t}>faq1text8</Trans>
                </li>
                <li>
                  <Trans t={t}>faq1text9</Trans>
                </li>
                <li>
                  <Trans t={t}>faq1text10</Trans>
                </li>
                <li>
                  <Trans t={t}>faq1text11</Trans>
                </li>
              </ul>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className={style.accordion}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={style.question}>
              {" "}
              <AiFillGift />
              <Trans t={t}>faq2text1</Trans>
            </Typography>
          </AccordionSummary>
          <AccordionDetails className={style.answer}>
            <Typography>
              <div className={style.faq2}>
                <div>
                  <p>
                    <bold>January 1</bold> - New year
                  </p>
                  <p>
                    <bold>January 14</bold> – National Defenders Day
                  </p>
                  <p>
                    <bold>March 8</bold> - International women's day
                  </p>
                  <p>
                    <bold>March 21</bold> - Navruz Holiday
                  </p>
                  <p>
                    <bold>May 9</bold> - day of Remembrance and Honors
                  </p>
                  <p>
                    <bold>September 1</bold>-Independence Day
                  </p>
                  <p>
                    <bold>October 1</bold> - Teacher and Mentor Day
                  </p>
                  <p>
                    <bold>December 8</bold> - Constitution Day
                  </p>
                  <p>
                    <bold>Iyd-al-Fitr</bold> (religious holiday) - date varies
                  </p>
                  <p>
                    <bold>sIyd-al-Adha</bold> (religious holiday) - date varies
                  </p>
                </div>
                <img src={faq2_1} alt="" />
              </div>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className={style.accordion} id="transportation_accordion">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={style.question}>
              {" "}
              <RiShareCircleLine />
              <Trans t={t}>faq3text1</Trans>
            </Typography>
          </AccordionSummary>
          <AccordionDetails className={style.answer}>
            <Typography>
              <div className={style.faq3}>
                <img src={faq3_1} alt="" />
                <p>
                  <Trans t={t}>faq3text2</Trans>
                </p>
              </div>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className={style.accordion}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={style.question}>
              {" "}
              <ImAirplane />
              <Trans t={t}>faq4text1</Trans>
            </Typography>
          </AccordionSummary>
          <AccordionDetails className={style.answer}>
            <Typography>
              <div className={style.faq4}>
                <div>
                  <h2>
                    <Trans t={t}>faq4text1</Trans>
                  </h2>
                  <p>
                    <Trans t={t}>faq4text2</Trans>
                  </p>
                </div>
                <h3>
                  <Trans t={t}>faq4text4</Trans>
                </h3>
                <div className={style.plane}>
                  <img src={faq4_1} alt="" />
                  <p>
                    <Trans t={t}>faq4text3</Trans>
                  </p>
                </div>
                <h3>
                  <Trans t={t}>faq4text5</Trans>
                </h3>
                <div className={style.carrier}>
                  <p>
                    <a
                      target="_blank"
                      href="https://www.uzairways.com/ru?utm_source=google&utm_medium=cpc&utm_term=&gclid=CjwKCAiA2rOeBhAsEiwA2Pl7Q0dLPI_SxfaSvGYZo4Lz91cyMK4Q5XoDPzkimj3gB1ByV8voGIaRIxoChHkQAvD_BwE"
                    >
                      "<Trans t={t}>faq4text6</Trans>"
                    </a>{" "}
                    <Trans t={t}>faq4text7</Trans>
                  </p>
                  <img src={transport2} alt="" />
                </div>
                <div className={style.ticket}>
                  {" "}
                  <a
                    target="_blank"
                    href="https://book.uzairways.com/en/?806?806"
                  >
                    <Trans t={t}>faq4text8</Trans>
                  </a>
                  <a
                    target="_blank"
                    href="https://www.uzairways.com/en/statform"
                  >
                    <Trans t={t}>faq4text9</Trans>
                  </a>
                </div>

                <h3>
                  <Trans t={t}>faq4text10</Trans>
                </h3>
                <div className={style.airlines}>
                  <img src={faq4_3} alt="" />
                  <p>
                    <Trans t={t}>faq4text11</Trans>
                  </p>
                </div>
                <h3>
                  <Trans t={t}>faq4text12</Trans>
                </h3>
                <div className={style.trains}>
                  <p>
                    <Trans t={t}>faq4text13</Trans>
                  </p>
                  <img src={faq4_4} alt="" />
                </div>
                <div className={style.ticket}>
                  {" "}
                  <a
                    target="_blank"
                    href="https://railway.uz/ru/interaktivnye_uslugi/spravochnye_telefony/"
                  >
                    <Trans t={t}>faq4text14</Trans>
                  </a>
                  <a target="_blank" href="https://e-ticket.railway.uz/ru/home">
                    <Trans t={t}>faq4text15</Trans>
                  </a>
                </div>
                <h3>
                  <Trans t={t}>faq4text16</Trans>
                </h3>
                <div className={style.metro}>
                  <img src={faq4_5} alt="" />
                  <p>
                    {" "}
                    <Trans t={t}>faq4text17</Trans>
                  </p>
                </div>
                <h4>
                  <Trans t={t}>faq4text18</Trans>
                </h4>
                <h3>
                  <Trans t={t}>faq4text19</Trans>
                </h3>
                <div className={style.buses}>
                  <p>
                    <Trans t={t}>faq4text20</Trans>
                  </p>
                  <img src={faq4_6} alt="" />
                </div>
                <a target="_blank" href="https://avtoticket.uz/">
                  <Trans t={t}>faq4text21</Trans>
                </a>
                <h3>
                  <Trans t={t}>faq4text22</Trans>
                </h3>
                <div className={style.bus}>
                  <img src={faq4_7} alt="" />
                  <p>
                    <Trans t={t}>faq4text23</Trans>
                  </p>
                </div>
                <h3>
                  <Trans t={t}>faq4text24</Trans>
                </h3>
                <div>
                  <p>
                    <Trans t={t}>faq4text25</Trans>
                  </p>
                </div>
                <h3>Taxi</h3>
                <div className={style.taxi}>
                  <div>
                    <p>
                      <Trans t={t}>faq4text26</Trans>
                    </p>
                    <h4>
                      <Trans t={t}>faq4text27</Trans>
                    </h4>
                    <p>
                      <Trans t={t}>faq4text28</Trans>
                    </p>
                  </div>
                  <img src={faq4_8} alt="" />
                </div>
              </div>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className={style.accordion}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={style.question}>
              <BsTelephoneFill />
              <Trans t={t}>faq5text1</Trans>
            </Typography>
          </AccordionSummary>
          <AccordionDetails className={style.answer}>
            <Typography>
              <div className={style.faq5}>
                <div>
                  <h2>
                    <Trans t={t}>faq5text2</Trans>
                  </h2>
                  <p>
                    <Trans t={t}>faq5text3</Trans> - 101;
                  </p>
                  <p>
                    <Trans t={t}>faq5text4</Trans> - 102;
                  </p>
                  <p>
                    <Trans t={t}>faq5text5</Trans> - 103;
                  </p>
                  <p>
                    <Trans t={t}>faq5text6</Trans> - 104;
                  </p>
                  <p>
                    <Trans t={t}>faq5text7</Trans> – 109
                  </p>
                </div>
                <img src={faq5_1} alt="" />
              </div>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className={style.accordion}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={style.question}>
              <RiSuitcaseFill />
              <Trans t={t}>faq6text1</Trans>
            </Typography>
          </AccordionSummary>
          <AccordionDetails className={style.answer}>
            <Typography className={style.faq6}>
              <img src={faq6_1} alt="" />
              <p>
                <Trans t={t}>faq6text2</Trans>
              </p>
              <p>
                <Trans t={t}>faq6text3</Trans>
              </p>
              <a target="_blank" href={embassy}>
                <Trans t={t}>faq6text4</Trans>
              </a>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className={style.accordion}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={style.question}>
              <IoIosPeople />
              <Trans t={t}>faq7text1</Trans>
            </Typography>
          </AccordionSummary>
          <AccordionDetails className={style.answer}>
            <Typography className={style.faq7}>
              <div>
                <p>
                  <Trans t={t}>faq7text2</Trans>
                </p>
                <h2>
                  <Trans t={t}>faq7text3</Trans>
                </h2>
                <p>Salom! Hi!</p>
                <p>Yahshimisiz? – How are you?"</p>
                <p>Khair! - Goodbye!</p>
                <p>Salomat buling! - Be healthy!</p>
                <p>Rahmat! - Thank you!</p>
              </div>
              <img src={faq7_2} alt="" />
            </Typography>
          </AccordionDetails>
        </Accordion>
        <h1>
          <Trans t={t}>faq7text4</Trans>
        </h1>
        <Accordion className={style.accordion}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={style.question}>
              <AiFillIdcard /> Visa
            </Typography>
          </AccordionSummary>
          <AccordionDetails className={style.answer}>
            <Typography className={style.faq8}>
              <div className={style.faq8_img}>
                <img src={visa} alt="" />
                <p>
                  <Trans t={t}>faq8text1</Trans>
                  <span>
                    <br />
                    <a target="_blank" href="https://e-visa.gov.uz./main">
                      <Trans t={t}>faq8text2</Trans>
                    </a>
                  </span>
                </p>
              </div>
              <div className={style.links}>
                <a target="_blank" href="https://e-visa.gov.uz/main">
                  Apply for an E-Visa
                </a>
              </div>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className={style.accordion}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={style.question}>
              <BsFillPersonPlusFill />
              <Trans t={t}>faq9text1</Trans>
            </Typography>
          </AccordionSummary>
          <AccordionDetails className={style.answer}>
            <Typography className={style.faq9}>
              <img src={faq9_1} alt="" />
              <p>
                <Trans t={t}>faq9text2</Trans>
              </p>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <h1>
          <Trans t={t}>faq9text3</Trans>
        </h1>
        <Accordion className={style.accordion}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={style.question}>
              <FaBarcode />
              <Trans t={t}>faq10text1</Trans>
            </Typography>
          </AccordionSummary>
          <AccordionDetails className={style.answer}>
            <Typography className={style.faq10}>
              <div>
                <div>
                  <p>
                    <Trans t={t}>faq10text2</Trans>
                    <span>
                      {" "}
                      <a target="_blank" href={deklaraciya}>
                        <Trans t={t}>faq10text2_1</Trans>
                      </a>{" "}
                    </span>

                    <Trans t={t}>faq10text2_2</Trans>
                  </p>
                </div>
                <img src={faq10_1} alt="" />
              </div>
              <h2>
                <Trans t={t}>faq10text3</Trans>
              </h2>
              <p>
                <Trans t={t}>faq10text4</Trans>
              </p>
              <p>
                <Trans t={t}>faq10text5</Trans>
              </p>
              <h2>
                <Trans t={t}>faq10text6</Trans>
              </h2>
              <p>
                <Trans t={t}>faq10text7</Trans>
              </p>
              <h2>
                <Trans t={t}>faq10text8</Trans>
              </h2>
              <p>
                <Trans t={t}>faq10text9</Trans>
              </p>
              <h2>
                <Trans t={t}>faq10text10</Trans>
              </h2>
              <p>
                <Trans t={t}>faq10text11</Trans>
              </p>
              <p>
                <Trans t={t}>faq10text12</Trans>
              </p>
              <h2>
                <Trans t={t}>faq10text13</Trans>
              </h2>
              <ul>
                <li>
                  <Trans t={t}>faq10text14</Trans>
                </li>
                <li>
                  <Trans t={t}>faq10text15</Trans>
                </li>
                <li>
                  <Trans t={t}>faq10text16</Trans>
                </li>
                <li>
                  <a target="_blank" href={medicine}>
                    <Trans t={t}>faq10text17_1</Trans>
                  </a>
                  <Trans t={t}>faq10text17</Trans>
                </li>
                <li>
                  <Trans t={t}>faq10text18</Trans>
                </li>
                <li>
                  <Trans t={t}>faq10text19</Trans>
                </li>
              </ul>
              <h2>
                <Trans t={t}>faq10text20</Trans>
              </h2>
              <ul>
                <li>
                  <Trans t={t}>faq10text21</Trans>
                </li>
                <li>
                  <Trans t={t}>faq10text22</Trans>
                </li>
              </ul>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className={style.accordion}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={style.question}>
              <BiBook />
              <Trans t={t}>faq11text1</Trans>
            </Typography>
          </AccordionSummary>
          <AccordionDetails className={style.answer}>
            <Typography className={style.faq11}>
              <img src={faq11_1} alt="" />
              <div>
                <h3>
                  <Trans t={t}>faq11text1</Trans>
                </h3>
                <p>
                  <Trans t={t}>faq11text2</Trans>
                </p>
              </div>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className={style.accordion}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={style.question}>
              <BsGithub />
              <Trans t={t}>faq12text1</Trans>
            </Typography>
          </AccordionSummary>
          <AccordionDetails className={style.answer}>
            <Typography className={style.faq12}>
              <div>
                <p>
                  <Trans t={t}>faq12text2</Trans>
                </p>
                <p>
                  <Trans t={t}>faq12text3</Trans>
                </p>
                <p>
                  <Trans t={t}>faq12text4</Trans>
                </p>
              </div>
              <img src={faq12_1} alt="" />
            </Typography>
          </AccordionDetails>
        </Accordion>
        <h1>
          <Trans t={t}>faq12text5</Trans>
        </h1>
        <Accordion className={style.accordion}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={style.question}>
              <BsPencilFill />
              <Trans t={t}>faq13text1</Trans>
            </Typography>
          </AccordionSummary>
          <AccordionDetails className={style.answer}>
            <Typography className={style.faq13}>
              <div className={style.register}>
                <div>
                  <p>
                    <Trans t={t}>faq13text2</Trans>
                  </p>
                  <p>
                    <Trans t={t}>faq13text3</Trans>
                  </p>
                  <p>
                    <Trans t={t}>faq13text4</Trans>
                  </p>
                  <p>
                    <Trans t={t}>faq13text5</Trans>
                  </p>
                </div>
                <img src={registeration} alt="" />
              </div>
              <p>
                <Trans t={t}>faq13text6</Trans>
              </p>
              <h3>
                <Trans t={t}>faq13text7</Trans>
              </h3>
              <p>
                <Trans t={t}>faq13text8_1</Trans>
                <a target="_blank" href="https://emehmon.uz/user/login">
                  <Trans t={t}>faq13text8</Trans>
                </a>
                <Trans t={t}>faq13text8_2</Trans>
              </p>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className={style.accordion}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={style.question}>
              <BiExit />
              <Trans t={t}>faq13text9</Trans>
            </Typography>
          </AccordionSummary>
          <AccordionDetails className={style.answer}>
            <Typography className={style.faq14}>
              <div className={style.flat}>
                <img src={hilton} alt="" />
                <p>
                  <Trans t={t}>faq14text1</Trans>
                </p>
              </div>
              <h3>
                <Trans t={t}>faq14text2</Trans>
              </h3>
              <p>
                <Trans t={t}>faq14text3</Trans>
              </p>
              <p>
                <Trans t={t}>faq14text4</Trans>
              </p>
              <p>
                <Trans t={t}>faq14text5</Trans>
              </p>
              <p>
                <Trans t={t}>faq14text6</Trans>
              </p>
              <p>
                <Trans t={t}>faq14text7</Trans>
              </p>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className={style.accordion}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={style.question}>
              <GiShinyApple />
              <Trans t={t}>faq15text1</Trans>
            </Typography>
          </AccordionSummary>
          <AccordionDetails className={style.answer}>
            <Typography className={style.faq15}>
              <div className={style.food}>
                <img src={food} alt="" />
                <div>
                  <h4>
                    <Trans t={t}>faq15text2</Trans>
                  </h4>
                  <h4>
                    <Trans t={t}>faq15text3</Trans>
                  </h4>
                </div>
              </div>
              <p>
                1. <Trans t={t}>faq15text4</Trans>
              </p>
              <p>
                2. <Trans t={t}>faq15text5</Trans>
              </p>
              <p>
                3. <Trans t={t}>faq15text6</Trans>
              </p>
              <p>
                4. <Trans t={t}>faq15text7</Trans>
              </p>
              <p>
                5. <Trans t={t}>faq15text8</Trans>
              </p>
              <p>
                6. <Trans t={t}>faq15text9</Trans>
              </p>
              <p>
                7. <Trans t={t}>faq15text10</Trans>
              </p>
              <h3>
                <Trans t={t}>faq15text11</Trans>
              </h3>
              <h3>
                <Trans t={t}>faq15text12</Trans>
              </h3>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className={style.accordion}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={style.question}>
              <BsCartFill />
              <Trans t={t}>faq16text1</Trans>
            </Typography>
          </AccordionSummary>
          <AccordionDetails className={style.answer}>
            <Typography className={style.faq16}>
              <p>
                <Trans t={t}>faq16text2</Trans>
              </p>
              <img src={shopping} alt="" />
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className={style.accordion}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={style.question}>
              <FaKey />
              <Trans t={t}>faq17text1</Trans>
            </Typography>
          </AccordionSummary>
          <AccordionDetails className={style.answer}>
            <Typography className={style.faq17}>
              <img src={security} alt="" />
              <p>
                <Trans t={t}>faq17text2</Trans>
              </p>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className={style.accordion}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={style.question}>
              <MdCleanHands />
              <Trans t={t}>faq18text1</Trans>
            </Typography>
          </AccordionSummary>
          <AccordionDetails className={style.answer}>
            <Typography className={style.faq18}>
              <img src={gigiyena} alt="" />
              <div>
                <p>
                  <Trans t={t}>faq18text2</Trans>
                </p>
                <p>
                  <Trans t={t}>faq18text3</Trans>
                </p>
                <p>
                  <Trans t={t}>faq18text4</Trans>
                </p>
              </div>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className={style.accordion}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
            className={style.question_tag}
          >
            <Typography className={style.question}>
              <MdRule />
              <Trans t={t}>faq19text1</Trans>
            </Typography>
          </AccordionSummary>
          <AccordionDetails className={style.answer}>
            <Typography className={style.faq19}>
              <img src={din} alt="" />
              <p>
                <Trans t={t}>faq19text2</Trans>
              </p>
              <p>
                <Trans t={t}>faq19text3</Trans>
              </p>
              <p>
                <Trans t={t}>faq19text4</Trans>
              </p>
              <p>
                <Trans t={t}>faq19text5</Trans>
              </p>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}
