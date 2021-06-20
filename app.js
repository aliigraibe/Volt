
const express = require("express");
const db = require("./db/models")

//Routes
const productsRoutes = require("./routes/products");
//Creat App Instence
const app = express();

app.use(express.json());
//routes
app.use("/products", productsRoutes);


db.sequelize.sync();

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`The application is running on localhost: ${PORT}`);
});