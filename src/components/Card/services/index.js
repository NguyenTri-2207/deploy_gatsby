import * as React from "react"
const Services = () => (
    <div id= "services-content" className="container mega-menu-content">
        <div className="row">
        <div className="col-lg-4 col-md-4">
        <div className="menu-block-right text-align-left">
            <p className="title">Corporate Secretary</p>
            <p className="pt-15">Set up and manage your oversea company across the globe</p>
            <ul>
                <li className="tran-double-arrow"><a className="vertical-align-bottom" href="/company-formation">Company
                        Formation<i className="far fa-angle-double-right"></i></a></li>
                <li className="tran-double-arrow"><a className="vertical-align-bottom"
                        href="/document-retrieval-service">Document Retrieval Service<i
                            className="far fa-angle-double-right"></i></a></li>
                <li className="tran-double-arrow"><a className="vertical-align-bottom" href="/company-renewal">Company Renewal<i
                            className="far fa-angle-double-right"></i></a></li>
                <li className="tran-double-arrow"><a className="vertical-align-bottom" href="/transfer-agent">Transfer Agent<i
                            className="far fa-angle-double-right"></i></a></li>
                <li className="tran-double-arrow"><a className="vertical-align-bottom"
                        href="/nominee-director-shareholder">Nominee Director Shareholder<i
                            className="far fa-angle-double-right"></i></a></li>
                <li className="tran-double-arrow"><a className="vertical-align-bottom"
                        href="/company-dissolution-and-restoration">Company Dissolution and Restoration<i
                            className="far fa-angle-double-right"></i></a></li>
            </ul><img className="img-service service" src="/images/menu/1.png" alt=""/>
        </div><a className="all-service" href="/services">See all services<i className="far fa-angle-double-right"></i></a>
    </div>
    <div className="col-lg-8 col-md-8">
        <div className="menu-block-right text-align-left hover-block-shadow"><a className="title-link"
                href="/banking-support">Banking Support<i className="far fa-angle-double-right"></i></a>
            <p>Open corporate bank accounts in offshore financial centers and leading financial hubs in Asia</p><img
                className="img-service" src="/images/menu/2.png" alt=""/>
        </div>
        <div className="menu-block-right text-align-left hover-block-shadow"><a className="title-link"
                href="/accounting-and-auditing">Accounting &amp; Auditing<i className="far fa-angle-double-right"></i></a>
            <p>Fulfill annual reporting requirements with outsourced accounting and auditing activities</p><img
                className="img-service" src="/images/menu/3.png" alt=""/>
        </div>
        <div className="menu-block-right text-align-left hover-block-shadow"><a className="title-link"
                href="/merchant-account">Merchant Account<i className="far fa-angle-double-right"></i></a>
            <p>Start receiving online payments with a merchant account</p><img className="img-service"
                src="/images/menu/4.png" alt=""/>
        </div>
        <div className="menu-block-right text-align-left hover-block-shadow"><a className="title-link"
                href="/virtual-office">Virtual Office<i className="far fa-angle-double-right"></i></a>
            <p>Enhance your business image with a mailing address in prime locations</p><img className="img-service"
                src="/images/menu/5.png" alt=""/>
        </div>
    </div>
        </div>
</div>
)
export default Services;