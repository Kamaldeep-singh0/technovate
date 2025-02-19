const express = require("express");
const Project = require("../models/Project");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// Create Project
router.post("/", authMiddleware, async (req, res) => {
  try {
    const project = new Project({ ...req.body, userId: req.userId });
    await project.save();
    res.status(201).json(project);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get All Projects
router.get("/", async (req, res) => {
  try {
    const projects = await Project.find().populate("userId", "name");
    res.json(projects);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
