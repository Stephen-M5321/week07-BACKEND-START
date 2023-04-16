const { Router } = require("express");
const bookRouter = Router();

const Book = require("./model");

const { getAllBooks, getOneBook, addBook, updateBook, deleteBook } = require("./controllers");

bookRouter.get("/books/getallbooks", getAllBooks); 

bookRouter.post("/books/addbook", addBook);

bookRouter.put("/books/updatebook", updateBook); 

bookRouter.delete("/books/deleteBook", deleteBook); 

module.exports = bookRouter;

