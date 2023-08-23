import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import CreateArea from "./components/CreateArea";
import "./App.css";
import { createNote, readAllNotes, deleteNote } from "./services/noteService";
import CircularProgress from "@mui/material/CircularProgress";
import Alert from "@mui/material/Alert";

function App() {
  const [notes, setNotes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  async function fetchNotes() {
    setIsLoading(true);
    setErrorMessage("");
    try {
      const {
        data: { data: fetchedNotes },
      } = await readAllNotes();
      setNotes(fetchedNotes);
    } catch (error) {
      setErrorMessage(
        error.response?.data?.message ||
          "An error occurred while fetching notes."
      );
      console.error(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchNotes();
  }, []);

  async function onAddNoteHandler(newNote) {
    try {
      await createNote(newNote);
      fetchNotes();
    } catch (error) {
      setErrorMessage(
        error.response?.data?.message ||
          "An error occurred while adding a note."
      );
      console.log(error);
    }
  }

  async function onDeleteNoteHandler(noteId) {
    try {
      await deleteNote(noteId);
      fetchNotes();
    } catch (error) {
      setErrorMessage(
        error.response?.data?.message ||
          "An error occurred while deleting a note."
      );
      console.log(error);
    }
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={onAddNoteHandler} />
      {isLoading && (
        <div class="container">
          <CircularProgress className="loading-icon" />
        </div>
      )}
      {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
      {!isLoading &&
        !errorMessage &&
        notes.map((noteItem) => {
          return (
            <Note
              key={noteItem._id}
              noteId={noteItem._id}
              title={noteItem.title}
              content={noteItem.content}
              onDelete={onDeleteNoteHandler}
            />
          );
        })}
      <Footer />
    </div>
  );
}

export default App;
