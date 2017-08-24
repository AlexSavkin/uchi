var max = 19;
var min = 1;
var firstTerm = Math.floor(Math.random() * (max - min + 1)) + min;
var secondTerm = Math.floor(Math.random() * (20 - firstTerm - min + 1)) + min;
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

function renderCircle(cx, cy, rx) {
	var circle = document.createElementNS("http://www.w3.org/2000/svg", 'ellipse');

	circle.setAttribute('cx', cx);
	circle.setAttribute('cy', cy);
	circle.setAttribute('rx', rx);
	circle.setAttribute('ry', 100);

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
		input1.style.display = 'none';
		input2.style.display = 'inline-block';
		renderArrow(firstTerm, summ);
	} else {
		input1.style.color = 'red';
	}
}

function onInputChange2(event) {
	if (+input2.value === secondTerm) {
		input2.style.display = 'none';
		input3.style.display = 'inline-block';
	} else {
		input2.style.color = 'red';
	}
}

function onInputChange3(event) {
	if (+input3.value === summ) {
		input3.style.display = 'none';
	} else {
		input3.style.color = 'red';
	}
}

renderArrow(start, firstTerm);
