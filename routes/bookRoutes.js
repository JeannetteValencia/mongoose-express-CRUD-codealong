const router = require("express").Router();
const Book = require("../models/book.model")

router.get("/books", (req, res) => {
  Book
    .find()
    .then((booksFromDB)=>{
      const data = {
        booksArr: booksFromDB
      }
      res.render ("/books/books-list", data)
    })
    .catch((err)=>{
      res.send("An error has occurred", err)
      next(err);
    })
} )

module.exports = router;