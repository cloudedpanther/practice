import multer from "multer";

const multerText = multer({ dest: "texts/" });

export const uploadText = multerText.single("textFile");
