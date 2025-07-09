import Slider from "react-slick";

import "./slick.scss";
import "./slick-theme.scss";

import tottenhemLogo from "../../imgs/Football Clubs/EPL/tottenhem_logo.png";
import mcLogo from "../../imgs/Football Clubs/EPL/mc_logo.png";
import muLogo from "../../imgs/Football Clubs/EPL/mu_logo.png";
import newCastleLogo from "../../imgs/Football Clubs/EPL/newcastle_logo.png";
import arsenalLogo from "../../imgs/Football Clubs/EPL/arsenal_logo.png";

import laLigaLogo from "../../imgs/Football League/ef962943-cd1e-4843-a19a-8c1b5b9e9abb.jpg";

function SlickGoTo() {
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
          <h3>*****</h3>
          <img className="league_logo" src={laLigaLogo} />
        </div>
        <div>
          <h3 style={{ marginBottom: "30px", fontSize: "24px", fontWeight: "bolder", textAlign: "center" }}>Manchester City</h3>
          <img className="team_logo" src={mcLogo} />
          <h3>*****</h3>
          <img className="league_logo" src={laLigaLogo} />
        </div>
        <div>
          <h3 style={{ marginBottom: "30px", fontSize: "24px", fontWeight: "bolder", textAlign: "center" }}>Manchester United</h3>
          <img className="team_logo" src={muLogo} />
          <h3>*****</h3>
          <img className="league_logo" src={laLigaLogo} />
        </div>
        <div>
          <h3 style={{ marginBottom: "30px", fontSize: "24px", fontWeight: "bolder", textAlign: "center" }}>Newcastle</h3>
          <img className="team_logo" src={newCastleLogo} />
          <h3>*****</h3>
          <img className="league_logo" src={laLigaLogo} />
        </div>
      </Slider>
    </div>
  );
}

export default SlickGoTo;
