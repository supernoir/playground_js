'use strict'

const creatures = [
  'Superhero',
  'Dragon',
  'Polar Bear',
  'Vampire',
  'Cowboy',
  'Pediatrician'
]

let getRandom = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let sentence = (a) => {
  return `<p>
        I haven't been entirely honest with you.
        I am really a <span id="highlight">${getRandom(1,999)}</span> year old <span id="highlight">${randomCreature(creatures)}</span>
        </p>`
}

let randomCreature = (c) => {
  let creature = c[getRandom(0, c.length != 0 ? c.length-1 : 0)]
  return creature
}


document.getElementById('story').innerHTML = sentence(creatures);
