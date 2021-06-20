const express = require("express");
//let products = require("../data");

const router = express.Router();

const {
  eventsDetails,
  eventsList,
  eventsAdd,
  eventsDelete,
} = require("../controllers/eventsControllers");

router.get("/", eventsList);

router.get("/:eventId",eventsDetails);

router.delete("/:eventId", eventsDelete);

router.post("/", eventsAdd);


router.put("/:eventId");
module.exports = router;