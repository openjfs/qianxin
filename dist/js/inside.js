"use strict";$(function(){setTimeout(function(){$(".load").addClass("on")},500),setTimeout(function(){$(".load").hide(),$("body").removeClass("bodyhid")},1400),$(".menu").click(function(){$(".wrap").fadeToggle(500),$(".wrap").toggleClass("on")});$(".sou").hover(function(e){e=e||window.event;e.preventDefault(),e.stopPropagation(),$(".cd-popup").addClass("is-visible")}),$(".cd-popup-container").click(function(e){(e||window.even).stopPropagation()}),$(document).click(function(e){$(".cd-popup").removeClass("is-visible"),0}),$(".cd-popup-close").click(function(e){$(".cd-popup").removeClass("is-visible"),0}),0<$("#cy1").length&&new Swiper("#cy1",{slidesPerView:"auto",spaceBetween:20,loop:!0,speed:1e3,navigation:{nextEl:".cy1rig",prevEl:".cy1lef"},breakpoints:{768:{slidesPerView:1,spaceBetween:10}},autoplay:{disableOnInteraction:!1,delay:7e3,stopOnLastSlide:!1}}),0<$("#cy2").length&&new Swiper("#cy2",{slidesPerView:"auto",spaceBetween:"3%",loop:!0,speed:1e3,breakpoints:{768:{}},autoplay:{disableOnInteraction:!1,delay:5e3,stopOnLastSlide:!1}}),0<$("#dj1").length&&new Swiper("#dj1",{effect:"fade",fadeEffect:{crossFade:!0},autoplay:{disableOnInteraction:!1,delay:6e3,stopOnLastSlide:!1},pagination:{el:"#dj1 .swiper-pagination",clickable:!0},loop:!0,speed:500})});