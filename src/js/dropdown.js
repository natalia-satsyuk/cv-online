function dropDown(){
	let jobList = document.querySelector('.dropdown');	
	let drop = document.querySelector('#dropdown-btn');	

	drop.onclick = function () { 
		jobList.classList.toggle('open');
	}	
}

dropDown()

