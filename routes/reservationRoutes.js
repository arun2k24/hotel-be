const express = require('express');
const router = express.Router();
const Reservation = require('../config/models.js/Reservation');

// Define the routes for reservations
router.get('/', async (req, res) => {
  try {
    const reservations = await Reservation.find();
    res.json(reservations);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post('/', async (req, res) => {
  const reservation = new Reservation({
    name: req.body.name,
    email: req.body.email,
    date: req.body.date,
    time: req.body.time,
  });

  try {
    const newReservation = await reservation.save();
    res.status(201).json(newReservation);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
