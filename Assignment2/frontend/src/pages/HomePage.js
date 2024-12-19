import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";
import { deleteNoteApi } from "../utils/api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const HomePage = () => {
  const [notes, setNotes] = useState([]);

  const handleDelete = async (id) => {
    await deleteNoteApi(id);
    toast.success("Note deleted successfully!");
  };

  useEffect(() => {
    const loadNotes = async () => {
      const response = await fetch("http://localhost:3030/api/notes");
      const data = await response.json();
      if (data.status === 1) {
        setNotes(data.data);
      } else {
        setNotes([]);
      }
    };
    loadNotes();
  }, [handleDelete]);

  return (
    <div className="home-page">
      <div className="header">
        <h1>Notes</h1>

        <Link to="/create-note">
          <button className="take-note-button">Take a Note</button>
        </Link>
      </div>

      <div className="notes-container">
        {notes.length > 0 ? (
          notes.map((note) => (
            <div key={note.id} className="note">
              <Link to={`/note/${note.id}`} className="note-link">
                <h2>{note.title}</h2>
                <p>{note.description}</p>
                <small>{`${note.updated_on} ${note.updated_at}`}</small>
              </Link>

              <button
                className="delete-button"
                onClick={() => handleDelete(note.id)}
              >
                Delete
              </button>
            </div>
          ))
        ) : (
          <div className="no-notes-message">
            <p
              style={{
                color: "grey",
                alignItems: "center",
                marginLeft: "25%",
              }}
            >
              No notes
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
