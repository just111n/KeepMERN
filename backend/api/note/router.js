const express = require("express");
const router = express.Router();

const { createNote } = require("./routes/createNote");
const { readAllNotes } = require("./routes/readNote");
const { updateNote } = require("./routes/updateNote");
const { deleteNote } = require("./routes/deleteNote");

router.route("/create").post(createNote);
router.route("/read/all").get(readAllNotes);
router.route("/update/:id").put(updateNote);
router.route("/delete/:id").delete(deleteNote);

module.exports = router;
