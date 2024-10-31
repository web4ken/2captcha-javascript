const TwoCaptcha = require("../dist/index.js");
require('dotenv').config();
const APIKEY = process.env.APIKEY
const solver = new TwoCaptcha.Solver(APIKEY);
const fs = require('fs')
const imageBase64 = fs.readFileSync("./media/recaptchaGrid4x4.jpg", "base64")
const instructionsImageBase64 = fs.readFileSync("./media/recaptchaGridImginstructions4x4.jpg", "base64")

solver.grid({
  body: imageBase64,
  textinstructions: "Select all squares with stairs",
  imginstructions: instructionsImageBase64,
  cols: 4,
  rows: 4
})
.then((res) => {
    console.log(res);
})
.catch((err) => {
    console.log(err);
})