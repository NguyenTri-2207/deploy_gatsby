import * as React from "react"
import Feedback from '../Card/Feedback/index.js'
import user1 from "../../images/icon-user.png"
import user2 from "../../images/icon-user2.png"
import user3 from "../../images/icon-user3.png"
import user4 from "../../images/icon-user.png"
import user5 from "../../images/icon-user.png"
import user6 from "../../images/icon-user.png"
import Slider from "react-slick"
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
const dataFeedback = [
    {
      nam: "Mia",
      img: user1,
      title: "Very professional team",
      content: "Very professional team. Fast to respond to any questions I had. Highly recommended.",  
    },
    {
        nam: "Gilbert Ngugi",
        img: user2,
        title: "Used them for a few things",
        content: "Excellent Services. Well coordinated. Opening an offshore bank account nowadays is not easy but i would highly recommend anyone to use BBCincop Limited for offshore services. Excellent Work and thank you for your performance.",  
      },
      {
        nam: "Nico Steenkamp",
        img: user3,
        title: "Nico Steenkamp",
        content: "Used BBCInc for company setup &amp; other things. They put a lot of effort to keep following up on progress, for things like banks and other services. So far so good and I will be using them soon again :)",  
      },
      {
        nam: "Marko G",
        img: user4,
        title: "Marko G",
        content: "Very professional team. Fast to respond to any questions I had. Highly recommended.",  
      },
      {
        nam: "Mia",
        img: user5,
        title: "Very professional team",
        content: "Very professional team. Fast to respond to any questions I had. Highly recommended.",  
      },
      {
        nam: "Mia",
        img: user6,
        title: "Very professional team",
        content: "Very professional team. Fast to respond to any questions I had. Highly recommended.",  
      },
]
const About = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        indicator: true,
        autoplay: true,
        nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
        responsive: [{
          breakpoint: 768,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false,
  
          }
      }]
      };
    return(
    <div className="section-about">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="content-slider">
                        <h2 className="text-center">
                          Clients talked about us on
                        <a href="https://www.trustpilot.com/review/bbcincorp.com" target="_blank" rel="noopener noreferrer" style={{color: "blue"}}>
                          Trustpilot
                          </a>
                          </h2>
                        <Slider {...settings}>
                            {dataFeedback.map((item,index) => (    
                            <Feedback
                                key={index}
                                img={item.img}
                                name={item.nam}
                                title={item.title}
                                content={item.content}
                            />
                            ))}
                        </Slider>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
   
)}
export default About;