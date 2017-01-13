'use strict'

const books = [
    {title: 'Harry Potter and the Goblet of Fire', rating: 'good'},
    {title: 'Harry Potter and the Prisoner of Azkaban', rating: 'very good'},
    {title: 'Harry Potter and the Philosopher\'s Stone', rating: 'average'},
    {title: 'Harry Potter and the Deathly Hallows', rating: 'excellent'},    
    {title: 'Harry Potter and the Order of the Phoenix', rating: 'okay'}
]

let review = (t,r) => `I have finished <span id="highlight">${t}</span> and thought it was <span id="highlight">${r}</span>`

let renderReview = (a,b) => {
    return (`<div className='review'>
        <h2>${review(a,b)}</h2>
    </div>`)
}

let reviewBooks = (books) => {
    books.forEach((book) => {
        let title = book.title
        let rating = book.rating
        console.log();
        console.log(`I read ${title} and thought it was ${rating}`)
         return title, rating
    })
    return renderReview(books[0].title, books[0].rating)
}

document.getElementById('app').innerHTML = reviewBooks(books)

