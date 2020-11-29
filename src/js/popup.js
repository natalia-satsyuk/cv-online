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