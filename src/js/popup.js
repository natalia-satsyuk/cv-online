(function(){
	let showPopup = document.querySelector('.share-action');
	let share = document.querySelector('.share--popup');
	let close = document.querySelector('.close');	

	showPopup.onclick = function () { 
	    share.classList.add('open');
	}

	close.onclick = function () {
		share.classList.remove('open');
	}
})()