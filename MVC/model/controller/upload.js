const db_con = require('../model/db');
const multer = require('multer');
const express = require('express');
const { CopyAllSharp } = require('@mui/icons-material');
const { videoupload } = require('./queries/queries');
var router = express.Router();

const upload = multer({
storage: multer.diskStorage({
    destination: function(req, file, cb){
     cb(null, "Videos")
    },
    filename:function(req,file,cb) {
        cb(null, file.fieldname + "-" + Date.now() + ".mp4")
    }
})

});

router.post('/upload', upload.single("tutorials"), (req ,res ,err) => {
   //res.send("file upload") 
   //console.log(req.body)
   console.log(req.file.filename)
   console.log(req.file.path)
   console.log(req.file.fieldname)
   console.log(req.file.originalname)
   console.log(req.file.size)
   

   const values = [
    req.file.fieldname,
    req.file.originalname,
    req.file.path,
    req.file.filename,
    req.file.size


   ]
 db_con.query(videoupload, [values], (err , data) => {
        if(data) {
        return res.json({msg : "File upload"})
        }
         return res.json({msg : "ERROR"})
     
      
 })

});

module.exports = router;