import * as React from "react";
import $ from 'jquery';
const Counter = () => {
    React.useEffect(()=>{
        $('.count').each(function () {
            $(this).prop('Counter', 0).animate({
                Counter: $(this).text()
            }, {
                    duration: 4000,
                    easing: 'swing',
                    step: function (now) {
                        $(this).text(Math.ceil(now));
                    }
                });
        });
    },[])
    return(
    <div className="section-counter">
        <div className="container">
          <div className="content">
            <div className="row">
              <div className="col-md-3 col-sm-6 col-xs-6">
                <div className="counter"><span className="count">12</span><span>+</span>
                  <p>Years in Business</p>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-xs-6">
                <div className="counter"><span className="count">97</span><span>%+</span>
                  <p>Recommend us</p>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-xs-6">
                <div className="counter"><span className="count">9000</span><span>+</span>
                  <p>Successful cases</p>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-xs-6">
                <div className="counter"><span className="count">2</span><span>hrs</span>
                  <p>Response within</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
)}
export default Counter;