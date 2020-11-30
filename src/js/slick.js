$(document).ready(function(){
	$('.inspire-slider').slick({
		infinite: true,
		autoplay: true,
  		slidesToShow: 3,
		  slidesToScroll: 1,
		  
		  responsive: [
			{
			  breakpoint: 720,
			  settings: {
				arrows: false,
				slidesToShow: 2
			  }
			},
			{
			  breakpoint: 480,
			  settings: {
				arrows: false,
				slidesToShow: 1
			  }
			}
		]
	});
});