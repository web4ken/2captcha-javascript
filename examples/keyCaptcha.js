const TwoCaptcha = require("../dist/index.js");
require('dotenv').config();
const APIKEY = process.env.APIKEY
const solver = new TwoCaptcha.Solver(APIKEY);

solver.keyCaptcha({
    pageurl: "https://2captcha.com/demo/keycaptcha",
    s_s_c_user_id: '184015',
    s_s_c_session_id: '0917788cad24ad3a69813c4fcd556061',
    s_s_c_web_server_sign: '02f7f9669f1269595c4c69bcd4a3c52e',
    s_s_c_web_server_sign2: 'd888700f6f324ec0f32b44c32c50bde1'
})
.then((res) => {
    console.log(res);
})
.catch((err) => {
    console.log(err);
})