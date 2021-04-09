'use strict';

var width = window.innerWidth;
console.log("Window width: "+width+"px");
var brightLogo = document.querySelector("#bright-logo");
var normalLogo = document.querySelector("#logo");
var nav = document.querySelector("#side-nav");
var navLinks = document.getElementsByClassName("nav-link");

brightLogo.addEventListener("click", function(){
  nav.classList.add("animate-nav-forward");
  nav.classList.remove("animate-nav-back");
  nav.classList.remove("hidden");
  normalLogo.classList.remove("hidden");
  for (var i = 0; i < navLinks.length; i++) {
    navLinks[i].classList.remove("hidden");
  }
  brightLogo.classList.add("hidden");
});

brightLogo.addEventListener("keypress", function(e){
  if(e.key == 'Enter'){
    nav.classList.add("animate-nav-forward");
    nav.classList.remove("animate-nav-back");
    nav.classList.remove("hidden");
    normalLogo.classList.remove("hidden");
    for (var i = 0; i < navLinks.length; i++) {
      navLinks[i].classList.remove("hidden");
    }
    brightLogo.classList.add("hidden");
  }
});

normalLogo.addEventListener("click", function(){
  nav.classList.remove("animate-nav-forward");
  nav.classList.add("animate-nav-back");
  normalLogo.classList.add("hidden");
  for (var i = 0; i < navLinks.length; i++) {
    navLinks[i].classList.add("hidden");
  }
  brightLogo.classList.remove("hidden");
});

normalLogo.addEventListener("keypress", function(e){
  if(e.key == 'Enter'){
    nav.classList.add("animate-nav-back");
    nav.classList.remove("animate-nav-forward");
    normalLogo.classList.add("hidden");
    for (var i = 0; i < navLinks.length; i++) {
      navLinks[i].classList.add("hidden");
    }
    brightLogo.classList.remove("hidden");
  }
});
