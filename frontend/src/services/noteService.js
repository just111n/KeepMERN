import axios from "axios";

const REMOTE_SERVER = "https://keep-mern-sq52.vercel.app";
const LOCAL_SERVER = "http://localhost:5000";

export const createNote = async (newNote) => {
  try {
    const response = await axios.post(
      `${REMOTE_SERVER}/api/note/create`,
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
    const response = await axios.get(`${REMOTE_SERVER}/api/note/read/all`);
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const deleteNote = async (noteId) => {
  try {
    const response = await axios.delete(
      `${REMOTE_SERVER}/api/note/delete/${noteId}`
    );
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
