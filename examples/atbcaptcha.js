const TwoCaptcha = require("../dist/index.js");
require('dotenv').config();
const APIKEY = process.env.APIKEY
const solver = new TwoCaptcha.Solver(APIKEY);

solver.atbCaptcha({
    pageurl: "https://mysite.com/page/with/atbCAPTCHA",
    appId: "af25e409b33d722a95e56a230ff8771c",
    apiServer: "https://cap.aisecurius.com"
})
.then((res) => {
    console.log(res);
})
.catch((err) => {
    console.log(err);
})