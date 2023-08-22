const noteService = require("../../../services/noteService");

exports.updateNote = async (req, res, next) => {
  try {
    const noteId = req.params.id;
    const { title, content } = req.body;
    const note = await noteService.updateNote(noteId, title, content);

    return res.status(200).json({
      message: "Note updated Successfully",
      data: note,
    });
  } catch (error) {
    return res.status(401).json({
      message: "Failed to update note",
      error: err.message,
    });
  }
};
