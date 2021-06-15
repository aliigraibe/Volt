const express = require("express");
const app = express();
const data = require("./data")

app.listen(8000, () => {
    console.log("The application is running on localhost:8000");
});

  
  app.get("/data", (req, res) => {
    res.json(data);
});