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

//获取文章列表
router.get('/getArticleList', (req, res) => {

  // sql = 'SELECT * FROM user';
  sql = 'SELECT * FROM article order by o desc';

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

//获取文章详情
router.get('/getArticle/:id', (req, res) => {

  sql = 'SELECT * FROM article where id = ' + req.params.id;

  res.set("Access-Control-Allow-Origin", "*");

  //查询
  connection.query(sql, (err, result) => {
    if (err) {
      console.log('[SELECT ERROR] - ', err.message);
      return res.status(404).json('没有任何内容');
    } else {
      res.status(200);
      let data = {
        code: 200,
        data: result
      }
      res.json(data);
    }


  });

})

//增加文章
router.post('/addArticle', (req, res) => {
  let isSame = 'SELECT * FROM article where title = "' + req.body.title + '"';
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
      var addSql = 'INSERT INTO article(title,cate_id,cate_name,status,o,content,createtime) VALUES(?,?,?,?,?,?,?)';

      var addSqlParams = [req.body.name, req.body.region, req.body.region_name, req.body.resource, (req.body.sort - 0), req.body.desc, new Date()];;

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

//删除文章
router.get("/deleteArticle/:id", (req, res) => {
  var delSql = 'DELETE FROM article where id=' + req.params.id;
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

//编辑文章
router.post("/editArticle", (req, res) => {
  sql = 'SELECT * FROM article where id = ' + req.body.id
  console.log(req.body)
  //查询
  connection.query(sql, (err, re) => {
    if (err) {
      console.log('[SELECT ERROR] - ', err.message);
      return res.status(404).json('没有任何内容');
    }
    var modSql = 'UPDATE article SET title = ?,cate_id = ?,cate_name = ?,status = ?,o = ?,content = ? WHERE id = ?';
    var modSqlParams = [];

    modSqlParams[0] = req.body.name || re[0].name;
    modSqlParams[1] = req.body.region || re[0].region;
    modSqlParams[2] = req.body.region_name || re[0].region_name;
    modSqlParams[3] = req.body.resource || re[0].resource;
    modSqlParams[4] = req.body.sort || re[0].sort;
    modSqlParams[5] = req.body.desc || re[0].desc;
    modSqlParams[6] = req.body.id;
    connection.query(modSql, modSqlParams, function (err, result) {
      res.set("Access-Control-Allow-Origin", "*");
      if (err) {
        return res.status(404).json('修改失败');;;
      } else {
        res.status(200);
        let data = {
          code: 200,
          msg: "修改成功",
          data: result
        }
        res.json(data);
      }


    });

  });



  // connection.end();

})


module.exports = router;