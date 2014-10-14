$(function(){
	"use strict";
	
	/*
	 * BACKSTRETCH
	 * ----------------------------------------------------------------- */
	 
	// $(".hero-container").backstretch( /* background image url */ ); 
	
	
	/*
	 * PORTFOLIO
	 * ----------------------------------------------------------------- */
	
	/* MixItUp */
	var imageGrid = $('#Grid');
	imageGrid.mixitup();
	
	/* MagnificPopup */
	imageGrid.magnificPopup({
		type: 'image',
		gallery: {
			enabled: true
		}
	});
	
	/* acquiring title from image attribute 'alt' */	
	$(".img-meta").each(function(){
		var imgTitle = $(this).next().attr("alt");
		$(this).find("h5").html(imgTitle);
	});
	
	/* Magnific Popup */
	$('.img-meta').magnificPopup({
		type:'image',
		gallery: {
			enabled: true
		}
	});
	
	/*
	 * MAPLACE
	 * ----------------------------------------------------------------- */
	
	new Maplace({
		show_markers: true,
		locations: [{
			lat: 37.780484,
			lon: -122.418991,
			zoom: 10
		}]
	}).Load();
	
	
	/*
	 * KNOB
	 * ----------------------------------------------------------------- */
	 
	$(".dial").knob();
	
	
	/*
	 * NAVBAR NAV SCROLLS
	 * ----------------------------------------------------------------- */
	
	$(".navbar-nav").find("a").on("click", function(e){
		e.preventDefault();
		if($(this).attr("href") != "#"){
			$.scrollTo($(this).attr("href"), {offset: {left: 0, top: -50}});
		}
	});
	
	
	/*
	 * TO TOP
	 * ----------------------------------------------------------------- */
	 
	/* set the link */
	$('#to-top').topLink({
		min: 400,
		fadeSpeed: 500
	});
	
	/* smoothscroll */
	$('#to-top').click(function (e) {
		e.preventDefault();
		$.scrollTo(0, 300);
	});
});