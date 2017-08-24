var firstTerm = 4;
var secondTerm = 7;
var summ = firstTerm + secondTerm;
var start = 0; 

var svg = document.getElementById('svg');
var firstTermNode = document.getElementById('1');
var secondTermNode = document.getElementById('2');

var input1 = document.getElementById('input1');
var input2 = document.getElementById('input2');
var input3 = document.getElementById('input3');

input1.addEventListener('change', onInputChange1);
input2.addEventListener('change', onInputChange2);
input3.addEventListener('change', onInputChange3);

firstTermNode.appendChild(document.createTextNode(firstTerm));
secondTermNode.appendChild(document.createTextNode(secondTerm));

var step = 39;

function renderCircle(cx, cy, r) {
	var circle = document.createElementNS("http://www.w3.org/2000/svg", 'circle');

	circle.setAttribute('cx', cx);
	circle.setAttribute('cy', cy);
	circle.setAttribute('r', r);

	circle.setAttribute('stroke', "rgb(143,23,23)");
	circle.setAttribute('stroke-width', 2);
	circle.setAttribute('fill', "green");
	circle.setAttribute('fill-opacity', 0);

	svg.appendChild(circle);
}

function renderArrow(firstTerm, secondTerm) {
	var middle = (firstTerm + secondTerm) / 2;

	var center = middle * step;
	var cy = 230;
	var cx = center;
	var r = ((secondTerm - firstTerm) / 2) * step;

	renderCircle(cx, cy, r);
}

function onInputChange1(event) {
	if (+input1.value === firstTerm) {
		console.log('yes1');
		input1.style.display = 'none';
		input2.style.display = 'inline-block';
		renderArrow(firstTerm, summ);
	} else {
		console.log('no1');
	}
}

function onInputChange2(event) {
	if (+input2.value === secondTerm) {
		console.log('yes2');
		input2.style.display = 'none';
		input3.style.display = 'inline-block';
	} else {
		console.log('no2');
	}
}

function onInputChange3(event) {
	if (+input3.value === summ) {
		console.log('yes3');
		input3.style.display = 'none';
	} else {
		console.log('no3');
	}
}

renderArrow(start, firstTerm);
