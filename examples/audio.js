const TwoCaptcha = require("../dist/index.js");
require('dotenv').config();
const APIKEY = process.env.APIKEY
const solver = new TwoCaptcha.Solver(APIKEY);
const fs = require('fs')
const audioCaptchaBase64 = fs.readFileSync("./media/example.mp3", "base64")

solver.audio({
  body: audioCaptchaBase64,
  lang: 'en'
})
.then((res) => {
    console.log(res);
})
.catch((err) => {
    console.log(err);
})