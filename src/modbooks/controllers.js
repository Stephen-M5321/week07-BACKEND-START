const Book = require("./model");

//get all books or one book by title

const getAllBooks = async (req, res) => {
  try {
    const { title } = req.query;

    let books;

    if (title) {
      books = await Book.find({ title });
    } else {
      books = await Book.find({});
    }

    const successResponse = {
      message: "success",
      books: books,
    };

    res.status(200).json(successResponse);
  } catch (error) {
    console.log(error);
  }
};

// E.G  http://localhost:5001/books/getallbooks?title=The%history%of%flipflops




// const getAllBooks = async (req, res) => {
//   try {
//     const books = await Book.find({});

//     const successResponse = {
//       message: "success",
//       books: books,
//     };

//     res.status(200).json(successResponse)
//   } catch (error) {
//     console.log(error);
//   }
// };

const addBook = async (req, res) => {
  try {
    const newBook = await Book.create({
      author: req.body.author,
      genre: req.body.genre,
      title: req.body.title,
    });


    const successResponse = {
      messsage: "success",
      newBook: newBook,
    };

    res.status(201).json(successResponse)
  } catch (error) {
    console.log(error);
  }
};


const updateBook = async (req, res) => {
  try {
    const updateBook = await Book.updateOne({
      title: req.body.title,
    }, {
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

// const deleteBook = async (req, res) => {
//   try {
//     const bookList = await Book.deleteOne({
//       title: req.body.title,
//     })
//     console.log(bookList)

//     const successSendResponse = {
//       message: "Deleted successfully",
//       book: bookList
//     }
//     res.status(201).json(successSendResponse)
//   } catch (error) {
//     console.log(error);
//     response.status(200).json(successSendResponse)
//   }
// }

const deleteBook = async (req, res) => {
  try {
    let bookList;
    if (req.body.title) {
      bookList = await Book.deleteOne({ title: req.body.title });
    } else {
      bookList = await Book.deleteMany({});
    }
    console.log(bookList);

    const successSendResponse = {
      message: "Deleted successfully",
      book: bookList,
    };
    res.status(201).json(successSendResponse);
  } catch (error) {
    console.log(error);
    const errorSendResponse = {
      message: "Error deleting book(s)",
      error: error.message,
    };
    response.status(200).json(errorSendResponse);
  }
};
// NEEDS LOOKING AT AGAIN ===============???>>>>>>>>>>>>>>






module.exports = {

  getAllBooks,
  addBook,
  updateBook,
  deleteBook,
};
