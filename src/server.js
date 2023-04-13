const express = require("express")
require("dotenv").config()
require("./db/connection")
const Book = require("./modbooks/model")

const app = express()

app.use (express.json())

app.get("/books/getallbooks", async (req, res) => {
    try {
        const books = await Book.find({});
        // console.log("books: ", typeof books, books);      (used for testing)
        const successResponse = {
            message: "success",
            books: books,
        };
    
        res.status(200).json(successResponse)   
      } catch (error) {
        console.log(error);  
        }
})

app.delete("/books/deletebook", async (req, res) => {
    const deletedItem = await Book.deleteOne ({ 
        // title: request.body.title,
        // author: request.body.author,
        title: req.body.title,

    })
    console.log(deletedItem)

    const successSendResponse = {
        message: "Deleted successfully",
        book: deletedItem
    }
    // response.send(successSendResponse)
    res.status(200).json(successSendResponse)
})

app.post("/books/addbook", async (req, res) => {
    try{       
        const newBook =  await Book.create({
          author: req.body.author,
          genre: req.body.genre,
          title: req.body.title,
        });
  
        // console.log(typeof newBook);                   (used for testing)
        // console.log(newBook);                          (used for testing)
  
        const successResponse = {
          messsage: "success",
          newBook: newBook,
        };
  
        res.status(201).json(successResponse)
      } catch(error) {
        console.log(error);
      }
} )

app.listen(5001, () => console.log("server is listening on 5001"))

