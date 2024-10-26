const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },  // Changed 'name' to 'title'
  description: { type: String, required: true },
  image: { type: String, required: true },  // New field for project image
  url: { type: String },
});

module.exports = mongoose.model('Project', projectSchema);
