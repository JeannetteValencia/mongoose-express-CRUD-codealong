const router = require("express").Router();
const Book = require("../models/book.model")

router.get("/books", (req, res) => {
  Book
    .find()
    .then((booksFromDB)=>{
      const data = {
        booksArr: booksFromDB
      }
      console.log(">>>DATA>>>", data)
      res.render ("books/books-list", data)
    })
    .catch((err)=>{
      res.send("An error has occurred", err)
      next(err);
    })
} )

router.get ('/books/create', (req, res, next)=>{
  res.render("books/book-create");
})

router.get("/books/:bookId", (req, res, next)=>{ //params
  Book
    .findById(req.params.bookId)
    .then((bookById)=>{
       const details = {
         booksArr: bookById
       }
       res.render("books/books-details", details) //no slash HERE!!!!
    })
    .catch((err)=>{
      console.log("Error getting details from a single book from the DB", err);
      next(err);
    })
})

module.exports = router;