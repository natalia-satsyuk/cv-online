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
