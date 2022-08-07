var multer  = require('multer');
var imageModel= require('../models/image-model');

module.exports={
    index:function(req,res){
    imageModel.index(function(data){
     res.render('index',{imagePath:data})
    })
        
     }
     
}