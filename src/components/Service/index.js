import * as React from "react"
import serviceHome1 from "../../images/servive-home1.png"
import serviceHome2 from "../../images/servive-home2.png"
import serviceHome3 from "../../images/servive-home3.png"
const Service = () => (
    <section className="section-service">
    <div className="container">
      <div className="content-service text-center">
        <h2>Our Main Services</h2>
        <p>We cover a wide range of corporate services to help your business get things done right from the start, and other supporting areas that keep it running smoothly during company operation.</p>
        <div className="row-service dis-flex">
          <div className="cl-md-4">
            <div className="service-first service-block"><a href="/company-formation">
                <div className="img-icon"><img className="b-lazy b-loaded" alt="icon-build" src={serviceHome1}/></div>
                <div className="content">
                  <h3>Company formation</h3>
                  <p>We specialise in forming companies operating outland economic activities in low tax jurisdictions as well as major financial centres such as Singapore, Hong Kong, and United Kingdom. With a full range of supporting corporate services, we can help you easily manage your company during your operation.</p>
                </div></a></div>
          </div>
          <div className="cl-md-4">
            <div className="service-block"><a href="/banking-support">
                <div className="img-icon"><img className="b-lazy b-loaded" alt="icon-note" src={serviceHome2}/></div>
                <div className="content">
                  <h3>Open Bank Account</h3>
                  <p>We offer bank account introduction in offshore jurisdictions as well as financial hubs in Asia where your money can be safe and ready for global trading without currency control. A wide banking network and a healthy long-term relationship with international and offshore banks allow us to better serve customers with various objectives.</p>
                </div></a></div>
          </div>
          <div className="cl-md-4">
            <div className="service-block"><a href="/accounting-and-auditing">
                <div className="img-icon"><img className="b-lazy b-loaded" alt="icon-block" src={serviceHome3}/></div>
                <div className="content">
                  <h3>Accounting &amp; Auditing</h3>
                  <p>A huge amount of resources companies is spent each year for reporting, tax &amp; legal compliance function. We can alleviate the time consuming and costly burden by providing you the cost effective accounting services, keeping up-to-date regulatory compliance and accounting and reporting areas for your oversea business.</p>
                </div></a></div>
          </div>
        </div>
      </div>
      <div className="btn-service">
        <button className="btn btn-submit btn-hover" type="button" onClick="window.location.href = &quot;/services&quot;">Explore Services</button>
      </div>
    </div>
  </section>
)
export default Service;