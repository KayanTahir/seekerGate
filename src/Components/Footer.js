import React from "react";
import {
  Container,
  Grid,
  Typography,
  Button,
  Avatar,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { Stack } from "@mui/system";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import AttachMoneyRoundedIcon from "@mui/icons-material/AttachMoneyRounded";

import Fb from "./images/fb.png";
import Tweeter from "./images/tweeter.png";
import Insta from "./images/insta.png";

const Footer = () => {
  //CSS AND LISTS
  const theme = useTheme();
  const isMatchsm = useMediaQuery(theme.breakpoints.down("md"));
  const pages = ["About", "News", "Seekersgate Blog", "Sell on Seekersgate"];
  const socialMedia = [{
    icon:Fb,
    link:"#"
  },{
    icon:Tweeter,
    link:"#"
  },{
    icon:Insta,
    link:"#"
  }];
  return (
    <>
      <Container maxWidth="xxl" sx={{ background: "#171932", color: "white" }}>
        <Container maxWidth="lg" sx={{ pt: "80px", pb: "20px" }}>
          <div className="margin">
            <Grid container spacing={2}>
              <Grid item xs={12} lg={5} md={5} sx={{ mb: isMatchsm ? "40px" : null }}>
                <Stack spacing={2}>
                  <Typography
                    variant="subtitle1"
                    textAlign={isMatchsm ? "justify" : null}
                    fontFamily='Poppins'
                  >
                    Lorem ipsum dolor sit amet consectetur. Faucibus cursus
                    mauris volutpat blandit integer turpis quis. Consequat
                    laoreet aliquet lectus dictum purus quis est. Nullam metus
                    quam potenti quis.
                  </Typography>
                </Stack>
              </Grid>
              <Grid item md={1} lg={1}></Grid>
              <Grid
                item
                xs={12}
                lg={2}
                md={2}
                sx={{
                  textAlign: isMatchsm ? "center" : null,
                  mb: isMatchsm ? "40px" : null,
                }}
              >
                <Typography variant="h5">
                  <b>
                    <span className="underline">Resou</span>rces
                  </b>
                </Typography>
                <br />
                {pages.map((page) => {
                  return (
                    <>
                      <Typography fontFamily = 'Poppins'>{page}</Typography>
                      <br></br>
                    </>
                  );
                })}
              </Grid>
              <Grid
                item
                xs={12}
                lg={4}
                md={4}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <Stack spacing={2}>
                  <Typography variant="h6" textAlign="center">
                    <b>Follow Us</b>
                  </Typography>
                  <Stack direction="row" spacing={1}>
                    {socialMedia.map((sm) => {
                      return (
                        <>
                          <a href={sm.link}><img src={sm.icon} /></a>
                        </>
                      );
                    })}
                  </Stack>
                </Stack>
              </Grid>
            </Grid>
            <br></br>
            <br></br>
            <br />
           
          </div>
        </Container>
      </Container>
      <Container maxWidth="xxl" sx={{background:"#2e2e43",py:"20px",color:"#fff"}}>
                <Typography textAlign="center" variant={isMatchsm ? "subtitle2" : "subtitle1"}>
                    Copyright© 2023. All rights reserved.
                </Typography>
        </Container>
    </>
  );
};

export default Footer;
