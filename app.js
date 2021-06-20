
const express = require("express");
const db = require("./db/models")

//Routes
const eventsRoutes = require("./routes/events");
//Creat App Instence
const app = express();

app.use(express.json());
//routes
app.use("/event", eventsRoutes);


db.sequelize.sync();

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`The application is running on localhost: ${PORT}`);
});
