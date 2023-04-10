"use strict";

require("@babel/polyfill");
require("./gnome_comp.js");
require("./gnome.js");
require("./person_comp.js");
require("./styles");
if (document.getElementById('p1') != null) {
  window.addEventListener("load", function (event) {
    setTimeout(function () {
      window.location.href = "p2.html";
    }, 9000);
  });
}