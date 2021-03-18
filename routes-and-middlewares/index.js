import express from "express";
const app = express();

const PORT = 4000;
app.listen(PORT, () => console.log("Listening!"));

// Codesanbox does not need PORT :)
// app.listen(() => console.log(`Listening!`));

const handleHome = (req, res) => res.send("Home.");
const handleAboutUs = (req, res) => res.send("About Us.");
const handleContact = (req, res) => res.send("Contact.");
const handleProtected = (req, res) => res.redirect("/");

const friendlyMiddleware = (req, res, next) => {
  if (req.originalUrl.includes('favicon.ico')) {
    res.status(204).end();
  }
  console.log("I'm a middleware", req.url);
  next();
};

app.use(friendlyMiddleware);

app.get("/", handleHome);
app.get("/about-us", handleAboutUs);
app.get("/contact", handleContact);
app.get("/protected", handleProtected);