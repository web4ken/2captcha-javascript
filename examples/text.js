const TwoCaptcha = require("../dist/index.js");
require('dotenv').config();
const APIKEY = process.env.APIKEY
const solver = new TwoCaptcha.Solver(APIKEY);

solver.text({
  textcaptcha: "If tomorrow is Saturday, what day is today?",
  lang: 'en'
})
.then((res) => {
  console.log(res);
 })
.catch((err) => {
  console.log(err);
})