import * as React from "react"
import face_social from "../../images/face-social.png";
import twt_social from "../../images/twt-social.png";
import youtube from "../../images/youtube.png";
import ins_social from "../../images/ins-social.png";
import visafooter from "../../images/visafooter.png";
import master_card from "../../images/master-card.png";
import americas from "../../images/americas.png";
import paypal from "../../images/paypal.png";
import stripe from "../../images/stripe.png";
import img_dcma from "../../images/img-dcma.png";
import jcb from "../../images/jcb.png";
import discover from "../../images/discover.png";
import dcma from "../../images/img-dcma.png";
import visa_footer from "../../images/visa-footer.png";
import master_footer from "../../images/master-footer.png";
import paypal_footer from "../../images/paypal-footer.png";
import jcb_footer from "../../images/jcb-footer.png";
import discover_mb from "../../images/discover-footer.png";
import express_mb from "../../images/express-footer.png";
import stripe_mb from "../../images/stripe-footer.png";
import logo_footer from "../../images/logo-footer.png";
const Footer = () => (
    <footer className="footer">
      <div className="container">
        <div className="wrapper row desktop">
          <div className="logo-container col-lg-2 col-md-1 col-sm-3 col-xs-12">
            <div className="logo"><img className="logo-bbc" src={logo_footer}alt="bbc_logo"/></div>
            <ul>
              <li><a href="https://www.facebook.com/bbcincorp/" target="_blank" rel="noopener noreferrer"><img className="b-lazy b-loaded" alt="face" src={face_social}/></a></li>
              <li><a href="https://twitter.com/bbcincorp" target="_blank" rel="noopener noreferrer"><img className="b-lazy b-loaded" alt="twt" src={twt_social}/></a></li>
              <li><a href="https://www.youtube.com/channel/UCm9z045jcWyhncuHoyYNbMw" target="_blank" rel="noopener noreferrer"><img className="b-lazy b-loaded" alt="yt" src={youtube}/></a></li>
              <li><a href="https://www.linkedin.com/company/bbcincorp/" target="_blank" rel="noopener noreferrer"><img className="b-lazy b-loaded" alt="ins" src={ins_social}/></a></li>
            </ul>
          </div>
          <div className="wrapper-custom col-lg-6 col-md-7 col-sm-6 col-xs-12">
            <div className="textwidget">
              <div className="title">Contact Us </div>
              <ul>
                <li><a href="skype:live:bbcincorp?chat"><i className="fab fa-skype"></i><span>live:bbcincorp</span></a></li>
                <li><a href="mailto:service@bbcincorp.com"><i className="far fa-envelope"></i><span>service@bbcincorp.com</span></a></li>
                <li><span><i className="far fa-phone" aria-hidden="true"></i><a href="tel:+85281928666">(+852) 8192 8666</a></span></li>
                <li><span><i className="far fa-phone" aria-hidden="true"></i><a href="tel:+6531381666">(+65) 3138 1666</a></span></li>
                <li><span><i className="far fa-building"></i></span><a href="https://goo.gl/maps/adod2kPo4Ht2GXXH9" target="_blank" rel="noopener noreferrer">​Room 9, 4F, Beverley Commercial Centre, 87-105 Chatham road South, Tsim Sha Tsui, Kowloon, Hong Kong</a></li>
                <li><a href="#"><i className="far fa-building"></i><span>68 Circular road, #02-01 Singapore (049422), Singapore</span></a></li>
              </ul>
              <ul className="img">
                <li className="dcma"><a className="dmca-badge" href="http://www.dmca.com/Protection/Status.aspx?ID=1db12910-cb8b-41ab-9646-015b91ecb2c9&amp;refurl=http://localhost:3000/" title="DMCA.com Protection Status" target="_blank" rel="noopener noreferrer"><img src={img_dcma} alt="DMCA.com Protection Status"/></a></li>
                <li><img className="b-lazy b-loaded" alt="visa-card" src={visafooter}/><img className="b-lazy b-loaded" alt="jcb-card" src={jcb}/></li>
                <li><img className="b-lazy b-loaded" alt="master-card" src={master_card}/><img className="b-lazy b-loaded" alt="dis-card" src={discover}/></li>
                <li>
                    <img className="b-lazy b-loaded" alt="paypal-card" src={paypal}/>
                    <img className="b-lazy b-loaded" alt="aex-card" src={americas}/>
                </li>
                <li className="img4">
                    <img className="b-lazy b-loaded" alt="stripe-card" src={stripe}/>
                </li>
              </ul>
            </div>
          </div>
          <div className="wrapper-custom col-lg-2 col-md-2 col-sm-6 col-xs-12">
            <div className="textwidget">
              <div className="title">Our Services</div>
              <ul>
                <li><a href="/company-formation">Company Formation</a></li>
                <li><a href="/banking-support">Banking Support</a></li>
                <li><a rel="nofollow" href="/accounting-and-auditing">Accounting &amp; Auditing</a></li>
                <li><a rel="nofollow" href="/virtual-office">Virtual Office</a></li>
              </ul>
            </div>
            <div className="textwidget">
              <div className="title">Useful Links</div>
              <ul>
                <li><a href="/partner-with-bbcincorp" rel="nofollow">Become Our Partner</a></li>
                <li><a href="/payment-guideline" rel="nofollow">Payment Guideline</a></li>
                <li><a href="/make-payment" rel="nofollow">Make Payment</a></li>
                <li><a href="/order-processing" rel="nofollow">Order Process</a></li>
                <li><a href="/faqs" rel="nofollow">Help Center</a></li>
                <li><a href="/whitelist-guide" rel="nofollow">Whitelist Guide</a></li>
              </ul>
            </div>
          </div>
          <div className="wrapper-custom col-lg-2 col-md-2 col-sm-6 col-xs-12">
            <div className="textwidget">
              <div className="title">Terms &amp; Policy</div>
              <ul>
                <li><a href="/terms-of-services" rel="nofollow">Terms of Service</a></li>
                <li><a href="/legal-of-agreement" rel="nofollow">Legal Agreement</a></li>
                <li><a href="/refund-policy" rel="nofollow">Refund Policy</a></li>
                <li><a href="/privacy-policy" rel="nofollow">Privacy Policy</a></li>
                <li><a href="/fatf-compliance" rel="nofollow">FATF Compliance</a></li>
                <li><a href="/fatca-policy" rel="nofollow">FATCA Policy</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="wrapper row mobile">
          <div className="col-md-12">
            <div className="textwidget">
              <ul>
                <li><a href="skype:live:bbcincorp?chat"><i className="fab fa-skype"></i><span>live:bbcincorp</span></a></li>
                <li><a href="mailto:service@bbcincorp.com"><i className="far fa-envelope"></i><span>service@bbcincorp.com</span></a></li>
                <li><a href="tel:+85281928666"><i className="far fa-phone" aria-hidden="true"></i><span>(+852) 8192 8666</span></a></li>
                <li><a href="tel:+6531381666"><i className="far fa-phone" aria-hidden="true"></i><span>(+65) 3138 1666</span></a></li>
                <li><span><i className="far fa-building"></i></span><a href="https://goo.gl/maps/adod2kPo4Ht2GXXH9" target="_blank" rel="noopener noreferrer">​Room 9, 4F, Beverley Commercial Centre, 87-105 Chatham road South, Tsim Sha Tsui, Kowloon, Hong Kong</a></li>
                <li><span> <i className="far fa-building"></i></span><a href="#">68 Circular road, #02-01 Singapore (049422), Singapore</a></li>
              </ul>
            </div>
          </div>
          <div className="col-md-12">
            <div className="service-footer resp"><a className="sub-title" href="#service-footer" data-toggle="collapse">Our Services<i className="far fa-chevron-down"></i></a>
              <div className="collapse" id="service-footer">
                <ul>
                  <li><a href="/company-formation">Company Formation</a></li>
                  <li><a href="/banking-support">Banking Support</a></li>
                  <li><a rel="nofollow" href="/accounting-and-auditing">Accounting &amp; Auditing</a></li>
                  <li><a rel="nofollow" href="/virtual-office">Virtual Office</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <div className="userLink-footer resp"><a className="sub-title" href="#userLink-footer" data-toggle="collapse">Useful Links<i className="far fa-chevron-down"></i></a>
              <div className="collapse" id="userLink-footer">
                <ul>
                  <li><a href="/partner-with-bbcincorp" rel="nofollow">Become Our Partner</a></li>
                  <li><a href="/payment-guideline" rel="nofollow">Payment Guideline</a></li>
                  <li><a href="/make-payment" rel="nofollow">Make Payment</a></li>
                  <li><a href="/order-processing" rel="nofollow">Order Process</a></li>
                  <li><a href="/faqs" rel="nofollow">Help Center</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <div className="term-footer resp"><a className="sub-title" href="#term-footer" data-toggle="collapse">Term &amp; Policy<i className="far fa-chevron-down"></i></a>
              <div className="collapse" id="term-footer">
                <ul>
                  <li><a href="/terms-of-services" rel="nofollow">Terms of Service</a></li>
                  <li><a href="/legal-of-agreement" rel="nofollow">Legal Agreement</a></li>
                  <li><a href="/refund-policy" rel="nofollow">Refund Policy</a></li>
                  <li><a href="/privacy-policy" rel="nofollow">Privacy Policy</a></li>
                  <li><a href="/fatf-compliance" rel="nofollow">FATF Compliance</a></li>
                  <li><a href="/fatca-policy" rel="nofollow">FATCA Policy</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-copy row">
          <div className="col-md-12">
            <div className="img-resp">
              <ul className="img">
                <li className="dcma"><a className="dmca-badge" href="http://www.dmca.com/Protection/Status.aspx?ID=1db12910-cb8b-41ab-9646-015b91ecb2c9&amp;refurl=http://localhost:3000/" title="DMCA.com Protection Status" rel="noopener noreferrer" target="_blank"><img src={dcma} alt="DMCA.com Protection Status"/></a></li>
                <li>
                  <ul className="img-payment">
                    <li><img className="b-lazy" src={visa_footer} alt="visa-card"/></li>
                    <li><img className="b-lazy" src={master_footer} alt="master-card"/></li>
                    <li><img className="b-lazy" src={paypal_footer} alt="paypal-card"/></li>
                    <li><img className="b-lazy" src={jcb_footer} alt="jcb-card"/></li>
                    <li><img className="b-lazy" src={discover_mb} alt="dis-card"/></li>
                    <li><img className="b-lazy" src={express_mb} alt="aex-card"/></li>
                    <li><img className="b-lazy" src={stripe_mb} alt="stripe-card"/></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-12">
            <div className="copyright first">
              This site is owned by BBCIncorp Limited - a Hong Kong based company with Registration number:
              2508698 and D-U-N-S number: 664611652
            </div>
          </div>
          <div className="col-md-12">
            <div className="copyright">2019 © BBCIncorp Limited - Copyright All Rights Reserved</div>
          </div>
        </div>
      </div>
    </footer>
)
export default Footer;