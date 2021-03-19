import express from "express";
import routes from "./routes";
import globalRouter from "./routers/globalRouter";
import coursesRouter from "./routers/coursesRouter";
import apiRouter from "./routers/apiRouter";

const app = express();

// Codesanbox does not need PORT :)
app.listen(() => console.log(`Listening!`));

app.use(routes.home, globalRouter);
app.use(routes.courses, coursesRouter);
app.use(routes.api, apiRouter); // Two more routers inside this router
