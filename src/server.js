const express = require("express")
const app = express()


app.use("/", express.static("AnotherRoute"))
app.use("/books", express.static("books"))
app.use("/music", express.static("music"))
app.use("/movies", express.static("movies"))
app.use("/football", express.static("football"))

app.listen(5001, () => console.log("server is listening"))