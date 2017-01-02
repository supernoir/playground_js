'use strict'

let car = new Object();
let car2 = car;

car.hasWheels = true;
console.log(car2.hasWheels);



	
	
car = {
   hasWheels: true
};

console.log(car);
