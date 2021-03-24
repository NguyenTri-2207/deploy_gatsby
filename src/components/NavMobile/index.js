import React , {useState} from 'react';
const NavMobile = () => {
    return (
        <div className="content">
        <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
          <div className="panel panel-default">
            <div className="panel-heading" role="tab" />
            <p className="type-title-mobile custom-detail lv1"><a href="/order/step1">SET UP NOW</a></p>
          </div>
          <div className="panel panel-default">
            <div className="panel-heading" role="tab" id="services">
              <p className="type-title-mobile custom-detail lv1"><a href="/services">Services</a><a className="toggle-collapse" data-toggle="collapse" data-target="#services-1" href="javascript:void(0)"><i className="fas fa-angle-right" /></a></p>
            </div>
            <div className="panel-collapse collapse" id="services-1" role="tabpanel" aria-labelledby="services-1">
              <div className="panel-body">
                <div className="panel panel-default">
                  <div className="panel-heading" role="tab" id="headingOneOne">
                    <p className="type-title-mobile custom-detail lv2"><a>Corporation Secretary</a><a className="toggle-collapse" data-toggle="collapse" data-target="#services-11" href="javascript:void(0)"><i className="fas fa-angle-right" /></a></p>
                  </div>
                  <div className="panel-collapse collapse" id="services-11" role="tabpanel" aria-labelledby="headingOneOne">
                    <div className="panel-body">
                      <ul>
                        <li className="custom-detail lv3"><a href="/company-formation">Company Formation</a>
                        </li>
                        <li className="custom-detail lv3"><a href="/document-retrieval-service">Document
                            Retrieval Service</a></li>
                        <li className="custom-detail lv3"><a href="/company-renewal">Company Renewal</a></li>
                        <li className="custom-detail lv3"><a href="/transfer-agent">Transfer Agent</a></li>
                        <li className="custom-detail lv3"><a href="/nominee-director-shareholder">Nominee
                            Director Shareholder</a></li>
                        <li className="custom-detail lv3"><a href="/company-dissolution-and-restoration">Company
                            Dissolution and Restoration</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="panel panel-default">
                  <div className="panel-heading" role="tab" id="headingOneTwo">
                    <p className="type-title-mobile custom-detail lv2"><a href="/banking-support">Banking
                        Support</a></p>
                  </div>
                </div>
                <div className="panel panel-default">
                  <div className="panel-heading" role="tab" id="headingOneTwo">
                    <p className="type-title-mobile custom-detail lv2"><a href="/accounting-and-auditing">Accounting
                        &amp; Auditing</a></p>
                  </div>
                </div>
                <div className="panel panel-default">
                  <div className="panel-heading" role="tab" id="headingOneTwo">
                    <p className="type-title-mobile custom-detail lv2"><a href="/merchant-account">Merchant
                        Account</a></p>
                  </div>
                </div>
                <div className="panel panel-default">
                  <div className="panel-heading" role="tab" id="headingOneTwo">
                    <p className="type-title-mobile custom-detail lv2"><a href="/virtual-office">Virtual Office</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="panel panel-default">
            <div className="panel-heading" role="tab" id="countries">
              <p className="type-title-mobile custom-detail lv1"><a>Countries</a><a className="toggle-collapse" data-toggle="collapse" data-target="#countries-0" href="javascript:void(0)"><i className="fas fa-angle-right" /></a></p>
            </div>
            <div className="panel-collapse collapse" id="countries-0" role="tabpanel" aria-labelledby="headingTwo">
              <div className="panel-body">
                <div className="panel panel-default">
                  <div className="panel-heading" role="tab" id="headingOneOne">
                    <p className="type-title-mobile custom-detail lv2"><a>Location</a><a className="toggle-collapse" data-toggle="collapse" data-target="#collapseLocation" href="javascript:void(0)"><i className="fas fa-angle-right" /></a></p>
                  </div>
                  <div className="panel-collapse collapse" id="collapseLocation" role="tabpanel" aria-labelledby="collapseLocation">
                    <div className="panel-body">
                      <div className="panel panel-default">
                        <div className="panel-heading" role="tab" id="headingOneOne">
                          <p className="type-title-mobile custom-detail lv3"><a>The Americas</a><a className="toggle-collapse" data-toggle="collapse" data-target="#collapseLocation-1" href="javascript:void(0)"><i className="fas fa-angle-right" /></a></p>
                        </div>
                        <div className="panel-collapse collapse" id="collapseLocation-1" role="tabpanel" aria-labelledby="collapseLocation-1">
                          <div className="panel-body">
                            <ul>
                              <li className="custom-detail lv4"><a href="/anguilla-company-formation">Anguilla</a></li>
                              <li className="custom-detail lv4"><a href="/bahamas-company-formation">Bahamas</a></li>
                              <li className="custom-detail lv4"><a href="/belize-company-formation">Belize</a></li>
                              <li className="custom-detail lv4"><a href="/bvi-company-formation">British
                                  Virgin Islands</a></li>
                              <li className="custom-detail lv4"><a href="/cayman-islands-company-formation">Cayman Islands</a></li>
                              <li className="custom-detail lv4"><a href="/delaware-company-formation">Delaware (the US)</a></li>
                              <li className="custom-detail lv4"><a href="/panama-company-formation">Panama</a></li>
                              <li className="custom-detail lv4"><a href="/saint-kitts-and-nevis-company-formation">St. Kitts &amp;
                                  Nevis</a></li>
                              <li className="custom-detail lv4"><a href="/saint-vincent-company-formation">St. Vincent &amp;
                                  Grenadines</a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="panel panel-default">
                        <div className="panel-heading" role="tab" id="headingOneOne">
                          <p className="type-title-mobile custom-detail lv3"><a>Asia Pacific</a><a className="toggle-collapse" data-toggle="collapse" data-target="#collapseLocation-2" href="javascript:void(0)"><i className="fas fa-angle-right" /></a></p>
                        </div>
                        <div className="panel-collapse collapse" id="collapseLocation-2" role="tabpanel" aria-labelledby="collapseLocation-2">
                          <div className="panel-body">
                            <ul>
                              <li className="custom-detail lv4"><a href="/hong-kong-company-formation">Hong Kong</a></li>
                              <li className="custom-detail lv4"><a href="/marshall-islands-company-formation">Marshall Islands</a>
                              </li>
                              <li className="custom-detail lv4"><a href="/samoa-company-formation">Samoa</a></li>
                              <li className="custom-detail lv4"><a href="/singapore-company-formation">Singapore</a></li>
                              <li className="custom-detail lv4"><a href="/vietnam-company-formation">Vietnam</a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="panel panel-default">
                        <div className="panel-heading" role="tab" id="headingOneOne">
                          <p className="type-title-mobile custom-detail lv3"><a>Europe, Middle East and Africa
                              (EMEA)</a><a className="toggle-collapse" data-toggle="collapse" data-target="#collapseLocation-3" href="javascript:void(0)"><i className="fas fa-angle-right" /></a></p>
                        </div>
                        <div className="panel-collapse collapse" id="collapseLocation-3" role="tabpanel" aria-labelledby="collapseLocation-3">
                          <div className="panel-body">
                            <ul>
                              <li className="custom-detail lv4"><a href="/cyprus-company-formation">Cyprus</a></li>
                              <li className="custom-detail lv4"><a href="/jersey-company-formation">Jersey</a></li>
                              <li className="custom-detail lv4"><a href="/mauritius-company-formation">Mauritius</a></li>
                              <li className="custom-detail lv4"><a href="/seychelles-company-formation">Seychelles</a></li>
                              <li className="custom-detail lv4"><a href="/rak-company-formation">Ras Al
                                  Khaimah (UAE)</a></li>
                              <li className="custom-detail lv4"><a href="/united-kingdom-company-formation">United Kingdom</a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="panel panel-default">
                  <div className="panel-heading" role="tab" id="headingOneTwo">
                    <p className="type-title-mobile custom-detail lv2"><a>Tax rate</a><a className="toggle-collapse" data-toggle="collapse" data-target="#collapse-tax-rate" href="javascript:void(0)"><i className="fas fa-angle-right" /></a></p>
                  </div>
                  <div className="panel-collapse collapse" id="collapse-tax-rate" role="tabpanel" aria-labelledby="collapse-tax-rate">
                    <div className="panel-body">
                      <div className="panel-heading" role="tab" id="headingOneTwo">
                        <p className="type-title-mobile custom-detail lv3"><a>Zero tax</a><a className="toggle-collapse" data-toggle="collapse" data-target="#collapse-tax-rate-1" href="javascript:void(0)"><i className="fas fa-angle-right" /></a></p>
                      </div>
                      <div className="panel-collapse collapse" id="collapse-tax-rate-1" role="tabpanel" aria-labelledby="collapse-tax-rate">
                        <div className="panel-body">
                          <ul>
                            <li className="custom-detail lv4"><a href="/anguilla-company-formation">Anguilla</a></li>
                            <li className="custom-detail lv4"><a href="/bahamas-company-formation">Bahamas</a></li>
                            <li className="custom-detail lv4"><a href="/bvi-company-formation">British
                                Virgin Islands</a></li>
                            <li className="custom-detail lv4"><a href="/cayman-islands-company-formation">Cayman Islands</a></li>
                            <li className="custom-detail lv4"><a href="/delaware-company-formation">Delaware
                                (the US)</a></li>
                            <li className="custom-detail lv4"><a href="/jersey-company-formation">Jersey</a>
                            </li>
                            <li className="custom-detail lv4"><a href="/marshall-islands-company-formation">Marshall Islands</a></li>
                            <li className="custom-detail lv4"><a href="/mauritius-company-formation">Mauritius</a></li>
                            <li className="custom-detail lv4"><a href="/panama-company-formation">Panama</a>
                            </li>
                            <li className="custom-detail lv4"><a href="/samoa-company-formation">Samoa</a>
                            </li>
                            <li className="custom-detail lv4"><a href="/seychelles-company-formation">Seychelles</a></li>
                            <li className="custom-detail lv4"><a href="/saint-kitts-and-nevis-company-formation">St. Kitts &amp;
                                Nevis</a></li>
                            <li className="custom-detail lv4"><a href="/saint-vincent-company-formation">St.
                                Vincent &amp; Grenadines</a></li>
                            <li className="custom-detail lv4"><a href="/rak-company-formation">Ras Al
                                Khaimah (UAE)</a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="panel-heading" role="tab" id="headingOneTwo">
                        <p className="type-title-mobile custom-detail lv3"><a>Low tax</a><a className="toggle-collapse" data-toggle="collapse" data-target="#collapse-tax-rate-2" href="javascript:void(0)"><i className="fas fa-angle-right" /></a></p>
                      </div>
                      <div className="panel-collapse collapse" id="collapse-tax-rate-2" role="tabpanel" aria-labelledby="collapse-tax-rate">
                        <div className="panel-body">
                          <ul>
                            <li className="custom-detail lv4"><a href="/belize-company-formation">Belize</a>
                            </li>
                            <li className="custom-detail lv4"><a href="/cyprus-company-formation">Cyprus</a>
                            </li>
                            <li className="custom-detail lv4"><a href="/hong-kong-company-formation">Hong
                                Kong</a></li>
                            <li className="custom-detail lv4"><a href="/singapore-company-formation">Singapore</a></li>
                            <li className="custom-detail lv4"><a href="/united-kingdom-company-formation">United Kingdom</a></li>
                            <li className="custom-detail lv4"><a href="/vietnam-company-formation">Vietnam</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="panel panel-default">
            <div className="panel-heading" role="tab" id="resource">
              <p className="type-title-mobile custom-detail lv1"><a href="/resources">Resources</a><a className="toggle-collapse" data-toggle="collapse" data-target="#collapse-resource" href="javascript:void(0)"><i className="fas fa-angle-right" /></a></p>
            </div>
            <div className="panel-collapse collapse" id="collapse-resource" role="tabpanel" aria-labelledby="headingThree">
              <div className="panel-body">
                <ul>
                  <li className="lv2 custom-detail"><a href="/resources/articles">Articles</a></li>
                  <li className="lv2 custom-detail"><a href="/resources/news">News</a></li>
                  <li className="lv2 custom-detail"><a href="/resources/announcements">Announcements</a></li>
                  <li className="lv2 custom-detail"><a href="/name-generator" rel="nofollow">Business name
                      generator</a></li>
                  <li className="lv2 custom-detail"><a href="/faqs">Help center</a></li>
                  <li className="lv2 custom-detail"><a href="/resources/offshore-company-comparison">Offshore company
                      comparison</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="panel panel-default">
            <div className="panel-heading">
              <p className="type-title-mobile custom-detail lv1"><a href="/about-us" aria-expanded="false">About Us</a>
              </p>
            </div>
          </div>
          <div className="panel panel-default">
            <div className="panel-heading">
              <p className="type-title-mobile custom-detail lv1"><a href="/contact-us" aria-expanded="false">Contact
                  Us</a></p>
            </div>
          </div>
        </div>
      </div> 
            );

}
export default NavMobile;