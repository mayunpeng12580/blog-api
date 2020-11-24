var  multiparty = require( 'multiparty' );  
var  images = require( "images" );
const connection = require('../db/index');
const express = require("express");
const router = express.Router();
const app = express();
const bodyParser = require("body-parser");

let multer = require("multer");
let uploadImage = multer({dest:"./public/upload"});
let fs = require("fs");

router.post( '/uploadImage' , uploadImage.single('file'), function (req, res) {
    
    let oldPath = req.file.destination + "/" + req.file.filename;
    let newPath = req.file.destination + "/" + req.file.filename + req.file.originalname;


    fs.rename(oldPath, newPath, () => {
       

        // let imgUrl = __dirname.substring(0, __dirname.length-6) + newPath.substring(2);
        let imgUrl = "http://127.0.0.1:9000/" + newPath.substring(2)
        

        let data = {
            code: 200,
            data: imgUrl
        }
        res.json(data);
    })
});




module.exports = router;