import { DataTypes } from "sequelize";
import database from "../config/database.js";

const NoteModel = database.define("notes", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  created_at: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
  created_on: {
    type: DataTypes.DATEONLY,
    allowNull: true,
    defaultValue: DataTypes.NOW,
  },
  updated_at: {
    type: DataTypes.TIME,
    allowNull: true,
    defaultValue: DataTypes.NOW,
  },
  updated_on: {
    type: DataTypes.DATEONLY,
    allowNull: true,
    defaultValue: DataTypes.NOW,
  },
  status: {
    type: DataTypes.ENUM,
    values: ["0", "1"],
    defaultValue: "1",
    allowNull: false,
  },
});

NoteModel.sync({ alter: true });

export default NoteModel;
