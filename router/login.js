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


//登录
router.post('/login', (req, res) => {
   let isSame = 'SELECT * FROM user where name = "' + req.body.username + '" and password = "' + req.body.password + '"';
   connection.query(isSame, (err, re) => {
      console.log(re)
      if (err) {
         return res.status(404).json('用户名或密码错误！！！');;
      }

      if (re.length == 0) {
         res.status(200);
         let data = {
            code: 220,
            msg: "用户名或密码错误！！！"
         }
         res.json(data);

         return;
      } else {
         res.status(200);
         let data = {
            code: 200,
            msg: "登录成功",
            data: re
         }
         res.json(data);
      }



   })

})

module.exports = router;