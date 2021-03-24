import * as React  from "react"
import './index.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { StaticImage } from "gatsby-plugin-image"
import Slider from "react-slick";
import Select, { components } from "react-select";
import {AiOutlineCaretDown} from "react-icons/ai";
import $ from 'jquery'

const applyYourCompanyHome = () => {
  var companyName = $('#yourCompany').val();
  console.log(companyName)
  // $('#yourCompany').val(bla);
	// const companyName = document.querySelector(".home-page #yourCompany").value;
  const countryId = $('.home-page select[name=slct-country-home]').id;
  console.log(countryId)
	window.location.href = "/order/step1?countryId=" + countryId + "&companyName=" + companyName;
}
const CustomOption = (props) => (
  <components.Option {...props}>
    <div style={{ display: "flex" }}>
      <div style={{ marginRight: 15 , fontSize: 20 }} className={props.data.className} />
      <span >{props.data.label}</span>
    </div>
  </components.Option>
)
const DropdownIndicator =(props) => (
  <components.DropdownIndicator {...props}>
    <AiOutlineCaretDown style={{color: "black"}}/>
    </components.DropdownIndicator>
)
const customStyles = {
  container: (provided) => ({
    ...provided,
    fontSize: 20,
  }),
  control: (provided) => ({
    ...provided,
    border: 'none',
    boxShadow: 'none',
    cursor: "pointer",
    fontSize: 14,
    minHeight: 20,
  }),
  option: (provided) => ({
    ...provided,
    fontSize: 14,
    cursor: "pointer",
  })
}
const options = [
  {id: 1, label: "Anguilla", value: "Anguilla", className: 'flag-icon flag-icon-ai'},
  {id: 3, label: "Bahamas", value:"Bahamas", className:"flag-icon flag-icon-bs"},
  {id: 4, label: "Belize", value: "Belize" , className:"flag-icon flag-icon-bz"},
  {id: 5, label: "British Virgin Islands", value: "British Virgin Islands" , className:"flag-icon flag-icon-vg"},
  {id: 6, label: "Cayman Islands", value: "Cayman Islands" , className:"flag-icon flag-icon-ky"},
  {id: 7, label: "Cyprus", value: "Cyprus", className:"flag-icon flag-icon-cy"},
  {id: 8, label: "Hong Kong", value: "Hong Kong", className:"flag-icon flag-icon-hk"},
  {id: 9, label: "Jersey", value: "Jersey", className:"flag-icon flag-icon-je"},
  {id: 10, label: "Marshall Islands", value:"Marshall Islands" , className:"flag-icon flag-icon-mh"},
  {id: 11, label: "Mauritius", value: "Mauritius", className:"flag-icon flag-icon-mu"},
  {id: 12, label: "Panama", value: "Panama", className:"flag-icon flag-icon-pa"},
  {id: 13, label: "Samoa", value: "Samoa", className:"flag-icon flag-icon-ws"},
  {id: 14, label: "Seychelles", value: "Seychelles", className:"flag-icon flag-icon-sc"},
  {id: 15, label: "Singapore", value: "Singapore", className:"flag-icon flag-icon-sg"},
  {id: 16, label: "St. Kitts & Nevis", value:"St. Kitts & Nevis" , className:"flag-icon flag-icon-kn"},
  {id: 17, label: "St. Vincent & Grenadines", value:"St. Vincent & Grenadines" , className:"flag-icon flag-icon-vc"},
  {id: 18, label: "Ras Al Khaimah (UAE)", value:"Ras Al Khaimah (UAE)" ,className:"flag-icon flag-icon-ae"},
  {id: 19, label: "United Kingdom", value: "United Kingdom" ,className:"flag-icon flag-icon-gb"},

];


const Banner = () => {
  const [country, setCountry] = React.useState(options[0]);
  const handedOnchange = (newCountry) =>(
    setCountry(newCountry)
);
// console.log(handedOnchange)
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    indicator: true,
    responsive: [
      {
        breakpoint: 768,
          settings: {
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          indicator: true,
          dots: false,
        }
      },
    ],
  };
  return (
    <section className="section-banner">

      <div className="carousel slide" id="carousel-banner" data-ride="carousel">
        <Slider {...settings} className="carousel-inner">
          <div className="item">
               <StaticImage
               className="img-slider1"
                src="../../images/Banner6.png"
                alt="Banner6"
                placeholder="none"
                layout="fullWidth"
                objectFit="cover"
                objectPosition="50% 50%"
                loading="eager"
              />
          </div>
          <div className="item">
              <StaticImage
                className="img-slider2"
                  src="../../images/home-banner3.png"
                  alt="Banner6"
                  placeholder="none"
                  layout="fullWidth"
                  objectFit="cover"
                  objectPosition="50% 50%"
                  loading="eager"
                />
          </div>
          <div className="item">
              <StaticImage
                  className="img-slider3"
                    src="../../images/home-banner4.png"
                    alt="Banner6"
                    placeholder="none"
                    layout="fullWidth"
                    objectFit="cover"
                    objectPosition="50% 50%"
                    loading="eager"
                  />
          </div>
          <div className="item">
              <StaticImage
                className="img-slider4"
                  src="../../images/home-banner5.png"
                  alt="Banner6"
                  placeholder="none"
                  layout="fullWidth"
                  objectFit="cover"
                  objectPosition="50% 50%"
                  loading="eager"
                />
          </div>
          <div className="item">
              <StaticImage
                className="img-slider5"
                  src="../../images/Banner5.png"
                  alt="Banner6"
                  placeholder="none"
                  layout="fullWidth"
                  objectFit="cover"
                  objectPosition="50% 50%"
                  loading="eager"
                />
          </div>
        </Slider>
      </div>
      <div className="content">
        <div className="container">
          <div className="row">
            <div className="col-md-10 col-md-offset-1">
              <div className="content-bannercf">
                <h1>Easy to Start-up your business</h1>
                <p>Let us help you get rid of your daunting task of setting up your company overseas. <br />Easily &amp; quickly form your business in just a few clicks. <br />Fast, Simple and No hidden fee.</p>
              </div>
              <div className="form-searchcf">
                <form className="dis-flex">
                  <div className="form-group dropdown-select form-nation">
                    <div className="dropdown bootstrap-select form-control bs3" style={{ border: "none"}}>
                      <Select
                        value={{
                          label: (
                            <div style={{ display: "flex" }}>
                              <div style={{ marginRight: 15 , fontSize: 20}} className={country.className} />
                              <span >{country.label}</span>
                            </div>
                          ),
                          value: country.value
                        }}
                        options={options}
                        styles={customStyles}
                        components={{
                          Option: CustomOption,
                          IndicatorSeparator: () => null,
                          DropdownIndicator: DropdownIndicator,
                        }}
                        onChange = {handedOnchange}
                        
                      />
                    </div>
                  </div>
                  <div className="form-right dis-flex">
                    <input className="form-control form-company" type="text" id="yourCompany" placeholder="Your company name" />
                    <button className="btn btn-apply" type="button" onClick= {applyYourCompanyHome} >Apply your company</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Banner;


