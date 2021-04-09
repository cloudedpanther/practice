import fs from "fs";

export const home = (req, res) => {
  if (req.method === "GET") {
    res.render("home", { pageTitle: "PDF2PNG" });
  } else if (req.method === "POST") {
    try {
      const {
        file: { path }
      } = req;
      fs.readFile(path, "utf-8", (err, data) => {
        if (err) {
          console.log(err);
          res.render("home", { pageTitle: "PDF2PNG" });
        } else {
          res.render("read", { pageTitle: "Contents", description: data });
        }
      });
    } catch (error) {
      res.render("home", { pageTitle: "PDF2PNG" });
    }
  }
};
