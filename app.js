const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const bookRoutes = require("./routes/booksRoutes");

app.use(express.json());
app.use(bookRoutes);

app.listen(PORT, () => {
  console.log(`Serveur en écoute sur le port ${PORT}`);
});
