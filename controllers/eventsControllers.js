const { Event } = require("../db/models");
const sequelize = require("sequelize");
const op = sequelize.Op;
exports.eventsList = async (req, res) => {
  try {
    let allEvents;
    if (req.body.date) {
      allEvents = await Event.findAll({
        where: {
          startDate: { [op.gt]: req.body.date },
        },

        attributes: ["name", "image", "id"],

        order: [["startDate"], ["name"]],
      });
    } else {
      allEvents = await Event.findAll({
        attributes: ["name", "image", "id"],

        order: [["startDate"], ["name"]],
      });
    }
    res.json(allEvents);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.eventDetails = async (req, res) => {
  try {
    const { eventId } = req.params;
    const foundEvents = await Event.findByPk(eventId);
    res.json(foundEvents);
  } catch (error) {
    res.status(500).json({ message: message.error });
  }
};

exports.eventsAdd = async (req, res) => {
  try {
    const newEvent = await Event.bulkCreate(req.body);
    res.status(201).json(newEvent);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.eventsDelete = async (req, res) => {
  try {
    await Event.destroy({ where: { id: req.body } });
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.eventUpdate = async (req, res) => {
  const { eventId } = req.params;
  try {
    const foundEvent = await Event.findByPk(eventId);
    if (foundEvent) {
      await foundEvent.update();
      res.status(204).end();
    } else {
      res.status(404).json({ message: "not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
exports.fullyBooked = async (req, res) => {
  try {
    const foundList = await Event.findAll({
      where: {
        numberOfSeats: {
          [op.eq]: sequelize.col("bookedSeats"),
        },
      },
    });

    res.status(201).json(foundList);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
