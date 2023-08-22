const noteService = require("../../../services/noteService");

exports.createNote = async (req, res, next) => {
  try {
    const { title, content } = req.body;

    const newNote = await noteService.createNote(title, content);
    return res.status(201).json({
      message: "Note created Successfully",
      data: newNote,
    });
  } catch (error) {
    return res.status(401).json({
      message: "Note not created",
      error: err.message,
    });
  }
};
