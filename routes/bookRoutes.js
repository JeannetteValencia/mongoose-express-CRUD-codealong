const router = require("express").Router();
const Book = require("../models/book.model")

//READ List of books 
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

// CREATE New Book
router.get ("/books/create", (req, res, next)=>{
  res.render("books/book-create");
})

router.post ("/books/create", (req, res, next)=>{
  const {title, author, description, rating} = req.body
  Book
    .create({title, author, description, rating})
    .then(()=>{
      res.redirect("/books")
    })
    .catch((err)=>{
      console.log("Error creating a new book", err);
      next(err);
    })
})

router.get("/books/:bookId", (req, res, next)=>{ //params
  Book
    .findById(req.params.bookId)
    .then((bookFromDB)=>{
       res.render("books/books-details", bookFromDB) //no slash HERE!!!!
    })
    .catch((err)=>{
      console.log("Error getting details from a single book from the DB", err);
      next(err);
    })
})

router.get("/books/:bookId/edit", (req, res, next)=>{
  Book
    .findById(req.params.bookId)//the id depends on the request
    .then((booksFromDB)=>{
      res.render("books/book-edit", booksFromDB)
    })
    .catch((err)=>{
      console.log("Error getting details from a single book from the DB", err);
      next(err);
    })
  })

router.post('/books/:bookId/edit', (req, res, next) => {

  const {title, author, description, rating} = req.body;
  const newDetails = {
      title,
      author,
      description,
      rating
  };

  Book.findByIdAndUpdate(req.params.bookId, newDetails, {new: true})
      .then( (bookFromDB) => {
          res.redirect('/books/' + bookFromDB._id);
      })
      .catch( (error) => {
          console.log("Error updating book details", error);
          next(error);
      });
});

router.post("/books/:booksId/delete", (req, res, next)=>{
  Book
    .findByIdAndDelete(req.params.bookId)
    .then(()=>{
      res.redirect("/books");
    })
    .catch((err)=>{
      console.log("Error deleting books", err);
      next(err);
    })
})
module.exports = router;