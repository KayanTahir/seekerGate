const db_con = require('../model/db');
const express = require('express');
const { 
courses, teacher, user, updteacher, update_edit, video_detail, notesgeting, coursedetail, Videopara, sltteachcourse, updusers, 


} = require('./queries/queries');
const router = express.Router();

const config = {
    listPerPage: 1 // Set an appropriate value based on your application's needs
  };



/* ===============================================================

          Writing Get Api for the Showing the Data 

+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

      router.get('/user', (req, res) => {
        db_con.query(user,(err , data) => {
         if(err) return res.json(err);

        return res.json({
          data : data,
          status :'1'
        })
        
        })
      });

     //teacher get the result
      router.get('/teacher' , (req, res) => {
        
       
        db_con.query(teacher,(err, data) => {
          if(err) return res.json(err);

          return res.json({data:data})
        })
      });
    
//course
      router.get("/course" , (req, res) => {
       
        db_con.query(courses , (err, data) => {
          if(err) return res.json({msg:"ERROR"})
          return res.json({
        data : data,
          })
        })
      })

    //get method api writing for updating the records 

    router.get('/edit/:teacher_id' , (req, res) => {
      const teacher_id = req.params.teacher_id;

      db_con.query(update_edit, [teacher_id],(err, data) => {
        if(err) {
          return res.json({err:"ERROR"})
        };
        return res.json({
          data : data?data[0]:[]
        });
      })
    })

    //get teacher and course
    
    router.get('/stteachcour/:courses_id' , (req, res) => {
      const courses_id = req.params.courses_id;

      db_con.query(sltteachcourse, [courses_id], (err, data) => { 
       if(err) {
        return res.json({err:'ERROR'})
       };
       return res.json({
        data: data
       });
      })
    })

    
    
    //get course detail
    router.get('/coursedetail' , (req, res) => {
      db_con.query(coursedetail, (err  , data) => { 
        if (err ) { 
          return res.json({err: 'error'})
        };
        return res.json({
          data : data
        })
      })
    })


    //get api for video_tutorial fetching

    router.get('/videodetail' , (req, res) =>  {
      

      db_con.query(video_detail, (err, data) => {
        if(err) {
          return res.json({err: 'error'})
        };
        return res.json({
          data : data
        });
      })
    })
    
    //para
    router.get('/videodetails/:video_teacher_id/:video_course_id' , (req ,res) => {
    const video_teacher_id = req.params.video_teacher_id
    const video_course_id = req.params.video_course_id
 
    db_con.query(Videopara, [video_teacher_id, video_course_id], (err, data) => {
      if(err) {
        return res.json({err: 'error'})
      };
      return res.json({
        data: data
      })
    })  
    })
   //get api for notes fetching

    router.get('/getnotes/:user_id', (req, res) => {
      const  user_id = req.params.user_id;
     
      db_con.query(notesgeting, [user_id], (err , data) => {
        if(err){
          return res.json({msg:'ERROR'})
        } 
          return res.json({
            data : data
          })
        
      })
    })


    

    //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
      //update api in the teacher tables
     
    //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ 
     
      router.put('/tupdate/:teacher_id', (req, res) => {
       
        if(!req.body.teacher_Name){
         return res.json({msg:'teacher is Mantory'})
        }
        if(!req.body.teacher_Exp){
          return res.json({msg:'teacher Exp is required'})

        }
        if(!req.body.teacher_email){
          return res.json({msg:'teacher email is required'})
        }

        if(!req.body.teacher_catg){
          return res.json({msg : 'teacher catg is required'})
        }

  
        const values = [
          req.body.teacher_Name,
          req.body.teacher_Exp,
          req.body.teacher_email,
          req.body.teacher_catg,
          req.params.teacher_id  // Assuming teacher_id is in the URL params
        ];
      
        db_con.query(updteacher, values, (err, data) => {
          if (err) return res.json(err);
          return res.json({ msg: 'Data is updated' });
        });
      });

      //update api in the user tables
      router.put('/userupdate/:id' , (req, res) => {
      

      const values = [ 
      req.body.Username,
      req.body.Password,
      req.body.Users,
      req.body.user_status,
      req.body.mobile_number,
      req.body.city,
      req.params.id // Ascessing the id in the tbl_user table for updating the values 
      ];

      db_con.query(updusers, values, (err, data) => {
      if(err) return res.json({msg:"Error"})
      return res.json({msg:"Data is updated"})  
      })

      })
      
      



      module.exports = router;
      
      //SQL Querie 
      // SELECT ct.*, t.*,c.* FROM `tbl_courses_teachers` ct  inner join tbl_teachers t on t.teacher_id = ct.teacher_id inner join tbl_courses c on c.course_id = ct.course_id where ct.course_id = 1;