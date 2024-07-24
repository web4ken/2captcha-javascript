const TwoCaptcha = require("../dist/index.js");
require('dotenv').config();
const APIKEY = process.env.APIKEY
const solver = new TwoCaptcha.Solver(APIKEY);
const fs = require('fs')
const imageBase64 = fs.readFileSync("./media/recaptchaGrid3x3.jpg", "base64")

solver.grid({
  body: imageBase64,
  textinstructions: "Select cars in the image"
})
.then((res) => {
    console.log(res);
})
.catch((err) => {
    console.log(err);
})