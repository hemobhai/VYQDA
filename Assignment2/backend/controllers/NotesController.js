import NoteModel from "../models/Notes.js";
import Joi from "joi";

const getCurrentDateTime = () => new Date();

const createNote = async (req, res) => {
  try {
    const schema = Joi.object({
      title: Joi.string().required(),
      description: Joi.string().required(),
    });

    const dataToValidate = {
      title: req.body.title,
      description: req.body.description,
    };
    const { error, result } = await schema.validate(dataToValidate);
    if (error) {
      return res.status(400).send({
        message: error.message,
        status: 0,
      });
    }

    const existingTitle = await NoteModel.findOne({
      where: {
        title: req.body.title,
        status: "1",
      },
    });

    if (existingTitle) {
      return res.status(409).send({
        message: "Title already exists.",
        status: 0,
      });
    }

    const noteDetails = {
      title: req.body.title,
      description: req.body.description,
      status: "1",
      created_at: getCurrentDateTime(),
      created_on: getCurrentDateTime(),
      updated_at: getCurrentDateTime(),
      updated_on: getCurrentDateTime(),
    };

    const addNote = await NoteModel.create(noteDetails);

    return res.status(200).send({
      message: "Note Added",
      status: 1,
      data: addNote,
    });
  } catch (error) {
    console.error(error.message);
    return res.status(500).send({
      message: "Something went wrong.",
      status: 0,
    });
  }
};

const updateNote = async (req, res) => {
  try {
    const schema = Joi.object({
      id: Joi.number().required(),
      title: Joi.string().required(),
      description: Joi.string().required(),
    });

    const dataToValidate = {
      id: req.body.id,
      title: req.body.title,
      description: req.body.description,
    };
    const { error, result } = await schema.validate(dataToValidate);
    if (error) {
      return res.status(400).send({
        message: error.message,
        status: 0,
      });
    }

    const note = await NoteModel.findOne({
      where: {
        id: req.body.id,
        status: "1",
      },
    });

    if (!note) {
      return res.status(404).send({
        message: "Note not found",
        status: 0,
      });
    } else {
      const updateData = {
        title: req.body.title,
        description: req.body.description,
        updated_on: getCurrentDateTime(),
        updated_at: getCurrentDateTime(),
      };

      await note.update(updateData);

      return res.status(200).send({
        message: "Note updated.",
        status: 1,
      });
    }
  } catch (error) {
    console.error(error.message);
    return res.status(500).send({
      message: "Something went wrong.",
      status: 0,
    });
  }
};

const getAllNotes = async (req, res) => {
  try {
    const notes = await NoteModel.findAll({
      where: {
        status: "1",
      },
      order: [
        ["updated_on", "DESC"],
        ["updated_at", "DESC"],
      ],
    });

    if (notes.length > 0) {
      return res.status(200).send({
        message: "Notes found",
        status: 1,
        data: notes,
      });
    } else {
      return res.status(404).send({
        message: "No notes",
        status: 0,
      });
    }
  } catch (error) {
    console.error(error.message);
    return res.status(500).send({
      message: "Something went wrong.",
      status: 0,
    });
  }
};

const getNoteById = async (req, res) => {
  try {
    const schema = Joi.object({
      id: Joi.number().required(),
    });

    const dataToValidate = { id: req.body.id };
    const { result, error } = await schema.validate(dataToValidate);

    if (error) {
      return res.status(400).send({
        message: error.message,
        status: 0,
      });
    }

    const note = await NoteModel.findOne({
      where: {
        status: "1",
        id: req.body.id,
      },
    });

    if (note) {
      return res.status(200).send({
        message: "Note found",
        status: 1,
        data: note,
      });
    } else {
      return res.status(404).send({
        message: "Note not found",
        status: 0,
      });
    }
  } catch (error) {
    console.error(error.message);
    return res.status(500).send({
      message: "Something went wrong.",
      status: 0,
    });
  }
};

const deleteNote = async (req, res) => {
  try {
    const schema = Joi.object({
      id: Joi.number().required(),
    });

    const dataToValidate = { id: req.body.id };
    const { result, error } = await schema.validate(dataToValidate);

    if (error) {
      return res.status(400).send({
        message: error.message,
        status: 0,
      });
    }

    const note = await NoteModel.findOne({
      where: {
        status: "1",
        id: req.body.id,
      },
    });

    if (note) {
      await note.update({
        status: "0",
        updated_at: getCurrentDateTime(),
        updated_on: getCurrentDateTime(),
      });
      return res.status(200).send({
        message: "Note deleted.",
        status: 1,
      });
    } else {
      return res.status(404).send({
        message: "Note not found.",
        status: 0,
      });
    }
  } catch (error) {
    console.error(error.message);
    return res.status(500).send({
      message: "Something went wrong.",
      status: 0,
    });
  }
};

export default {
  createNote,
  updateNote,
  getAllNotes,
  getNoteById,
  deleteNote,
};
