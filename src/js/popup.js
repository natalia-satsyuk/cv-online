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