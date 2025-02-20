const express = require("express");
const { createProject, getAllProjects, getProjectById, updateProject, deleteProject } = require("../controllers/projectController");
const authmiddleware = require("../middleware/authmiddleware");

const router = express.Router();

router.post("/", authmiddleware, createProject);
router.get("/", getAllProjects);
router.get("/:id", getProjectById);
router.put("/:id", authMiddleware, updateProject);
router.delete("/:id", authMiddleware, deleteProject);

module.exports = router;
