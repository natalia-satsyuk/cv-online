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
function findVideos() {
	let videos = document.querySelectorAll('.video');

	for (let i = 0; i < videos.length; i++) {
		setupVideo(videos[i]);
	}
}

function setupVideo(video) {
	let link = video.querySelector('.video__link');
	let media = video.querySelector('.video__media');
	let button = video.querySelector('.video__button');
	let id = parseMediaURL(media);

	video.addEventListener('click', () => {
		let iframe = createIframe(id);

		link.remove();
		button.remove();
		video.appendChild(iframe);
	});

	link.removeAttribute('href');
	video.classList.add('video--enabled');
}

function parseMediaURL(media) {
	let regexp = /https:\/\/i\.ytimg\.com\/vi\/([a-zA-Z0-9_-]+)\/maxresdefault\.jpg/i;
	let url = media.src;
	let match = url.match(regexp);

	return match[1];
}

function createIframe(id) {
	let iframe = document.createElement('iframe');

	iframe.setAttribute('allowfullscreen', '');
	iframe.setAttribute('allow', 'autoplay');
	iframe.setAttribute('src', generateURL(id));
	iframe.classList.add('video__media');

	return iframe;
}

function generateURL(id) {
	let query = '?rel=0&showinfo=0&autoplay=1';

	return 'https://www.youtube.com/embed/' + id + query;
}

findVideos();
$(document).ready(function(){
	$('.inspire-slider').slick({
		infinite: true,
		autoplay: true,
  		slidesToShow: 3,
  		slidesToScroll: 1	    
	});
});
// (function(){
// 	let showPopup = document.querySelector('.education__show');
// 	let sertificate = document.querySelector('.education__sertificate');
// 	let close = document.querySelector('.close');	
// 	let body = document.querySelector('.for-overlay');	

// 	showPopup.onclick = function () { 
// 		sertificate.classList.add('open');
// 		body.classList.add('overlay');
// 	}

// 	close.onclick = function () {
// 		sertificate.classList.remove('open');
// 		body.classList.remove('overlay');
// 	}	
	
// })()

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

// window.onclick = function(event) {
//   if (!event.target.matches('#title')) {
//     let dropdowns = document.querySelector('.job');
//     let i;
//     for (i = 0; i < dropdowns.length; i++) {
//       let openDropdown = dropdowns[i];
//       if (openDropdown.classList.contains('open')) {
//         openDropdown.classList.remove('open');
//       }
//     }
//   }
// }
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

