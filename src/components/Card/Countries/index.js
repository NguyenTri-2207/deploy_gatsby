import * as React from "react"
import $ from "jquery"
const Countries = () => {
    React.useEffect(()=>{
        // export function updateCountriesContentHover() {
            const locationId = $("#country-content-location-01");
            const taxrateId = $("#country-content-taxrate-02");
            $("#countries-ul").children(".country-content-location").on("mouseover", function (event) {
              $(".text-left").not(this).removeClass("active");
              $(this).addClass("active");
              $(taxrateId).removeClass("active");
              $(locationId).addClass("active");
            });
            $("#countries-ul").children(".country-content-taxrate").on("mouseover", function (event) {
              $(".text-left").not(this).removeClass("active");
              $(this).addClass("active");
              $(locationId).removeClass("active");
              console.log(taxrateId);
              $(taxrateId).addClass("active");
            });
        //   }
        // let id;
        // $('#TaxRate').on("mouseover",function () {
        //       $('.menu-container-left li').on("mouseover",function () {
        //           id = $(this).attr('data-content');
        //           $('.menu-container-left li').removeClass('active');
        //           $(`.${id.replace('#', '')}`).addClass('active');
  
        //           $('.menu-container-right').removeClass('active');
        //           $(id).addClass('active');
  
        //       }, function () {
        //       })
        //   }, function () {
        //       $(`#countries .menu-container-right`).removeClass('active');
        //       $('.menu-container-left li').removeClass('active');
        //       $('.menu-container-left li').first().addClass('active');
        //       $('#countries').find('.menu-container-right').first().addClass('active');
        //   })
    },[]);
    return(
    <div id="countries-content" className="container mega-menu-content" style={{top: 118}}>
        <div className="row">
                  <div className="col-lg-3 menu-container-left col-md-3">
                    <ul id="countries-ul">
                      <li className="country-content-location text-left active" data-content="#country-content-location">Location</li>
                      <li id="TaxRate" className="country-content-taxrate text-left" data-content="#country-content-taxrate">Tax rate</li>
                    </ul>
                  </div>
                  <div className="col-lg-9 col-md-9 menu-container-right pdright-0 active" id="country-content-location-01">
                      <div className="row">
                    <div className="col-lg-4 col-md-4">
                      <div className="menu-block-right">
                        <p className="country-right-title">The Americas</p>
                        <ul>
                          <li className="hover-500"><a href="/anguilla-company-formation">Anguilla</a></li>
                          <li className="hover-500"><a href="/bahamas-company-formation">Bahamas</a></li>
                          <li className="hover-500"><a href="/belize-company-formation">Belize</a></li>
                          <li className="hover-500"><a href="/bvi-company-formation">British Virgin Islands</a></li>
                          <li className="hover-500"><a href="/cayman-islands-company-formation">Cayman Islands</a></li>
                          <li className="hover-500"><a href="/delaware-company-formation">Delaware (the US)</a></li>
                          <li className="hover-500"><a href="/panama-company-formation">Panama</a></li>
                          <li className="hover-500"><a href="/saint-kitts-and-nevis-company-formation">St. Kitts &amp; Nevis</a></li>
                          <li className="hover-500"><a href="/saint-vincent-company-formation">St. Vincent &amp; Grenadines</a></li>
                        </ul><img src="/images/menu/TheAmericas.png" alt=""/>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4">
                      <div className="menu-block-right">
                        <p className="country-right-title">Asia Pacific</p>
                        <ul>
                              <li className="hover-500"><a href="/hong-kong-company-formation">Hong Kong</a></li>
                              <li className="hover-500"><a href="/marshall-islands-company-formation">Marshall Islands</a></li>
                              <li className="hover-500"><a href="/samoa-company-formation">Samoa</a></li>
                              <li className="hover-500"><a href="/singapore-company-formation">Singapore</a></li>
                          <li className="hover-500"><a href="/vietnam-company-formation">Vietnam</a></li>
                        </ul><img src="/images/menu/AsiaPacific.png" alt=""/>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4">
                      <div className="menu-block-right">
                        <p className="country-right-title">Europe, Middle East and Africa (EMEA)</p>
                        <ul>
                              <li className="hover-500"><a href="/cyprus-company-formation">Cyprus</a></li>
                              <li className="hover-500"><a href="/jersey-company-formation">Jersey</a></li>
                              <li className="hover-500"><a href="/mauritius-company-formation">Mauritius</a></li>
                              <li className="hover-500"><a href="/seychelles-company-formation">Seychelles</a></li>
                              <li className="hover-500"><a href="/rak-company-formation">Ras Al Khaimah (UAE)</a></li>
                              <li className="hover-500"><a href="/united-kingdom-company-formation">United Kingdom</a></li>
                        </ul><img src="/images/menu/EMEA.png" alt=""/>
                      </div>
                    </div>
                  </div>
                  </div>
                  <div className="col-lg-9 col-md-9 row menu-container-right pdright-0" id="country-content-taxrate-02">
                      <div className="row">
                      <div className="col-lg-9 col-md-9">
                      <div className="menu-block-right">
                        <p className="country-right-title row">Zero tax</p>
                        <div className="row">
                          <ul className="dis-flex">
                            <li className="col-lg-4 col-md-4 hover-500"><a href="/anguilla-company-formation">Anguilla</a></li>
                            <li className="col-lg-4 col-md-4 hover-500"><a href="/bahamas-company-formation">Bahamas</a></li>
                            <li className="col-lg-4 col-md-4 hover-500"><a href="/bvi-company-formation">British Virgin Islands</a></li>
                            <li className="col-lg-4 col-md-4 hover-500"><a href="/cayman-islands-company-formation">Cayman Islands</a></li>
                            <li className="col-lg-4 col-md-4 hover-500"><a href="/delaware-company-formation">Delaware (the US)</a></li>
                            <li className="col-lg-4 col-md-4 hover-500"><a href="/jersey-company-formation">Jersey</a></li>
                            <li className="col-lg-4 col-md-4 hover-500"><a href="/marshall-islands-company-formation">Marshall Islands</a></li>
                            <li className="col-lg-4 col-md-4 hover-500"><a href="/mauritius-company-formation">Mauritius</a></li>
                            <li className="col-lg-4 col-md-4 hover-500"><a href="/panama-company-formation">Panama</a></li>
                            <li className="col-lg-4 col-md-4 hover-500"><a href="/samoa-company-formation">Samoa</a></li>
                            <li className="col-lg-4 col-md-4 hover-500"><a href="/seychelles-company-formation">Seychelles</a></li>
                            <li className="col-lg-4 col-md-4 hover-500"><a href="/saint-kitts-and-nevis-company-formation">St. Kitts &amp; Nevis</a></li>
                            <li className="col-lg-4 col-md-4 hover-500"><a href="/saint-vincent-company-formation">St. Vincent &amp; Grenadines</a></li>
                            <li className="col-lg-4 col-md-4 hover-500"><a href="/rak-company-formation">Ras Al Khaimah (UAE)</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-3">
                      <div className="menu-block-right">
                        <p className="country-right-title">Low tax</p>
                        <ul>
                          <li className="hover-500"><a href="/belize-company-formation">Belize</a></li>
                          <li className="hover-500"><a href="/cyprus-company-formation">Cyprus</a></li>
                          <li className="hover-500"><a href="/hong-kong-company-formation">Hong Kong</a></li>
                          <li className="hover-500"><a href="/singapore-company-formation">Singapore</a></li>
                          <li className="hover-500"><a href="/united-kingdom-company-formation">United Kingdom</a></li>
                          <li className="hover-500"><a href="/vietnam-company-formation">Vietnam</a></li>
                        </ul>
                      </div>
                    </div>
                      </div>
                   
                  </div>
        </div>
</div>
)}
export default Countries;