const screen = document.querySelector(".screen-output").value;
let receiver = screen;
console.log(`the receiver ${receiver}`);
console.log(screen);
document.querySelector(".button-container").addEventListener("click", function (event) {
	console.log(event.target.innerText);

	// alert(`you clicked button ${event.target.innerText}`);
	receiver += event.target.innerText;
	document.querySelector(".screen-output").value = receiver;
	console.log(`screen ${screen}`);
	console.log(`receiver ${receiver}`);
});
