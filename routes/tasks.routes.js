// const {
//   getTasks,
//   createTask,
//   updateTask,
//   deleteTask,
// } = require("../controllers/task.controller");
// const upload = require("../config/multerConfig");

// const router = require("express").Router();

// router.get("/", getTasks);
// router.post("/", upload.single("pdf"), createTask);
// router.patch("/:id", updateTask);
// router.delete("/:id", deleteTask);

// module.exports = router;
const {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
} = require("../controllers/task.controller");
const upload = require("../config/multerConfig"); // Import the multer config

const router = require("express").Router();

// Route to get all tasks
router.get("/", getTasks);

// Route to create a new task; accepts a PDF file upload
router.post("/", upload.single("pdf"), createTask);

// Route to update a specific task by ID
router.patch("/:id", updateTask);

// Route to delete a specific task by ID
router.delete("/:id", deleteTask);

module.exports = router;
