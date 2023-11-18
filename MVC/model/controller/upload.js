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
    req.file.size,
    req.body.video_teacher_id,  // Access the fields from req.body
    req.body.video_despt,  // Access the fields from req.body
    req.body.video_course_id

   ]
 db_con.query(videoupload, [values], (err , data) => {
    if (err) {
        console.error('Database error:', err);
        return res.status(500).json({ msg: 'Database error' });
    }
        if(data) {
        return res.json({msg : "File upload"})
        }
         return res.json({msg : "ERROR"})
     
      
 })

});

module.exports = router;