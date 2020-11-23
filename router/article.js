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

//获取分类列表
router.get('/getCategorylist', (req, res) => {

  // sql = 'SELECT * FROM user';
  sql = 'SELECT * FROM category';

  //查询
  connection.query(sql, (err, result) => {
    if (err) {
      console.log('[SELECT ERROR] - ', err.message);
      return res.status(404).json('没有任何内容');
    }
    res.set("Access-Control-Allow-Origin", "*");
    res.status(200);
    let data = {
      code: 200,
      data: result
    }
    res.json(data);

  });

})

//增加分类
router.post('/addCategory', (req, res) => {
  let isSame = 'SELECT * FROM category where name = "' + req.body.name + '"';
  res.set("Access-Control-Allow-Origin", "*");
  connection.query(isSame, (err, re) => {
    console.log(re.length)
    if (re.length !== 0) {
      res.status(200);
      let data = {
        code: 220,
        msg: "添加失败，分类名称重复"
      }
      res.json(data);
    } else {
      var addSql = 'INSERT INTO category(name,createtime) VALUES(?,?)';

      var addSqlParams = [req.body.name, new Date()];;

      //执行sql添加分类
      connection.query(addSql, addSqlParams, (err, result) => {

        if (err) {
          console.log('[INSERT ERROR] - ', err.message);
          res.status(404).json('添加失败');;
        } else {
          res.status(200);
          let data = {
            code: 200,
            msg: "添加成功"
          }
          res.json(data);
        }


      });
    }



  })

})

//删除分类
router.get("/deleteCategory/:id", (req, res) => {
  var delSql = 'DELETE FROM category where id=' + req.params.id;
  res.set("Access-Control-Allow-Origin", "*");

  //删
  connection.query(delSql, function (err, result) {
    if (err) {
      console.log('[DELETE ERROR] - ', err.message);
      return res.status(404).json('删除失败');
    } else {
      res.status(200);
      let data = {
        code: 200,
        msg: '删除成功'
      }
      res.json(data);
    }

  });

})

//编辑分类
router.post("/editCategory", (req, res) => {
  sql = 'SELECT * FROM category where id = ' + req.body.id
  console.log(req.body)
  //查询
  connection.query(sql, (err, re) => {
    if (err) {
      console.log('[SELECT ERROR] - ', err.message);
      return res.status(404).json('没有任何内容');
    }
    var modSql = 'UPDATE category SET name = ? WHERE id = ?';
    var modSqlParams = [];

    modSqlParams[0] = req.body.name || re[0].name;
    modSqlParams[1] = req.body.id;
    connection.query(modSql, modSqlParams, function (err, result) {
      res.set("Access-Control-Allow-Origin", "*");
      if (err) {
        return res.status(404).json('修改失败');;;
      }

      res.status(200);
      let data = {
        code: 200,
        msg: "修改成功",
        data: result
      }
      res.json(data);
    });

  });



  // connection.end();

})


module.exports = router;