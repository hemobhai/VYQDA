import express from "express";
import cors from "cors";
import bodyparser from "body-parser";
import dotenv from "dotenv";
import Router from "./routes/Route.js";
import database from "./config/database.js";

dotenv.config();
const port = process.env.PORT;

const app = express();
app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));
app.use("/api/", Router);

app.use((req, res) => {
  return res.status(400).send({
    message: "Invalid URL",
    status: 0,
  });
});

database.sync();

app.listen(port, () => console.log(`App is running on ${port}`));
