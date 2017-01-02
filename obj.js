var person = {
   name: 'Ariel',
   sayHello: function(){
      console.log(this.name);
   }

}

person.sayHello();

console.log(person.hasOwnProperty('name'));
