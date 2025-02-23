const express = require("express");
const { createProject, getAllProjects, getProjectById, updateProject, deleteProject } = require("../controllers/projectController");
const authmiddleware = require("../middleware/authmiddleware");

const router = express.Router();

router.post("/", authmiddleware, createProject);
router.get("/", getAllProjects);
router.get("/:id", getProjectById);
router.put("/:id", authmiddleware, updateProject);
router.delete("/:id", authmiddleware, deleteProject);

module.exports = router;
