import React from "react";
import { Carousel } from "react-responsive-carousel";
import classes from "./home.module.css";
import {WhySection} from "views"
import Layout from "components/Layout";
import { Button } from "@mui/material";
// font-family: Eina02-Bold;

const titleText = "Make your documents \naccessible by everyone";
const Home = () => {
  return (
    // <Layout>
    // <Carousel className={classes.carousel}>
    <div className={classes.page_container}>
      <div className={classes.hero_body}>
        <div className={classes.hero_container}>
          <div className={classes.landing_text_container}>
            <h1 className={classes.landing_title} >{titleText}</h1>
            <p className={classes.landing_description}>
              Lightning fast document translation service to make your documents
              accessible by everyone
            </p>
            <div className={classes.buttons_container}>
              <Button variant="contained" className={classes.button_start}>
                Start translating
              </Button>
              <Button
                variant="outlined"
                className={classes.button_documentation}
              >
                See documentation
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.why_section_container}>
      <WhySection/>

      </div>
    </div>

    // </Carousel>
    // </Layout>
  );
};
export default Home;
