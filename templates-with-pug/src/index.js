import express from "express";
import path from "path";
import globalRouter from "./globalRouter";
import { localMiddleware } from "./middlewares";

const app = express();
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

// Add your magic here!
app.use(localMiddleware);

app.use("/", globalRouter);

// Codesanbox does not need PORT :)
app.listen(() => console.log(`Listening!`));
