'use strict';

var width = window.innerWidth;
console.log("Window width: "+width+"px");
var brightLogo = document.querySelector("#bright-logo");
var normalLogo = document.querySelector("#logo");
var nav = document.querySelector("#side-nav");

brightLogo.addEventListener("click", function(){
  nav.classList.remove("hidden");
  brightLogo.classList.add("hidden");
});

normalLogo.addEventListener("click", function(){
  nav.classList.add("hidden");
  brightLogo.classList.remove("hidden");
});
