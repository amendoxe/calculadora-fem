const screen = document.querySelector(".screen-output").value;
let receiver = screen;
let number = parseInt(receiver);
let memory;
let result;
function addToReceiver(event) {
	receiver += event.target.innerText;
	document.querySelector(".screen-output").value = receiver;
}
function storeIt() {
	memory = parseInt(receiver);
	console.log(`memory is: ${memory}`);
}
function eraseIt() {
	document.querySelector(".screen-output").value = "";
	receiver = "";
}
function operation(num) {
	if (num == 1) {
		result = memory / parseInt(receiver);
	}
	if (num == 2) {
		result = memory * parseInt(receiver);
	}
	if (num == 3) {
		result = memory - parseInt(receiver);
	}
	if (num == 4) {
		result = memory + parseInt(receiver);
	}

	console.log(`operation is: ${num}`);
}
document.querySelector(".button-container").addEventListener("click", function (event) {
	console.log(event.target.innerText);
	if (event.target.innerText === "C") {
		eraseIt();
	}
	if (event.target.id == "left-arrow") {
		receiver.slice(0, -1);
		document.querySelector(".screen-output").value = receiver;
		console.log(receiver);
	}
	if (event.target.innerText == 0) {
		addToReceiver(event);
	}
	if (event.target.innerText == 1) {
		addToReceiver(event);
	}
	if (event.target.innerText == 2) {
		addToReceiver(event);
	}
	if (event.target.innerText == 3) {
		addToReceiver(event);
	}
	if (event.target.innerText == 4) {
		addToReceiver(event);
	}
	if (event.target.innerText == 5) {
		addToReceiver(event);
	}
	if (event.target.innerText == 6) {
		addToReceiver(event);
	}
	if (event.target.innerText == 7) {
		addToReceiver(event);
	}
	if (event.target.innerText == 8) {
		addToReceiver(event);
	}
	if (event.target.innerText == 9) {
		addToReceiver(event);
	}
	if (event.target.id == "divide") {
		storeIt();
		eraseIt();
		num = 1;
	}
	if (event.target.id == "times") {
		storeIt();
		eraseIt();
		num = 2;
	}
	if (event.target.id == "minus") {
		storeIt();
		eraseIt();
		num = 3;
	}
	if (event.target.id == "plus") {
		storeIt();
		eraseIt();
		num = 4;
	}
	if (event.target.id == "equals") {
		operation(num);
		console.log(`Resultado de la operación: ${result}`);
		receiver = Math.floor(result);
		document.querySelector(".screen-output").value = receiver;
		console.log(document.querySelector(".screen-output").value);
		num = 0;
		storeIt();
	}
});
