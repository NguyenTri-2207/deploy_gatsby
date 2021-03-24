/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it
import "bootstrap/dist/css/bootstrap.min.css";
import "flag-icon-css/css/flag-icon.min.css";
import "./static/css/font-awesome.min.css";

const addScript = (url) => {
    const script = document.createElement("script");
    script.src = url;
    // script.defer = true;
    script.type = "text/javascript";
    // script.async = true;
    // script.crossOrigin="anonymous"
    document.body.appendChild(script);
  };
  
  const loadJquery = () => {
    const script = document.createElement("script");
    script.type = "text/jsx";
    script.innerHTML = window.jQuery = window.$ = require("jquery");
    document.body.appendChild(script);
  };
  export const onClientEntry = () => {
    window.onload = () => {
      loadJquery();
      addScript("/js/bootstrap.min.js");
    //   addScript("/js/fontawesome.min.js");
    //   addScript("/js/popper.min.js");
    //   addScript("/js/slick.min.js");
    //   addScript("/js/wow.min.js");
    };
  };