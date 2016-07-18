// Model

var count = 0;
var countUp += 1;
var countDown -= 1;
var reset = 0;


// View

function count() {


	var source = $('#count-template').html();
	var template = Handlebars.compile(source);

}

// Controller

function setup() {
	count();

	$('#count-up').on('click', addNumber);
	$('#count-down').on('click', deleteNumber);
	$('#reset').on('click', resetNumber);

}

function addNumber() {
	var numberAdded = countUp;
	$('#counter').append(countUp).val();

	count();
}

function deleteNumber() {
	var deleteNumber = countDown;
	$('counter').appdend(countDown).val();

	count();
}

function resetNumber {
	var resetNumber = reset;
	$('counter').html(0);

	count();
}

$(document).ready(setup);