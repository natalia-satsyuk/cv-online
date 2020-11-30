function dropDown(){
	let jobList = document.querySelector('.dropdown');	
	let drop = document.querySelector('#dropdown-btn');	

	drop.onclick = function () { 
		jobList.classList.toggle('open');
	}	
}

dropDown()

// mobile-menu
	let navButton = document.querySelector('.menu-icon');
	let menu = document.querySelector('.navigation');	  
  
	navButton.onclick = function () { 
		menu.classList.toggle('open');
	}

// pop-up sertificates
	// let showSeoSertificate = document.querySelector('#sertificate-seo-watch');
	// let showTmSertificate = document.querySelector('#sertificate-tm-watch');
	// let showNfSertificate = document.querySelector('#sertificate-nf-watch');
	// let sertificate = document.querySelector('.education__sertificate');

	// let sertificateSeo = document.querySelector('#sertificate-seo');
	// let sertificateTm = document.querySelector('#sertificate-tm');
	// let sertificateNf = document.querySelector('#sertificate-nf');

	// let close = document.querySelector('.close');    
	
	// showSeoSertificate.onclick = function () { 
	// 	sertificateSeo.classList.add('open');
	// }

	// showTmSertificate.onclick = function () { 
	// 	sertificateTm.classList.add('open');
	// }

	// showNfSertificate.onclick = function () { 
	// 	sertificateNf.classList.add('open');
	// }
  
	// close.onclick = function () {
	//   sertificate.classList.remove('open');
	// } 