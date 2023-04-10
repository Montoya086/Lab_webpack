"use strict";

var buble1 = document.getElementById("gnome_buble");
var buble2 = document.getElementById("gb1");
if (document.getElementById("biblio_gnome") != null) {
  document.getElementById("biblio_gnome").addEventListener("mouseover", function (event) {
    buble1.style.backgroundColor = "white";
    buble2.style.backgroundColor = "white";
    setTimeout(function () {
      buble1.style.backgroundColor = "black";
      buble2.style.backgroundColor = "black";
    }, 2000);
  }, false);
}