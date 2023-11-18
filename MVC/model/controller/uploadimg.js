const db_con = require('../model/db');
const multer = require('multer');
const express = require('express');
const { CopyAllSharp } = require('@mui/icons-material');
const { courseadd } = require('./queries/queries');
var router = express.Router();

const upload = multer({
storage: multer.diskStorage({
    destination: function(req, file, cb){
     cb(null, "img")
    },
    filename:function(req,file,cb) {
        cb(null, file.fieldname + "-" + Date.now() + ".png")
    }
})

});

router.post('/imgupload', upload.single("upload"), (req ,res ,err) => {
   //res.send("file upload") 
   //console.log(req.body)
   console.log(req.file.filename)

   const values = [
        req.file.filename,
        req.body.course_name,
        req.body.total_video,
        req.body.course_rel_date,
        req.body.course_dur_time,
        req.body.course_teacher_id,
        req.body.status

   ]
 db_con.query(courseadd, [values], (err , data) => {
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