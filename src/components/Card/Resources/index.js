import * as React from "react"
import News from "../../../images/menu/news.png"
import Anouncements from "../../../images/anouncements.jpg"
import Articles from "../../../images/articles.jpg"
const Resources = () => (
    <div id="resource-content" className="container mega-menu-content" style={{top: 118}}>
        <div className="row">
                  <div className="col-lg-3 col-md-3">
                    <div className="block-resource hover-block-shadow"> <img src={Articles} alt="articles"/>
                      <p className="title"><a className="title-link" href="/resources/articles"> Articles </a></p>
                      <p className="info roboto-14 pt-15">Make informed decisions with news and insights</p>
                          <div className="button-bg button-type-white"><a rel="" href="/resources/articles">
                              <button className="btn button">Learn more</button></a></div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-3">
                    <div className="block-resource hover-block-shadow"> <img src={News} alt="news"/>
                      <p className="title"><a className="title-link" href="/resources/news">News</a></p>
                      <p className="info roboto-14 pt-15">Explore latest business news</p>
                          <div className="button-bg button-type-white"><a rel="" href="/resources/news">
                              <button className="btn button">Learn more</button></a></div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-3">
                    <div className="block-resource hover-block-shadow"> <img src={Anouncements} alt="anouncements"/>
                      <p className="title"><a className="title-link" href="/resources/announcements">Announcements</a></p>
                      <p className="info roboto-14 pt-15">Get updated information about us</p>
                          <div className="button-bg button-type-white"><a rel="" href="/resources/announcements">
                              <button className="btn button">Learn more</button></a></div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-3">
                    <div className="other-resource">
                      <p className="title text-left">Other Resources</p>
                      <ul>
                        <li className="text-left"><a href="/name-generator" rel="nofollow">Business name generator<i className="far fa-angle-double-right"></i></a></li>
                        <li className="text-left"><a href="/faqs">Help center<i className="far fa-angle-double-right"></i></a></li>
                        <li className="text-left"><a href="/resources/offshore-company-comparison">Offshore company comparison<i className="far fa-angle-double-right"></i></a></li>
                      </ul><a className="all-service" href="/resources">See all resources<i className="far fa-angle-double-right"></i></a>
                    </div>
                  </div>
        </div>
</div>
)
export default Resources;