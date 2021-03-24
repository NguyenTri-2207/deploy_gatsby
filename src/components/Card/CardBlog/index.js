import * as React from "react"
import {GiSandsOfTime} from "react-icons/gi"
const CardBlog = ({title,des,time,img,href}) => (
    <div className="item-article">
         <div className="img"><img src={img} alt="delaware-llc-advantages-disadvantages"/></div>
            <div className="content">
                <p className="sub-title text-center"><a href={href}>{title}</a></p>
                <p className="des">{des}</p>
            <div className="right-bottom"><span><i className="fas fa-hourglass-half"><GiSandsOfTime/></i>{time}</span><a href="/resources/delaware-llc-advantages-disadvantages">Read more<i className="far fa-angle-double-right"></i></a></div>
        </div>
    </div>
)
export default CardBlog;
 