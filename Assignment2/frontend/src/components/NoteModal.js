import React, { useState } from "react";

const NoteModal = ({ addNote, closeModal }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = () => {
    if (title && description) {
      addNote(title, description);
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <input
          type="text"
          placeholder="Note Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Take your note..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button onClick={handleSubmit}>Submit</button>
        <button onClick={closeModal}>Close</button>
      </div>
    </div>
  );
};

export default NoteModal;
