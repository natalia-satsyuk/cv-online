function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }
    
    testWebP(function (support) {
    
    if (support == true) {
    document.querySelector('body').classList.add('webp');
    }else{
    document.querySelector('body').classList.add('no-webp');
    }
});
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
(function(){
	let showPopup = document.querySelectorAll('.education__show');
	let sertificate = document.querySelector('.education__sertificate');
	let close = document.querySelector('.close');  
  
	showPopup.forEach((item) => {
	  item.onclick = function () { 
	  sertificate.classList.add('open');
	}
	})
  
	close.onclick = function () {
	  sertificate.classList.remove('open');
	} 	
  })()
function dropDown(){
	let jobList = document.querySelector('.dropdown');	
	let drop = document.querySelector('#dropdown-btn');	

	drop.onclick = function () { 
		jobList.classList.toggle('open');
	}	
}

dropDown()


const navlink = document.querySelectorAll(".menu__link");

navlink.forEach(elem => elem.addEventListener("click", smoothscroll));

function smoothscroll(event){
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute("href");
    window.scrollTo({
        top: document.querySelector(targetId).offsetTop,
        behavior: "smooth"
    })
}
