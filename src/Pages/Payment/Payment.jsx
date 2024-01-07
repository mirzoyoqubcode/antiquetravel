import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import style from "../Payment/Payment.module.scss";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Nav1 from "../../components/Nav1/Nav1";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const Payment = () => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className={style.container}>
      <Header />
      <Nav1 />
      <div className={style.body}>
        <main>
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/007/118/548/original/payment-with-card-by-pos-terminal-4k-animation-payment-by-card-swipe-through-a-pos-terminal-payment-terminal-money-transaction-animation-paying-for-goods-ecommerce-card-swipe-payment-system-free-video.jpg"
            alt=""
          />
          <div className={style.paymentContainer}>
            <Box sx={{ width: "100%" }}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="basic tabs example"
                >
                  <Tab label="First Option" />
                  <Tab label="Second Option(Recommended)" />
                </Tabs>
              </Box>
              <TabPanel value={value} index={0}>
                <h2>Online payments built for success</h2>
                <form>
                  <TextField
                    id="outlined-basic"
                    label="Card Number"
                    variant="outlined"
                    className={style.third_input}
                    placeholder="12345678123456"
                  />
                  <TextField
                    id="outlined-basic"
                    label="Expiration"
                    variant="outlined"
                    placeholder="12/19"
                  />
                  <TextField
                    id="outlined-basic"
                    label="CVV"
                    variant="outlined"
                    placeholder="CVV"
                  />
                </form>

                <Stack direction="column" spacing={1}>
                  <Button variant="contained">Humo</Button>
                  <Button variant="contained">UzCard</Button>
                  <Button variant="contained">MasterCard</Button>
                  <Button variant="contained">Visa</Button>
                </Stack>
              </TabPanel>
              <TabPanel value={value} index={1}>
                <div>
                  <p>"ANTIQUE TRAVEL EXPERTS" OK</p>
                  <p>Buxoro shahar, Q.Murtazoyev ko'chasi, 9/1-uy, 6x,</p>
                  <p>TIF "MILLIY BANK" Buxoro viloyat filiali</p>
                  <p>MFO 00084 STIR 310149060</p>
                </div>
                <h4>UzSum: 2020800070560380001</h4>
                <h4>USD: 20208840005603800001</h4>
                <h4>EUR: 20208978305603800001 </h4>
                <p className={style.text_card}>send cheque account below!</p>
                <a target="_blank" href="https://wa.me/qr/YMS75A26V23ZG1">
                  <Button variant="contained" className={style.btn_1}>
                    Contact me
                  </Button>
                </a>
              </TabPanel>
            </Box>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Payment;
