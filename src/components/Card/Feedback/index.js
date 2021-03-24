import * as React from "react"
import Star from "../../../images/star.svg"
const Feedback = ({img,name,title,content}) => (
  <div className="content-slider">
      <div className="slick-slider">
                    <div className="dis-flex">
                      <div className="col-md-2 col-sm-3 col-xs-12">
                        <div className="content-left"><img src={img} alt=""/></div>
                      </div>
                      <div className="col-md-10 col-sm-9 col-xs-12">
                        <div className="content-right">
                          <div className="content-top">
                            <p><b>{name}</b></p>
                            <ul>
                              <li><img src={Star} alt="star"/></li>
                              <li><img src={Star} alt="star"/></li>
                              <li><img src={Star} alt="star"/></li>
                              <li><img src={Star} alt="star"/></li>
                              <li><img src={Star} alt="star"/></li>
                            </ul>
                          </div>
                          <div className="content-bottom">
                            <p><b>{title}</b></p>
                            <p>{content}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
  </div>
    
)
export default Feedback;