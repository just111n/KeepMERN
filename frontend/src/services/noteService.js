import axios from "axios";

export const createNote = async (newNote) => {
  try {
    const response = await axios.post(
      `https://keep-mern-sq52.vercel.app/api/note/create`,
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
    const response = await axios.get(`https://keep-mern-sq52.vercel.app/api/note/read/all`);
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const deleteNote = async (noteId) => {
  try {
    const response = await axios.delete(
      `https://keep-mern-sq52.vercel.app/api/note/delete/${noteId}`
    );
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
