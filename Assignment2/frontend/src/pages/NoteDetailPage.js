import React, { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { fetchNoteDetail, updateNoteApi, deleteNoteApi } from "../utils/api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./NoteDetailPage.css";
function NoteDetailPage() {
  const [note, setNote] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchNote = async () => {
      const noteData = await fetchNoteDetail(id);
      setNote(noteData);
      setTitle(noteData.title);
      setDescription(noteData.description);
    };

    fetchNote();
  }, [id]);

  const handleUpdate = async () => {
    if (title && description) {
      await updateNoteApi(id, title, description);
      toast.success("Note updated successfully!");
      navigate(`/note/${id}`);
    } else {
      toast.error("Both title and description are required.");
    }
  };

  const handleDelete = async () => {
    await deleteNoteApi(id);
    toast.success("Note deleted successfully!");
    navigate("/");
  };

  if (!note) return <div>Loading...</div>;

  return (
    <div className="note-detail-page">
      <h1>Note Detail</h1>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="editable-title"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <div className="actions">
        <button onClick={handleUpdate}>Update Note</button>
        <button onClick={handleDelete} className="delete-btn">
          Delete Note
        </button>
      </div>
      <Link to="/">Back to Notes</Link>
    </div>
  );
}

export default NoteDetailPage;
