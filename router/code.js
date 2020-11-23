const connection = require('../db/index');
const express = require("express");
const router = express.Router();
const app = express();
const bodyParser = require("body-parser");

//使用body-parser中间件
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

//获取验证码
router.get('/getCode', (req, res) => {

  res.set("Access-Control-Allow-Origin", "*");
  res.status(200);
  let data = {
    code: 200,
    data: Math.floor(Math.random(2222, 9999) * 10000)
  }
  res.json(data);
})


module.exports = router;