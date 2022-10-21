import React from "react";
import "./BannerSlider.css";
import Carousel from "react-material-ui-carousel";
import { makeStyles } from "@material-ui/core";
import banner_1 from "../../Images/banner_1.jpg";
import banner_2 from "../../Images/banner_2.jpg";
import banner_3 from "../../Images/banner_3.jpg";

const useStyles = makeStyles({
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 20
  },
  carousel: {
    marginTop: 18,
    width: "93%"
  }
});

export default function BannerSlider(props) {
  const classes = useStyles();
  let bannerData = [banner_1, banner_2, banner_3];
  return (
    <div className="banner_corusel">
      <Carousel
        autoplay={false}
        animation="slide"
        indicators={true}
        navButtonsAlwaysVisible={true}
        cycleNavigation={true}
        navButtonsProps={{
          style: {
            background: "rgba(48, 48, 48, 0.4)",
            color: "rgb(70, 67, 67)",
            borderRadius: 50,
            marginLeft: 10
          }
        }}
        className={classes.carousel}
      >
        {bannerData.map((item) => (
          <img src={item} alt="" className={classes.image} />
        ))}
      </Carousel>
    </div>
  );
}
