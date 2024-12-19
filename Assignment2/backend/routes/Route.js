import express from "express";

const Router = express.Router();

import NotesController from "../controllers/NotesController.js";

Router.get("/notes", NotesController.getAllNotes);
Router.post("/note", NotesController.getNoteById);
Router.post("/create-note", NotesController.createNote);
Router.post("/update-note", NotesController.updateNote);
Router.post("/delete-note", NotesController.deleteNote);

export default Router;
