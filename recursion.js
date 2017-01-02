'use strict';

// Recursion 2

let countDownFrom = (num) => {
    if (num === 0) return;
    console.log(num);
    countDownFrom(num - 1);
}

countDownFrom(10);


// Recursion 2

let categories = [
    { id: 'animals', 'parent': null },
    { id: 'mammals', 'parent': 'animals' },
    { id: 'cats', 'parent': 'mammals' },
    { id: 'dogs', 'parent': 'mammals' },
    { id: 'chihuahua', 'parent': 'dogs' },
    { id: 'siamese', 'parent': 'cats' }
]

let makeTree = (categories, parent) => {
    let node = {}
    categories
        .filter(c => c.parent === parent)
        .forEach(c => node[c.id] = makeTree(categories, c.id))
    return node
}


console.log(
    JSON.stringify(
        makeTree(categories, null)
    , null, 2)
    
)


// Currying

let food = (f) => {
    return (b) => {
        let result = 'I <3 '.concat(f).concat(' and ').concat(b)
        return result;
    }
}

let pizza = food('Pizza');

console.log(
    pizza('Spaghetti'),
    pizza('Burgers'),
    pizza('Salad')
)
