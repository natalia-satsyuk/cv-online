(function(){
	let showPopup = document.querySelector('.education__show');
	let sertificate = document.querySelector('.education__sertificate');
	let close = document.querySelector('.close');	
	let body = document.querySelector('body');	

	showPopup.onclick = function () { 
		sertificate.classList.add('open');
		body.classList.add('overlay');
	}

	close.onclick = function () {
		sertificate.classList.remove('open');
		body.classList.remove('overlay');
	}	

	
})()

// (function(){

//     let btnContainer = document.querySelector(".menu");


//     let btns = btnContainer.querySelector(".menu__item");
    
    
//     for (let i = 0; i < btns.length; i++) {
//       btns[i].addEventListener("click", function() {
//         let current = document.querySelector(".active");
//         current[0].className = current[0].className.replace(" active", "");
//         this.className += " active";
//       });
//     }
// })()