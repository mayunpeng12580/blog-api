var  multiparty = require( 'multiparty' );  
var  images = require( "images" );
const connection = require('../db/index');
const express = require("express");
const router = express.Router();
const app = express();
const bodyParser = require("body-parser");

router.post( '/uploadImage' ,  function (req, res) {
    
    var  form =  new  multiparty.Form();
    form.parse(req,  function (err, fields, files) {
        
        //  
        images(files.zp[0].path)  //Load image from file
            //加载图像文件
            .size(1920)  //Geometric scaling the image to 400 pixels width
            //等比缩放图像到400像素宽

            //在(10,10)处绘制Logo
            .save( "../public/images/"  +  "filebigName.png" , {  //Save the image to a file,whih quality 50
                quality: 80  //保存图片到文件,图片质量为50
            });

    });

});

module.exports = router;