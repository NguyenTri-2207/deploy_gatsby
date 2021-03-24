import * as React from "react"
import Logo_icon from "../../images/logo-icon.svg";
import Logo_text from "../../images/logo-text.svg";
import Logo_text_2 from "../../images/logo-text-333-16.png";
import NavMobile from "../NavMobile/index"
import $ from "jquery";
import Services from "../Card/services";
import Countries from "../Card/Countries";
import Resources from "../Card/Resources";
import './index.scss';
const Menu = () => {
    React.useEffect(()=>{
        let id;
        $('#services').on("click",function(){
          $(".item-dropdown").not(this).children(".mega-menu-content").hide();
            $('#services-content').toggle();
            $(".navbar-fixed-top").addClass("hover-header-item");
        });
        $("#countries").on("click", function() {
        $(".item-dropdown").not(this).children(".mega-menu-content").hide();
          $('#countries-content').toggle();
          $(".navbar-fixed-top").addClass("hover-header-item");
        });

        $("#resource").on("click", function() {
        $(".item-dropdown").not(this).children(".mega-menu-content").hide();
          $('#resource-content').toggle();
          $(".navbar-fixed-top").addClass("hover-header-item");
        });

      

        // $('#countries .mega-menu-content').on("hover",function () {
        //     $('.menu-container-left li').on("hover",function () {
        //         id = $(this).attr('data-content');
        //         $('.menu-container-left li').removeClass('active');
        //         $(`.${id.replace('#', '')}`).addClass('active');

        //         $('.menu-container-right').removeClass('active');
        //         $(id).addClass('active');

        //     }, function () {
        //     })
        // }, function () {
        //     $(`#countries .menu-container-right`).removeClass('active');
        //     $('.menu-container-left li').removeClass('active');
        //     $('.menu-container-left li').first().addClass('active');
        //     $('#countries').find('.menu-container-right').first().addClass('active');
        // })


  $(window).on('scroll', function (event) {
      var docHeight = $(document).height(),
          winHeight = $(window).height(),
          footerHeight = $(".footer").height(),
          contentBlog = $(".content-blog").height(),
          contentBlogRequest = $(".contentBlogRequest").height(),
          relateHeight = $(".section-blogDetail").height();
      if(relateHeight > 0 ){
          var viewport = docHeight - winHeight - footerHeight - relateHeight -150;
      }
      else{
          var viewport = docHeight - winHeight - footerHeight  -150;
      }
      // console.log(contentBlog);
      
      if(contentBlogRequest){
          if(contentBlogRequest > 3500){
              $('.indicator').addClass('dis-block');
          }
          else{
              $('.indicator').removeClass('dis-block');
          }
      } else {
          if(contentBlog > 3500){
              $('.indicator').addClass('dis-block');
          }
          else{
              $('.indicator').removeClass('dis-block');
          }
      }

      var positionY = $(window).scrollTop();
          // console.log(positionY);

      var indicator = ( positionY / (viewport)) * 100;

      
      let scroll = $(window).scrollTop();
      // console.log(scroll)
      if (scroll < 38) {
          $('.header .mega-menu-content').css("top", (118 - scroll) + 'px');
          if (scroll === 0) {
              $('.header .mega-menu-content.menu-top-collapse').css("top", '118px');
          } else {
              $('.header .mega-menu-content.menu-top-collapse').css("top", (80) + 'px');
          }
      }
      //oke
      if (scroll >= 38) {
          $('#mainNav').addClass('top-nav-collapse');
          $('.indicator').css('width', indicator + '%');
      } 
      else {
          $('#mainNav').removeClass('top-nav-collapse');
          $('.indicator').css('width', 0 + '%');
      }
  })
      var scroll = $(window).scrollTop();
      
      // var a = window.pageYOffset()
      // console.log(a)
      if (window.pageYOffset < 38) {
          $('.header .mega-menu-content').css("top", (118 - scroll) + 'px');
          $('.header .mega-menu-content.menu-top-collapse').css("top", (80) + 'px');
      }
      if (window.pageYOffset >= 38) {
          $('.mega-menu-content').addClass('menu-top-collapse');
          $(".navbar-fixed-top").addClass("top-nav-collapse");
      } else {
          $('.mega-menu-content').removeClass('menu-top-collapse');
          $(".navbar-fixed-top").removeClass("top-nav-collapse");
      }


  const $menu = $('header')
  $(document).on("mouseup", function (e) {
      if (!$menu.is(e.target) && $menu.has(e.target).length === 0) {
          $menu.removeClass("menu-mobile");
          $('.nav-bar-container').removeClass("change");
      }
  });
  //acc tive background
  // $(document).on("ready",function(){
      $(".navbar-item .item-list").on("click",function(e){
          console.log("test click megamenu")
          $('.navbar-item li.active-item').not(this).removeClass("active-item");
          $(this).toggleClass("active-item");
          if($(".navbar-item li").hasClass("active-item") == false){
              $(".navbar-fixed-top").removeClass("hover-header-item");
          }
          else{
              $(".navbar-fixed-top").addClass("hover-header-item");
          }
          // ko hiện đc menu
          // $('.item-dropdown').not(this).children('.mega-menu-content').hide();
          // $(this).children('.mega-menu-content').toggle();
          
          $('main, footer').on("Click",function(){
              $(".navbar-fixed-top").removeClass("hover-header-item");
              $('.navbar-item li').removeClass('active-item');
              $(".mega-menu-content").hide();
          })
      // });
});
    },[]);
    //oke
    const handleToggleMenu = () => {
      const $menu = $('header')
      $('#nav-bar-container-01').toggleClass("change");
          $menu.toggleClass("menu-mobile");
      $(document).on("mouseup", function (e) {
            if (!$menu.is(e.target) && $menu.has(e.target).length === 0) {
                $menu.removeClass("menu-mobile");
                $('.nav-bar-container').removeClass("change");
              }
      });
    }
    return(
    <nav className="navbar-fixed-top navbar mobile-header" id="mainNav" style={{width: "100%"}}>
    <div className="container height-inherit">
      <div className="row height-inherit"style={{width: "100%"}}>
        <div className="menu clearfix height-inherit" style={{width: "100%"}}>
          <div className="col-md-2 col-sm-6 logo">
            <div className="navbar-header"><a className="navbar-logo" href="/"><img className="logo-icon" src={Logo_icon} alt="logo-icon"/><img className="logo-text" src={Logo_text} alt="logo-text"/><img className="logo-text-2" src={Logo_text_2} alt="logo-text-2"/></a></div>
          </div>
          <div className="col-md-7 hidden-sm hidden-xs text-center menu-feature nav-desktop height-inherit" style={{paddingRight: 0, paddingLeft: 0}}>
            <ul className="nav navbar-item flex-row align-items-center height-inherit">
              <li className="item-list item-dropdown" id="services"><a className="main">Services<i className="fas fa-chevron-down"></i></a>
                <Services/>
              </li>
              <li className="item-list item-dropdown" id="countries"><a className="main">Countries<i className="fas fa-chevron-down"></i></a>
                <Countries/>
              </li>
              <li className="item-list item-dropdown" id="resource"><a className="main">Resources<i className="fas fa-chevron-down"></i></a>
                <Resources/>
              </li>
              <li className="about-us item-list" id="aboutMenu-us"><a className="main" href="/about-us">About Us</a></li>
              <li className="contact-us item-list" id="contactMenu-us"><a className="main" href="/contact-us">Contact Us</a></li>
            </ul>
          </div>
          <div className="col-md-3 col-sm-6 text-right hidden-xs set-up-now nav-desktop" style={{paddingRight: 0, paddingLeft: 0}}><a href="/order/step1">
              <button className="btn setupnow btn-default" type="button">set up now</button></a></div>
          <div className="nav-bar">
            <div id="nav-bar-container-01" className="nav-bar-container" onClick={handleToggleMenu}>
              <div className="bar1"></div>
              <div className="bar2"></div>
              <div className="bar3"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="nav-mobile">
      <NavMobile/>
    </div>
  </nav>
)}
export default Menu;