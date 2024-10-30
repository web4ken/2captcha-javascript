const TwoCaptcha = require("../dist/index.js");
require('dotenv').config();
const APIKEY = process.env.APIKEY
const solver = new TwoCaptcha.Solver(APIKEY);

solver.tencent({
    pageurl: "https://mysite.com/page/with/tencent",
    appId: "189956587"
})
.then((res) => {
    console.log(res);
})
.catch((err) => {
    console.log(err);
})