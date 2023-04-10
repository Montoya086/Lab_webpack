"use strict";

require("@babel/polyfill");
require("./gnome_comp.js");
require("./gnome.js");
require("./person_comp.js");
require("./styles");
if (document.getElementById('p3') != null) {
  var gnome = document.createElement("my-gnome");
  var buble = document.getElementById("gnome-buble-p3");
  var bandera = true;
  buble.addEventListener("mouseover", function (event) {
    if (bandera) {
      bandera = false;
      gnome.style.position = "relative";
      gnome.style.top = "150px";
      gnome.style.left = "-350px";
      buble.appendChild(gnome);
      setTimeout(function () {
        var text = document.createElement("p");
        text.innerText = "Hola, soy el gnomo \n Acompañame a mi biblioteca!";
        text.style.color = "white";
        text.style.position = "relative";
        text.style.left = "100px";
        text.style.top = "40px";
        buble.appendChild(text);
        setTimeout(function () {
          window.location.href = "../index.html";
        }, 4000);
      }, 1000);
    }
  }, false);
}