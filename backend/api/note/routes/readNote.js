const noteService = require("../../../services/noteService");

exports.readAllNotes = async (req, res, next) => {
  try {
    const notes = await noteService.readAllNotes();
    
    return res.status(200).json({
      message: "Notes read Successfully",
      data: notes,
    });
  } catch (error) {
    return res.status(401).json({
      message: "Failed to read all notes",
      error: err.message,
    });
  }
};
