const Note = require("../models/note");

exports.createNote = async (title, content) => {
  try {
    const newNote = await Note.create({
      title: title,
      content: content,
    });
    return newNote;
  } catch (error) {
    // Handle the error, e.g., log it, send it to an error tracking system, etc.
    console.error("Error creating a note:", error);
    throw error; // re-throwing so the caller is aware of the error
  }
};

exports.readAllNotes = async () => {
  try {
    const notes = await Note.find();
    return notes;
  } catch (error) {
    // Handle the error
    console.error("Error reading notes:", error);
    throw error; // re-throwing so the caller is aware of the error
  }
};

exports.updateNote = async (noteId, title, content) => {
  try {
    const noteToUpdate = await Note.findById(noteId);
    noteToUpdate.title = title;
    noteToUpdate.content = content;
    await noteToUpdate.save();
    return noteToUpdate;
  } catch (error) {
    // Handle the error
    console.error("Error reading notes:", error);
    throw error; // re-throwing so the caller is aware of the error
  }
};

exports.deleteNote = async (noteId) => {
  try {
    const deletedNote = await Note.findByIdAndDelete(noteId);
    return deletedNote;
  } catch (error) {
    // Handle the error
    console.error("Error deleting notes:", error);
    throw error; // re-throwing so the caller is aware of the error
  }
};
