const express = require('express');
const router = express.Router();
const Project = require('../models/Project');

// GET all projects
router.get('/', async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST new project (for future addition if needed)
router.post('/', async (req, res) => {
  const project = new Project({
    title: req.body.title,                // Changed 'name' to 'title'
    description: req.body.description,
    image: req.body.image,                // New field for project image
    url: req.body.url,
  });
  try {
    const newProject = await project.save();
    res.status(201).json(newProject);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
