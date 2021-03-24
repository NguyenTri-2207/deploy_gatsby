import * as React from "react"
import Worldwide from "../../images/bg-worldwide.png";
import Worldwide_left from "../../images/img-left-worldwide.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import SupportCountry from "../Card/SupportCountry";
import {StaticImage} from "gatsby-plugin-image"
const dataCountry = [
  {
    country1: "Seychelles",
    country2: "Singapore",
    country3:"St. Kitts & Nevis",
    country4:"British Virgin Islands",
    country5:"St. Vincent & Grenadines",
    country6:"United Arab Emirates",
    country7: "Vietnam"
  },
  {
    country1: "Anguilla",
    country2: "Bahamas",
    country3:"Belize",
    country4:"British Virgin Islands",
    country5:"Cayman Islands",
    country6:"Cyprus",
  },
  {
    country1: "Hong Kong",
    country2: "Jersey",
    country3:"Marshall Islands",
    country4:"Mauritius",
    country5:"Panama",
    country6:"Samoa",
  },
]
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block"}}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block"}}
      onClick={onClick}
    />
  );
}
const Support = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    indicator: true,
    autoplay: true,
    nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
  };
  return(
    <section className="section-support b-lazy b-loaded" style={{backgroundImage: `url(${Worldwide})`}}>
    <div className="container-fluid">
      <div className="row dis-flex">
        <div className="col-md-4 dis-none">
          <div className="img-left">
          <StaticImage
               className="img"
                src="../../images/img-left-worldwide.png"
                alt="Banner6"
                placeholder="none"
                layout="fullWidth"
                objectFit="cover"
                objectPosition="50% 50%"
                loading="eager"
              />
            {/* <img src={Worldwide_left}/> */}
            </div>
        </div>
        <div className="col-lg-7 col-md-8 col-xs-12">
          <div className="content-right">
            <div className="title-support">
              <h2>Our worldwide supported countries</h2>
              <p>We can register your company across 19 countries in 4 continents. Our local experts in legal, accounting and finance can guide you through initial setup process without any hassles.</p>
            </div>
            <div className="row list-country-desktop">
              <div className="col-md-4 col-sm-4">
                <div className="content"><a href="/anguilla-company-formation">Anguilla</a></div>
              </div>
              <div className="col-md-4 col-sm-4">
                <div className="content"><a href="/bahamas-company-formation">Bahamas</a></div>
              </div>
              <div className="col-md-4 col-sm-4">
                <div className="content"><a href="/belize-company-formation">Belize</a></div>
              </div>
              <div className="col-md-4 col-sm-4">
                <div className="content"><a href="/bvi-company-formation">British Virgin Islands</a></div>
              </div>
              <div className="col-md-4 col-sm-4">
                <div className="content"><a href="/cayman-islands-company-formation">Cayman Islands</a></div>
              </div>
              <div className="col-md-4 col-sm-4">
                <div className="content"><a href="/cyprus-company-formation">Cyprus</a></div>
              </div>
              <div className="col-md-4 col-sm-4">
                <div className="content"><a href="/hong-kong-company-formation">Hong Kong</a></div>
              </div>
              <div className="col-md-4 col-sm-4">
                <div className="content"><a href="/jersey-company-formation">Jersey</a></div>
              </div>
              <div className="col-md-4 col-sm-4">
                <div className="content"><a href="/marshall-islands-company-formation">Marshall Islands</a></div>
              </div>
              <div className="col-md-4 col-sm-4">
                <div className="content"><a href="/mauritius-company-formation">Mauritius</a></div>
              </div>
              <div className="col-md-4 col-sm-4">
                <div className="content"><a href="/panama-company-formation">Panama</a></div>
              </div>
              <div className="col-md-4 col-sm-4">
                <div className="content"><a href="/samoa-company-formation">Samoa</a></div>
              </div>
              <div className="col-md-4 col-sm-4">
                <div className="content"><a href="/seychelles-company-formation">Seychelles</a></div>
              </div>
              <div className="col-md-4 col-sm-4">
                <div className="content"><a href="/singapore-company-formation">Singapore</a></div>
              </div>
              <div className="col-md-4 col-sm-4">
                <div className="content"><a href="/saint-kitts-and-nevis-company-formation">St. Kitts &amp; Nevis</a></div>
              </div>
              <div className="col-md-4 col-sm-4">
                <div className="content"><a href="/saint-vincent-company-formation">St. Vincent &amp; Grenadines</a></div>
              </div>
              <div className="col-md-4 col-sm-4">
                <div className="content"><a href="/rak-company-formation">United Arab Emirates</a></div>
              </div>
              <div className="col-md-4 col-sm-4">
                <div className="content"><a href="/united-kingdom-company-formation">United Kingdom</a></div>
              </div>
              <div className="col-md-4 col-sm-4">
                <div className="content"><a href="/vietnam-company-formation">Vietnam</a></div>
              </div>
            </div>
            <div id="list-country-mobile" className="block-country-container list-country-mobile slick-initialized slick-slider" style={{display: "nonedf"}}>
            <Slider {...settings}>
                {dataCountry.map((item, index) => (
                    <SupportCountry 
                    key={index}
                    country1={item.country1}
                    country2={item.country2}
                    country3={item.country3}
                    country4={item.country4}
                    country5={item.country5}
                    country6={item.country6}
                    />
                ))}
              </Slider>
          
              </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )};
export default Support;