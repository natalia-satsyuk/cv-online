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