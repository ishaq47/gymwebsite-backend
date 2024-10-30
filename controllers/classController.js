// src/controllers/classController.js
const Class = require('../models/classModel');

// Get all classes
exports.getAllClasses = async (req, res) => {
  try {
    const classes = await Class.find();
    res.json(classes);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching classes', error });
  }
};

// Add a new class
exports.addClass = async (req, res) => {
  const { name, instructor, time, capacity, description, image } = req.body;
  const newClass = new Class({ name, instructor, time, capacity, description, image });

  try {
    await newClass.save();
    res.status(201).json(newClass);
  } catch (error) {
    res.status(400).json({ message: 'Error adding class', error });
  }
};

// Delete a class by ID
exports.deleteClass = async (req, res) => {
  try {
    const deletedClass = await Class.findByIdAndDelete(req.params.id);
    if (!deletedClass) {
      return res.status(404).json({ message: 'Class not found' });
    }
    res.json(deletedClass);
  } catch (error) {
    res.status(500).json({ message: 'Error deleting class', error });
  }
};
