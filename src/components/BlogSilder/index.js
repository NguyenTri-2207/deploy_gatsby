import * as React from "react"
import img1 from "../../images/bg-article.jpg";
import Slider from "react-slick";
import CardBlog from "../Card/CardBlog";
import "./index.scss"
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
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
const dataBlog = [
  {
    title: "Delaware (the US) to become the 20th jurisdiction in BBCIncorp’s global serviced list",
    des: "Delaware (the US) is the latest destination in the service list of BBCIncorp, expanding our network to 20 incorporation jurisdictions in total.",
    time: "1 MIN READ",
    img :"https://bbcincorp.com/wp-content/uploads/2021/03/delaware-anns-cover-FINAL.jpg",
    href: "/resources/delaware-the-us-to-become-the-20th-jurisdiction-in-bbcincorps-global-serviced-list"
  },
  {
    title: "Delaware (the US) to become the 20th jurisdiction in BBCIncorp’s global serviced list",
    des: "Delaware (the US) is the latest destination in the service list of BBCIncorp, expanding our network to 20 incorporation jurisdictions in total.",
    time: "1 MIN READ",
    img :"https://bbcincorp.com/wp-content/uploads/2021/03/delaware-llc-benefits-and-drawbacks.jpg",
    href: "/resources/delaware-llc-advantages-disadvantages"
  },
  {
    title: "Delaware (the US) to become the 20th jurisdiction in BBCIncorp’s global serviced list",
    des: "Delaware (the US) is the latest destination in the service list of BBCIncorp, expanding our network to 20 incorporation jurisdictions in total.",
    time: "1 MIN READ",
    img :"https://bbcincorp.com/wp-content/uploads/2021/03/starting-a-business-in-delaware.jpg",
    href: "/resources/starting-a-business-in-delaware"
  },
  {
    title: "Delaware (the US) to become the 20th jurisdiction in BBCIncorp’s global serviced list",
    des: "Delaware (the US) is the latest destination in the service list of BBCIncorp, expanding our network to 20 incorporation jurisdictions in total.",
    time: "1 MIN READ",
    img :"https://bbcincorp.com/wp-content/uploads/2021/03/delaware-anns-cover-FINAL.jpg" ,
    href: "/resources/delaware-the-us-to-become-the-20th-jurisdiction-in-bbcincorps-global-serviced-list"
  },
  {
    title: "Delaware (the US) to become the 20th jurisdiction in BBCIncorp’s global serviced list",
    des: "Delaware (the US) is the latest destination in the service list of BBCIncorp, expanding our network to 20 incorporation jurisdictions in total.",
    time: "1 MIN READ",
    img :"https://bbcincorp.com/wp-content/uploads/2021/03/delaware-llc-benefits-and-drawbacks.jpg",
    href :"https://bbcincorp.com/wp-content/uploads/2021/03/delaware-anns-cover-FINAL.jpg" ,
  },
  {
    title: "Delaware (the US) to become the 20th jurisdiction in BBCIncorp’s global serviced list",
    des: "Delaware (the US) is the latest destination in the service list of BBCIncorp, expanding our network to 20 incorporation jurisdictions in total.",
    time: "1 MIN READ",
    img :"https://bbcincorp.com/wp-content/uploads/2021/03/starting-a-business-in-delaware.jpg",
    href :"https://bbcincorp.com/wp-content/uploads/2021/03/delaware-anns-cover-FINAL.jpg" ,
  },
  {
    title: "Delaware (the US) to become the 20th jurisdiction in BBCIncorp’s global serviced list",
    des: "Delaware (the US) is the latest destination in the service list of BBCIncorp, expanding our network to 20 incorporation jurisdictions in total.",
    time: "1 MIN READ",
    img :"https://bbcincorp.com/wp-content/uploads/2021/03/delaware-anns-cover-FINAL.jpg",
    href :"https://bbcincorp.com/wp-content/uploads/2021/03/delaware-anns-cover-FINAL.jpg" ,
  },
]

const BlogSilder = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    indicator: true,
    autoplay: true,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return(
    <div className="section-blogslider b-lazy b-loaded" style={{backgroundImage: `url(${img1})`}}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="title">
                <h2>Industry News &amp; Insights</h2><a href="/resources">View All<i className="far fa-angle-double-right"></i></a>
              </div>
              <div className="blog-slider">
                <Slider id="article-slider"  {...settings}>
                    {dataBlog.map((item,index) => (
                      <CardBlog
                      key={index}
                      title={item.time}
                      des={item.des}
                      time={item.time}
                      img={item.img}
                      href={item.href}
                      />
                    ))}
                </Slider>
              </div>
              <div className="content-article clearfix">
                  {/* <!-- Pin Post --> */}
                <div className="col-md-8 col-sm-7">
                  <div className="item-article">
                    <div className="img b-lazy b-loaded" style={{backgroundImage: `url("https://bbcincorp.com/wp-content/uploads/2021/03/delaware-llc-benefits-and-drawbacks.jpg")`}}></div>
                    <div className="content">
                      <p className="sub-title text-center"><a href="/resources/delaware-llc-advantages-disadvantages">Delaware LLC with its benefits and drawbacks</a></p>
                      <p className="des">Why incorporate in Delaware? Along with tons of benefits, Delaware LLC also has some drawbacks. Let’s take a closer look at its advantages and disadvantages!</p>
                      <div className="right-bottom"><span><i className="fas fa-hourglass-half"></i>4 MIN READ</span><a href="/resources/delaware-llc-advantages-disadvantages">Read more<i className="far fa-angle-double-right"></i></a></div>
                    </div>
                  </div>
                  <div className="item-article">
                    <div className="img b-lazy" style={{backgroundImage: `url("https://bbcincorp.com/wp-content/uploads/2021/03/starting-a-business-in-delaware.jpg")`}}></div>
                    <div className="content">
                      <p className="sub-title text-center"><a href="/resources/starting-a-business-in-delaware">Starting a business in Delaware: A guide you can't miss</a></p>
                      <p className="des">Starting a business in Delaware might be no easy task. There are requirements that need to be taken into consideration. Let's find out more with BBCIncorp!</p>
                      <div className="right-bottom"><span><i className="fas fa-hourglass-half"></i>6 MIN READ</span><a href="/resources/starting-a-business-in-delaware">Read more<i className="far fa-angle-double-right"></i></a></div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-5">
                  <div className="item-article">
                    <div className="img b-lazy b-loaded"  style={{backgroundImage: `url("https://bbcincorp.com/wp-content/uploads/2021/03/delaware-anns-cover-FINAL.jpg")`}}> </div>
                    <div className="content">
                      <p className="sub-title text-center"><a href="/resources/delaware-the-us-to-become-the-20th-jurisdiction-in-bbcincorps-global-serviced-list">Delaware (the US) to become the 20th jurisdiction in BBCIncorp’s global serviced list</a></p>
                      <p className="des">Delaware (the US) is the latest destination in the service list of BBCIncorp, expanding our network to 20 incorporation jurisdictions in total.</p>
                      <div className="right-bottom"><span><i className="fas fa-hourglass-half"></i>1 MIN READ</span><a href="/resources/delaware-the-us-to-become-the-20th-jurisdiction-in-bbcincorps-global-serviced-list">Read more<i className="far fa-angle-double-right"></i></a></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
)}
export default BlogSilder;