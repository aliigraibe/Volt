const express = require("express");
const db = require("./db/models");

const events = require("./routes/events");
const app = express();

app.use(express.json());
app.use("/events", events);

db.sequelize.sync({ force: true });

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`The application is running on localhost: ${PORT}`);
});
