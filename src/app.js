// set terms

var firstTermRange = {
	min: 6,
	max: 9
};

var summRange = {
	min: 11,
	max: 14
};

var firstTerm = Math.floor(Math.random() * (firstTermRange.max - firstTermRange.min + 1)) + firstTermRange.min;

var secondTermRange = {
	min: summRange.min - firstTerm,
	max: summRange.max - firstTerm
};

var secondTerm = Math.floor(Math.random() * (secondTermRange.max - secondTermRange.min + 1)) + secondTermRange.min;

var summ = firstTerm + secondTerm;
var start = 0; 


// save link to dom elements
var dom = {
	svg: document.getElementById('svg'),
	firstTerm: document.getElementById('1'),
	secondTerm: document.getElementById('2'),
	answer: document.getElementById('3'),
	input1: document.getElementById('input1'),
	input2: document.getElementById('input2'),
	input3: document.getElementById('input3'),
	inputsWrap: document.getElementById('inputs-wrap'),
	bodyContent: document.getElementById('content')
};

// add event listeners
dom.input1.addEventListener('change', onInputChange1);
dom.input2.addEventListener('change', onInputChange2);
dom.input3.addEventListener('change', onInputChange3);

// render terms
dom.firstTerm.appendChild(document.createTextNode(firstTerm));
dom.secondTerm.appendChild(document.createTextNode(secondTerm));

// 39px is equal one segment
var step = 39;

// render svg ellipse
function renderEllipse(cx, cy, rx) {
	var ellipse = document.createElementNS("http://www.w3.org/2000/svg", 'ellipse');

	ellipse.setAttribute('cx', cx);
	ellipse.setAttribute('cy', cy);
	ellipse.setAttribute('rx', rx);
	ellipse.setAttribute('ry', 50);

	ellipse.setAttribute('stroke', "rgb(143,23,23)");
	ellipse.setAttribute('stroke-width', 2);
	ellipse.setAttribute('fill', "green");
	ellipse.setAttribute('fill-opacity', 0);

	dom.svg.appendChild(ellipse);
}

// renser svg arrow
function renderArrow(firstTerm, secondTerm) {
	var middle = (firstTerm + secondTerm) / 2;

	var center = middle * step;
	var cy = 230;
	var cx = center;
	var r = ((secondTerm - firstTerm) / 2) * step;

	dom.inputsWrap.style.left = cx + 173;

	renderEllipse(cx, cy, r);
}

function onInputChange1(event) {
	if (+dom.input1.value === firstTerm) {
		dom.input1.style.display = 'none';
		input2.style.display = 'inline-block';
		dom.firstTerm.style.backgroundColor = 'white';

		var bounds = dom.inputsWrap.getBoundingClientRect();
		var answerNode = document.createElement('div');
		answerNode.innerHTML = firstTerm;
		answerNode.style.position = 'absolute';
		answerNode.style.left = bounds.left - 85;
		answerNode.style.bottom = 110;
		dom.bodyContent.appendChild(answerNode);

		renderArrow(firstTerm, summ);
	} else {
		dom.input1.style.color = 'red';
		dom.firstTerm.style.backgroundColor = 'yellow';
	}
}

function onInputChange2(event) {
	if (+dom.input2.value === secondTerm) {
		dom.input2.style.display = 'none';
		input3.style.display = 'inline-block';
		dom.secondTerm.style.backgroundColor = 'white';

		var bounds = dom.inputsWrap.getBoundingClientRect();
		var answerNode = document.createElement('div');
		answerNode.innerHTML = secondTerm;
		answerNode.style.position = 'absolute';
		answerNode.style.left = bounds.left - 80;
		answerNode.style.bottom = 110;
		dom.bodyContent.appendChild(answerNode);

		dom.answer.innerHTML = '';
	} else {
		dom.input2.style.color = 'red';
		dom.secondTerm.style.backgroundColor = 'yellow';
	}
}

function onInputChange3(event) {
	if (+dom.input3.value === summ) {
		dom.input3.style.display = 'none';
		dom.answer.innerHTML = summ;
	} else {
		dom.input3.style.color = 'red';
	}
}

renderArrow(start, firstTerm);