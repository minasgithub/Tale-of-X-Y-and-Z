let opt1 = document.querySelectorAll('.opt1');

opt1.forEach(element => {
	element.addEventListener('mouseover', function(){
		element.style.backgroundColor = '#5eaaa8';
		element.style.cursor = 'pointer';
	});
});

opt1.forEach(element => {
	element.addEventListener('mouseleave', function(){
		element.style.backgroundColor = '#28527a';
	});
});

let opt2 = document.querySelectorAll('.opt2');

opt2.forEach(element => {
	element.addEventListener('mouseover', function(){
		element.style.backgroundColor = '#5eaaa8';
		element.style.cursor = 'pointer';
	});
});

opt2.forEach(element => {
	element.addEventListener('mouseleave', function(){
		element.style.backgroundColor = '#28527a';
	});
});

let opt3 = document.querySelectorAll('.opt3');

opt3.forEach(element => {
	element.addEventListener('mouseover', function(){
		element.style.backgroundColor = '#5eaaa8';
		element.style.cursor = 'pointer';
	});
});

opt3.forEach(element => {
	element.addEventListener('mouseleave', function(){
		element.style.backgroundColor = '#28527a';
	});
});

let opt4 = document.querySelectorAll('.opt4');

opt4.forEach(element => {
	element.addEventListener('mouseover', function(){
		element.style.backgroundColor = '#5eaaa8';
		element.style.cursor = 'pointer';
	});
});

opt4.forEach(element => {
	element.addEventListener('mouseleave', function(){
		element.style.backgroundColor = '#28527a';
	});
});

let opt5 = document.querySelectorAll('.opt5');

opt5.forEach(element => {
	element.addEventListener('mouseover', function(){
		element.style.backgroundColor = '#5eaaa8';
		element.style.cursor = 'pointer';
	});
});

opt5.forEach(element => {
	element.addEventListener('mouseleave', function(){
		element.style.backgroundColor = '#28527a';
	});
});

let next = document.querySelector('.next');

next.addEventListener('mouseover', function(){
	next.style.color = '#ef8d32';
})

next.addEventListener('mouseleave', function(){
	next.style.color = 'black';
});


const wrong1 = document.querySelector('#wrong1');

wrong1.addEventListener('click', function(){
	wrong1.style.border = '2px solid red';
	setTimeout(function(){
		wrong1.style.border = 'none';
	}, 300);
});


const wrong2 = document.querySelector('#wrong2');

wrong2.addEventListener('click', function(){
	wrong2.style.border = '2px solid red';
	setTimeout(function(){
		wrong2.style.border = 'none';
	}, 300);
});

const wrong3 = document.querySelector('#wrong3');

wrong3.addEventListener('click', function(){
	wrong3.style.border = '2px solid red';
	setTimeout(function(){
		wrong3.style.border = 'none';
	}, 300);
});

const wrong4 = document.querySelector('#wrong4');

wrong4.addEventListener('click', function(){
	wrong4.style.border = '2px solid red';
	setTimeout(function(){
		wrong4.style.border = 'none';
	}, 300);
});














