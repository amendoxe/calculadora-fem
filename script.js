const screen = document.querySelector(".screen-output").value;
let receiver = screen;
console.log(`the receiver ${receiver}`);
console.log(screen);
document.querySelector(".button-container").addEventListener("click", function (event) {
	console.log(event.target.innerText);
	let out = "";
	if (event.target.innerText === "C") {
		document.querySelector(".screen-output").value = 0;
	}
	if (event.target.innerText == "&#x2190;") {
		document.querySelector(".screen-output").value = document.querySelector(".screen-output").value.slice(0, -1);
		console.log(receiver);
	}
	if (event.target.innerText == 0) {
	}
	if (event.target.innerText == 0) {
	}
	if (event.target.innerText == 0) {
	}
	if (event.target.innerText == 0) {
	}
	if (event.target.innerText == 0) {
	}
	if (event.target.innerText == 0) {
	}
	if (event.target.innerText == 0) {
	}
	if (event.target.innerText == 0) {
	}
	if (event.target.innerText == 0) {
	}
	if (event.target.innerText == 0) {
	}
});
