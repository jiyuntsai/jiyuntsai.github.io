/* Extra Credit Exercise 2022.04.03_Jiyun Tsai */

//button one: change background color of the page
document.getElementById('backgroundColor').addEventListener('click', 
	function(event) { 
		document.body.style.backgroundColor = 'LightGray';
	});

console.log(document.getElementById('backgroundColor'));

//button two: change font color
document.getElementById('fontColor').addEventListener('click', 
	function(event) {
  	document.body.style.color = 'salmon';
});

console.log(document.getElementById('fontColor'));

// button three: change the font
document.getElementById('fontFamily').addEventListener('click', 
	function(event) { 
		document.body.style.fontFamily = 'Helvetica';
	});

console.log(document.getElementById('fontFamily'));

// button four: change the text
document.getElementById('textChange').addEventListener('click', 
	function(event) { 
		document.getElementById('replace').innerText = 'hey';
	});

console.log(document.getElementById('replace'));

//button five: alert dialog
document.getElementById('alert').addEventListener('click', 
	function(event) { 
		alert('Howdy!!'); 
});

console.log(document.getElementById('alert'));