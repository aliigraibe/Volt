const express = require("express");
let products = require("../data");

const router = express.Router();

const {
  productsDetails,
  productsList,
  productsAdd,
  productsDelete,
} = require("../controllers/productsControllers");

router.get("/", productsList);

//router.get("/:productId", productsDetails);

router.delete("/:productId", productsDelete);

router.post("/", productsAdd);


router.put("/:productId");
module.exports = router;