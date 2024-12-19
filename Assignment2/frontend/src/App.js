import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreateNotePage from "./pages/CreateNotePage";
import NoteDetailPage from "./pages/NoteDetailPage";
import "./App.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create-note" element={<CreateNotePage />} />
          <Route path="/note/:id" element={<NoteDetailPage />} />
        </Routes>
        <ToastContainer />
      </div>
    </Router>
  );
}

export default App;
