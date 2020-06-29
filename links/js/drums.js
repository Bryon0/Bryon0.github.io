const buttons = document.querySelectorAll(".drum");

for(var i = 0; i < buttons.length; i++) {
	buttons[i].addEventListener('click', (e) => {
		buttonAnimation(e.srcElement.innerHTML);
	});
}

function buttonAnimation(key) {
	
	let button = document.querySelector("." + key);
	button.classList.add("pressed");

	setTimeout(function(){ button.classList.remove("pressed");; }, 100);
}