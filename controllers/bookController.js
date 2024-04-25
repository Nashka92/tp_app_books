const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "..", "data", "bookData.json");

// 1 - Liste de tout les livres
const getAllBooks = (req, res) => {
  fs.readFile(filePath, "utf8", (err, data) => {
    res.json(JSON.parse(data));
  });
};

// 2 - Détails d'un livre (par l'id)
const getBookById = (req, res) => {
  fs.readFile(filePath, "utf8", (err, data) => {
    const books = JSON.parse(data);
    const book = books.livres.find((el) => el.id === parseInt(req.params.id));
    res.json(book);
  });
};

// 3 - Ajout d'un nouveau livre (simulation avec postman)
const addBook = (req, res) => {
  console.log("Ajout du livre", req.body);
  res.send("Livre ajouté avec succès");
};

// 4 - Recherche de livre par auteur
const getBooksByAuthor = (req, res) => {
  fs.readFile(filePath, "utf8", (err, data) => {
    const books = JSON.parse(data);
    const booksByAuthor = books.livres.filter(
      (el) => el.auteur.toLowerCase() === req.params.auteur.toLowerCase()
    );
    res.json(booksByAuthor);
  });
};

// Exports
module.exports = {
  getAllBooks,
  getBookById,
  addBook,
  getBooksByAuthor,
};
