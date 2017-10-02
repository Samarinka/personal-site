$(function(){

	let galleryImage = $("#gallery .gallery").find("img").first();
	let images =[
		"img/solia&me.jpg",
		"img/mountains.jpg",
		"img/kpi.jpg",
		"img/cedar.jpg",
		"img/river.jpg",
		"img/snail.jpg",
		"img/umbrellas.jpg"
	];

	let i = 0;

	setInterval(function(){
		i = (i + 1) % images.length;
		galleryImage.fadeOut(function(){
			$(this).attr("src", images[i]);
			$(this).fadeIn();
		});

	}, 2000);

});

