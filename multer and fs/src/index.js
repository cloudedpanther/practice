import express from "express";
import path from "path";
import bodyParser from "body-parser";
// import multer from "multer";
// import fs from "fs";
import globalRouter from "./globalRouter";

const app = express();

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", globalRouter);

// Codesanbox does not need PORT :)
app.listen(() => console.log(`Listening!`));
