const Book = require("./model");

const getAllBooks = async (req, res) => {
    try {
        const books = await Book.find({});

        const successResponse = {
            message: "success",
            books: books,
        };
    
        res.status(200).json(successResponse)   
      } catch (error) {
        console.log(error);  
        }
    };

    const addBook = async (req, res) => { 
        try{       
            const newBook =  await Book.create({
              author: req.body.author,
              genre: req.body.genre,
              title: req.body.title,
            });
    
      
            const successResponse = {
              messsage: "success",
              newBook: newBook,
            };
      
            res.status(201).json(successResponse)
          } catch(error) {
            console.log(error);
          }
    };


    const updateBook = async (req, res) => {
      try {
        const updateBook = await Book.updateOne ({ 
          title: req.body.title,
      },{
        author: req.body.author
      });
    
      const successSendResponse = {
          message: "Updated successfully",
          book: updateBook
        }  
        res.status(201).json(successSendResponse)
      } catch (error) {
        console.log(error)
      }
  }

const deleteBook = async (req, res) => {
try {
  const bookList = await Book.deleteOne ({ 
    title: req.body.title,
})
console.log(bookList)

const successSendResponse = {
    message: "Deleted successfully",
    book: bookList
}
res.status(201).json(successSendResponse)
} catch (error) {
  console.log(error);
  response.status(200).json(successSendResponse)
}}

    module.exports = {
        getAllBooks,
        addBook,
        updateBook,
        deleteBook,
    };
