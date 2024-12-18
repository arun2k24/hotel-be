const express = require('express');
const MenuItem = require('../config/models.js/MenuItem');


const router = express.Router();

// Get all menu items
router.get('/', async (req, res) => {
  try {
    const menu = await MenuItem.find();
    res.json(menu);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch menu items' });
  }
});

// Add a menu item
router.post('/', async (req, res) => {
  try {
    const newItem = new MenuItem(req.body);
    await newItem.save();
    res.status(201).json(newItem);
  } catch (err) {
    res.status(400).json({ error: 'Failed to add menu item' });
  }
});

module.exports = router;
