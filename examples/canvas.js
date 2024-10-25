const TwoCaptcha = require("../dist/index.js");
require('dotenv').config();
const APIKEY = process.env.APIKEY
const solver = new TwoCaptcha.Solver(APIKEY);
const fs = require('fs')
const imageBase64 = fs.readFileSync("./media/canvas.png", "base64")
const imginstructionsBase64 = fs.readFileSync("./media/canvasImgInstructions.jpg", "base64")

solver.canvas({
    body: imageBase64,
    textinstructions: 'Highlight the red CIRCLE',
    imginstructions: imginstructionsBase64,
})
.then((res) => {
    console.log(res);
})
.catch((err) => {
    console.log(err);
})