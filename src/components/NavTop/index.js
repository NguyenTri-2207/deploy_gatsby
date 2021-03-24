import * as React from "react"
import './index.scss';
const NavTop = () => (
    <div className="contact-info">
        <div className="container">
          <div className="mail"><span><i className="fa fa-envelope" aria-hidden="true"></i></span><a href="mailto:service@bbcincorp.com">service@bbcincorp.com</a></div>
          <div className="skype"><span><i className="fab fa-skype"></i></span><a href="skype:live:bbcincorp?chat">live:bbcincorp</a></div>
          <div className="help"><a href="/partner-with-bbcincorp" rel="nofollow">Become Our Partner</a></div>
        </div>
      </div>
)
export default NavTop;

