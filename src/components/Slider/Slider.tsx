import Slider from "react-slick";

import "./slick.scss";
import "./slick-theme.scss";

import tottenhemLogo from "../../imgs/Football Clubs/EPL/tottenhem_logo.png";
import mcLogo from "../../imgs/Football Clubs/EPL/mc_logo.png";
import muLogo from "../../imgs/Football Clubs/EPL/mu_logo.png";
import newCastleLogo from "../../imgs/Football Clubs/EPL/newcastle_logo.png";
import arsenalLogo from "../../imgs/Football Clubs/EPL/arsenal_logo.png";

import yelowStar from "../../imgs/utils/yelow_star.svg";

function SlickGoTo() {
  const arrayOfStars = yelowStar;

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 1,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="img_container">
          <h3 style={{ marginBottom: "30px", fontSize: "24px", fontWeight: "bolder", textAlign: "center" }}>Tottenhem</h3>
          <img className="team_logo" src={tottenhemLogo} />
          <div className="star_container">
            <img className="star" src={yelowStar} alt="" />
            <img className="star" src={yelowStar} alt="" />
            <img className="star" src={yelowStar} alt="" />
            <img className="star" src={yelowStar} alt="" />
            <img className="star" src={yelowStar} alt="" />
          </div>
        </div>
        <div className="img_container">
          <h3 style={{ marginBottom: "30px", fontSize: "24px", fontWeight: "bolder", textAlign: "center" }}>Manchester City</h3>
          <img className="team_logo" src={mcLogo} />
          <div className="star_container">
            <img className="star" src={yelowStar} alt="" />
            <img className="star" src={yelowStar} alt="" />
            <img className="star" src={yelowStar} alt="" />
            <img className="star" src={yelowStar} alt="" />
            <img className="star" src={yelowStar} alt="" />
          </div>
        </div>
        <div className="img_container">
          <h3 style={{ marginBottom: "30px", fontSize: "24px", fontWeight: "bolder", textAlign: "center" }}>Manchester United</h3>
          <img className="team_logo" src={muLogo} />
          <div className="star_container">
            <img className="star" src={yelowStar} alt="" />
            <img className="star" src={yelowStar} alt="" />
            <img className="star" src={yelowStar} alt="" />
            <img className="star" src={yelowStar} alt="" />
            <img className="star" src={yelowStar} alt="" />
          </div>
        </div>
        <div className="img_container">
          <h3 style={{ marginBottom: "30px", fontSize: "24px", fontWeight: "bolder", textAlign: "center" }}>Newcastle</h3>
          <img className="team_logo" src={newCastleLogo} />
          <div className="star_container">
            <img className="star" src={yelowStar} alt="" />
            <img className="star" src={yelowStar} alt="" />
            <img className="star" src={yelowStar} alt="" />
            <img className="star" src={yelowStar} alt="" />
            <img className="star" src={yelowStar} alt="" />
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default SlickGoTo;
