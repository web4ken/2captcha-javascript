const fs = require('fs');
const TwoCaptcha = require("../dist/index.js");
require('dotenv').config();
const APIKEY = process.env.APIKEY;
const solver = new TwoCaptcha.Solver(APIKEY);

const imageBase64 = fs.readFileSync("./media/boundingBox.jpg", "base64")
const imageInstructionsBase64 = fs.readFileSync("./media/boundingBoxImginstructions.jpg", "base64")

solver.boundingBox({ 
  image: imageBase64,
  // important, be sure to convey instructions to employees in the form of "imginstructions" or "textinstructions"
  imginstructions: imageInstructionsBase64,
  textinstructions: "Circle all the cars in the image.",
})
.then((res) => {
    console.log(res);
})
.catch((err) => {
    console.log(err);
})