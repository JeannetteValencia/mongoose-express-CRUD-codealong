display a list with all the books

create route / render the view
  const index = require("./routes/index");
  app.use("/", index);
make a request to the DB --> Book find
create a view and pass the data from the DB

Book details page
[x] update 'books-list.hbs' (add link to each book)
[x] create a route (GET '/books/:bookid'
[x] Make a request to the DB to get the details of book with id
[x] create a view book-details

*** CREATE ***

Step 4: (CREATE) functionality to create new books
4.1 Display a form to create new books
[ ]Add link in the homepage
[ ] create a route (GET/books/create)
[ ]create a view ('book-create.hbs')

4.2 Receive the informatin from the form and save in DB
[ ] Create a route (POST '/books/process-form)
[ ] Make a request to the DB to save the new book--> Book.createredirect

*** UPDATE ***

Step 5 Display a Form to Edit
[x] Add link to book-details page
[ ] Create a Route (GET '/books/:bookId/edit')
[ ] Make a query to the DB with the method Book.findById (req.params.bookId)
[ ] Create a views (books-create.hbs)