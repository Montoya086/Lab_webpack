"use strict";

require("@babel/polyfill");
require("./gnome_comp.js");
require("./gnome.js");
require("./person_comp.js");
require("./styles");
if (document.getElementById('p2') != null) {
  var text = document.getElementById("text-p2");
  window.addEventListener("load", function (event) {
    setTimeout(function () {
      text.style.color = "white";
      setTimeout(function () {
        window.location.href = "p3.html";
      }, 4000);
    }, 1000);
  });
}