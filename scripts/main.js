"use strict";var namespace=function(){function e(){var e=document.getElementById("resume-document").innerHTML,n=document.body.innerHTML;document.body.innerHTML=e,window.print(),document.body.innerHTML=n}function n(e,n){document.getElementById("modal-container");self.overlay.classList.remove("is-hidden");var t=setTimeout(function(){o(n),c("cosmo"),clearTimeout(t)},l)}function t(){var e=document.getElementById("modal-body"),n=document.getElementById("modal-container");n.classList.add("size-down"),e.innerHTML="";var t=setTimeout(function(){u(),s("cosmo"),n.classList.remove("size-down"),self.overlay.classList.add("is-hidden"),clearTimeout(t)},700)}function o(e){var n=document.getElementById("modal-body");a("views/"+e+".html").then(function(t){n.innerHTML=t,m(e),i(e)},function(e){n.innerHTML="Ops! Could not fetch the content at this time! Sorry"})}function i(e){"skills"===e&&(window.requestAnimFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(e){window.setTimeout(e,1)}}(),r(".frontend"),r(".backend"))}function r(e){var n=document.querySelector(e),t=d(e);!function e(){n.innerHTML>=t||(requestAnimFrame(e),n.innerHTML++)}()}function d(e){return".frontend"===e?73:51}function m(e){document.getElementById("modal-title").innerHTML=e.toUpperCase()}function u(){document.getElementById("modal-title").innerHTML=""}function c(e){document.getElementById(e).style.overflow="hidden"}function s(e){document.getElementById(e).style.overflow="scroll"}function a(e){return new Promise(function(n,t){var o=new XMLHttpRequest;o.open("GET",e),o.onload=function(){200==o.status?n(o.response):t(Error(o.statusText))},o.onerror=function(){t(Error("Network Error"))},o.send()})}var l=(document.getElementById("overlay"),750);return{openModal:n,closeModal:t,loadTemplate:o,printResume:e}}();