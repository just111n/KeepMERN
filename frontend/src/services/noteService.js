import axios from "axios";

export const createNote = async (newNote) => {
  try {
    const response = await axios.post(
      `http://localhost:5000/api/note/create`,
      newNote
    );
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const readAllNotes = async () => {
  try {
    const response = await axios.get(`http://localhost:5000/api/note/read/all`);
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const deleteNote = async (noteId) => {
  try {
    const response = await axios.delete(
      `http://localhost:5000/api/note/delete/${noteId}`
    );
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
