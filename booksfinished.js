'use strict'

const books = [
    {title: 'Harry Potter and the Goblet of Fire', rating: 'good'},
    {title: 'Harry Potter and the Prisoner of Azkaban', rating: 'very good'},
    {title: 'Harry Potter and the Philosopher\'s Stone', rating: 'average'},
    {title: 'Harry Potter and the Deathly Hallows', rating: 'excellent'},    
    {title: 'Harry Potter and the Order of the Phoenix', rating: 'okay'}
]

let printBookRating = (books) => {
    books.forEach((book) => {
        let title = book.title
        let rating = book.rating
        console.log(`I read ${title} and thought it was ${rating}`)
    })
}

let makeReview = (review) => {

    
}

printBookRating(books)

