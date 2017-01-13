'use strict';

const team = [
	{ 'name': 'Christian',
		'clients': 'Miele',
		'knows': 'ES2015-2017, C#, Fortran',
		'wantstolearn': 'Haskell',
		'photo-url':	'chris.png',
	},
	{
		'name': 'Marcel',
		'clients': 'Consorsbank',
		'knows': 'Assembly, Java, R, C++',
		'wantstolearn': 'Typescript',
		'photo-url': 'marcel.png',
	},
	{
		'name': 'Kathleen',
		'clients': 'Consorsbank',
		'knows': 'C#',
		'wantstolearn': 'Python',
		'photo-url': 'kati.png',
	},
	{
		'name': 'Conny',
		'clients': 'Consorsbank',
		'knows': 'Java, Ruby, Python',
		'wantstolearn': 'C, C#',
		'photo-url': 'conny.png',
	},
];

console.log(
	`Did you know that ${team[2].name} wants to learn ${team[2].wantstolearn}?`
);
