import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addNoteToApi } from "../utils/api";
import "./CreateNotePage.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function CreateNotePage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async () => {
    if (!title || !description) {
      toast.error("Title and description are required.");
      return;
    }

    await addNoteToApi(title, description);
    navigate("/");
    toast.success("Note created successfully!");
  };

  return (
    <div className="create-note-page">
      <h1>Create a New Note</h1>
      <input
        type="text"
        placeholder="Note Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Take your note..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default CreateNotePage;
