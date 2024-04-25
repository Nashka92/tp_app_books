// routes/bookRoutes.js
const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

// Ici on définit les routes associées aux fonctions du bookController
router.get('/', bookController.getAllBooks)
router.get('/livres', bookController.getAllBooks);
router.get('/livres/:id', bookController.getBookById);
router.post('/ajout-livre', bookController.addBook);
router.get('/recherche-livre/auteur/:auteur', bookController.getBooksByAuthor);

module.exports = router;
