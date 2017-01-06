'use strict';

(function () {

	function pi() {
	return Math.PI;
	}

	function diameter(diameter) {
		return diameter * pi(); 
	}
	console.log(
		diameter(2)
	);

	function stringFunctor(value, fn) {
		var chars = value.split("");
		return chars.map(function(char) {
			return String.fromCharCode(fn(char.charCodeAt(0)));
		}).join("");
	}
	

	function plus1(value) {
		return value + 1;
	}

	
		return value -1;
}

	[3,4].map(plus1);
	stringFunctor('ABC', plus1);
	stringFunctor('XYZ', minus1);


	console.log(plus1([3,4]));



})();

