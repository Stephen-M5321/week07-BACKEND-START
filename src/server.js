const express = require("express")
require("dotenv").config()
require("./db/connection")
const Book = require("./modbooks/model")

const app = express()


app.use("/", express.static("AnotherRoute"))
app.use("/books", express.static("books"))
// app.use("/music", express.static("music"))
// app.use("/movies", express.static("movies"))
// app.use("/football", express.static("football"))


app.use (express.json())

app.get("/book", (request, response) => {
    const book = {
        title:"Lord of the rings",
        author:"Tolkein",
        genre:"fantasy"
    }

    const successResponse = {
        message: "Response sent successfully",
        book: book
    }

    // response.send("hello from the book route")

    response.send(successResponse)
} )

app.get("/anotherRoute", (request, response) => {
    response.send("hello from the another route")
} )

app.get("/books/getallbooks", async (request, response) => {
    const bookList = await Book.find ({ 
        
    })
    console.log(bookList)

    const successSendResponse = {
        message: "Retrieved list of books successfully",
        book: bookList
    }
    // response.send(successSendResponse)
    response.status(200).json(successSendResponse)
})

app.post("/books/addbook", async (request, response) => {
    const newBook = await Book.create ({ 
        title: request.body.title,
        author: request.body.author,
        genre: request.body.genre
    })
    console.log(newBook)

    // console.log(request.body)

    // const newBook = {
    //     id: "12345",
    //     title: request.body.title,
    //     author: request.body.author,
    //     genre: request.body.genre,
    // }

    const successSendResponse = {
        message: "Response sent successfully",
        book: newBook
    }

    // response.send("hello from the book route")

    // response.send(successSendResponse)
    response.status(201).json(successSendResponse)

    // response.send("Hello from the post route")
} )

app.listen(5001, () => console.log("server is listening on 5001"))

