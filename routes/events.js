const express = require("express");
const router = express.Router();

const {
  eventDetails,
  eventsList,
  eventsAdd,
  eventsDelete,
  eventUpdate,
  fullyBooked
} = require("../controllers/eventsControllers");
router.delete("/", eventsDelete);
router.put("/:eventId", eventUpdate);
router.post("/", eventsAdd);
router.get("/", eventsList);
router.get("/fullybooked", fullyBooked);
router.get("/:eventId", eventDetails);
module.exports = router;
