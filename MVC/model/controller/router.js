const db_con = require('../model/db');
 var express = require('express');
 var router = express.Router();
// const { signupValidation, loginValidation } = require('./validation');
// const { validationResult } = require('express-validator');
// const bcrypt = require('bcryptjs');
 const jwt = require('jsonwebtoken');       
const { courseadd, Noteupload, userlogin, usersignup, teachersignup, teacherlogin, TeachCourse } = require('./queries/queries');

// router.post('/login',( req, res) => {
// const sql = "Select * FROM tbl_users WHERE Username = ? AND Password = ? ";

// db_con.query(sql, [req.body.email, req.body.password] , (err, data) => {
//   if(err) return  res.json("ERROR ");
//   if(data.length > 0){
//     return res.json("Login Successfull")
//   }else{
//     return res.json("No Record")
//   }
// })
// })

//User Login
router.post('/login', (req, res) => {
  
  db_con.query(userlogin, [req.body.email, req.body.password], (err, data) => {
    if (err) return res.json({  msg: "ERROR"});
    if (data.length > 0) {
      const Users = data[0].Users;
      const id = data[0].id;
     
       res.status(200) // Extract username from the first result
       const token = jwt.sign({ id: data[0].id }, 'the-super-strong-secret', { expiresIn: '1h' });
      
       return res.json({ msg: "Login Successful", id, Users, token  });
      
    } else {
      res.status(404)
      return res.json({  msg: "No Record" });
    }
  });
});

//teacher login 

router.post('/teacherlogin', (req, res) => {

db_con.query(teacherlogin,[req.body.teacher_email, req.body.teacher_password], (err, data) => {
  if (err) return res.json({  msg: "ERROR"});
  if(data.length > 0) {
    const teacher_Name = data[0].teacher_Name;
    const teacher_id = data[0].teacher_id;
    const status = data[0].status;

     //Check if it work otherwise change it with status 
    const token = jwt.sign({ id: data[0].id }, 'the-super-strong-secret', { expiresIn: '1h' });
    if(status === 1){
    res.status(200)
    return res.json({msg : "Login Successfull" , teacher_id, teacher_Name, token });
     }else{
      res.status(400)
      return res.json({msg : "Please Wait For Approval"})
    }
  }else{
    res.status(404)
    return res.json({ msg: "No Record"})
  }
})

})



//User Login

router.post('/Signup', (req, res) => {


  const body = req.body;
  if(!body.username){
    res.status(400);
    return res.json({msg: 'Username is mandatory'});
    }else if (!body.password){
      res.status(400)
      return res.json({msg:"Password is mandatory"});
    }else if (!body.users){
      res.status(400)
      return res.json({msg:"Users is mandatory"})
    }else if(!body.mobile_number){
      res.status(400)
      return res.json({msg: "Add mobile number"})
    }else if(!body.city){
      res.status(400)
      return res.json({msg:"Add your City"})
    }else if(!body.gender){
      res.status(400)
      return res.json({msg:"Please Select Gender"})
    }else if(!body.user_relig){
      res.status(400)
      return res.json({msg:"Please Select Religion"})
    }else if(!body.user_ethnicity){
      res.status(400)
      return res,json({msg:"Please Enter Ethnicity"})
    }else if(!body.user_date){
      res.status(400)
      return res.json({msg:"Please Add the Date"})
    }else if(!body.user_status){
      body.user_status = 1;
    }


  
  
  const values = [
    req.body.username,
    req.body.password,
    req.body.users,
    req.body.user_status,
    req.body.mobile_number,
    req.body.city,
    req.body.gender,
    req.body.user_relig,
    req.body.user_ethnicity,
    req.body.user_date

  ]
  db_con.query(usersignup, [values],(err, data) => {
    //if(err) return res.json(err);
    if(!data.length){
      return res.json({msg : "User build"})
    }else{
    return res.json({msg: "ERROR"})
    }
   
  });
});


// Teacher SignUp

router.post('/teachersignup', (req, res) => {

const body = req.body;

if(!body.teacher_Name){
  res.status(400)
  return res.json({msg: "Add Teacher Name"})
}else if(!body.teacher_Exp){
  res.status(400)
 return res.json({msg : 'Add the teacher Exp'})
}else if(!body.teacher_email){
res.status(400)
return res.json({msg : "Add the Email"})
}else if(!body.teacher_password){
res.status(400)
return res.json({msg : "Enter the Password"})
}else if(!body.teacher_catg){
res.status(400)
return res.json({msg: 'Add the teacher catg'})
}else if(body.status === null){
body.status = 0;
}


const values = [
  req.body.teacher_Name,
  req.body.teacher_Exp,
  req.body.teacher_email,
  req.body.teacher_password,
  req.body.teacher_catg,
  req.body.teacher_join_date,
  req.body.status
]

db_con.query(teachersignup, [values] , (err, data) => {
  if(!data.length){
    return res.json({msg: "Data Inserted"})
  }else{
    return res.json({msg: "ERROR"})
  }
})

})


//adding the course in ourcourse
// router.post('/addcourse', (req, res) => {

//   const body = req.body;

//   if(!body.course_catg){
//     res.status(400);
//     return res.json({msg: 'Course Catagory  is mandatory'});
//     }else if (!body.course_name){
//       res.status(400)
//       return res.json({msg:"Course Name is manadatory"});
//     }else if (!body.total_video){
//       res.status(400)
//       return res.json({msg:"total video is mandatory"})
//     }else if(!body.course_teacher_id) {
//       res.status(400)
//       return res.json({msg: "Enter the course ID"})
//     }

//     if(req.body.status === null){
//      req.body.status = 0;
//     }

//   const coursevalue = [
//     req.body.course_catg,
//     req.body.course_name,
//     req.body.total_video,
//     req.body.course_rel_date,
//     req.body.course_dur_time,
//     req.body.course_teacher_id,
//     req.body.status
//  ]

//    db_con.query(courseadd, [coursevalue] , (err , data) => {
//     if(!data.length){
//       return res.json({msg: "Data Inserted"})
//     }else{
//       return res.json({msg: "ERROR"})
//     }
//   });
  
// });
  //Course and Teacher inserting Api (id of course and Id of teacher)
  
  router.post('/teachcourse' , (req, res) => {

    const body = req.body;
    
    if(!body.course_id) {
      res.status(400)
      return res.json({msg:'Need course'})
    }else if(!body.teacher_id){
      res.status(400)
      return res.json({msg : 'Need the teacher'})
    }

    const values = [
      req.body.course_id,
      req.body.teacher_id
    ]

    db_con.query(TeachCourse,[values], (err, data) => {
      if(!data.length){
       return res.json({msg : 'Data inserted'})
      }else{
        return res.json({err : 'ERROR'})
      }
    })
  })


router.post('/note',(req, res) => {

const notesValues = [
  req.body.notes_tle,
  req.body.note_paragh,
  req.body.user_id
]

// const body = notesValues;

if(!req.body.notes_tle){
  res.status(400)
  return res.json({msg:"Title is Needed"})
}else if(!req.body.note_paragh){
  res.status(400)
  return res.json({msg:"Paragarph is Needed"})
}


db_con.query(Noteupload, [notesValues], (err, data) => {
  if(!data.length){
    return res.json({msg: "Data inserted"})
  }else{
    return res.json({msg:"Error"})
  }
})

})


// // db_con.connect((err) => {
// //     if (err) throw (err) => {
// //       console.log("Database Connection Failed !!!", err);
// //       return;
// //     }
  
// //     console.log("We are connected to Mark database");
  
// //     // This query will be used to select columns
// //     let query = 'SELECT * FROM tbl_users';
  
// //     db_con.query(query, (err, rows) => {
// //         if(err) throw err;
  
// //         console.log(rows);
// //     });
// // });

// // ... (other imports and code)

// router.post('/login', loginValidation, (req, res, next) => {
//   db_con.query(
//     `SELECT * FROM tbl_users WHERE Username = ${db_con.escape(req.body.username)} AND Password = ${db_con.escape(req.body.password)} `,
//     ([req.body.email],(err, result)) => {
     
//       if (err) {
//         return res.status(400).send({
//           msg: err
//         });
//       }
//       if (!result.length) {
//         return res.status(401).send({
//           msg: 'Email or password is incorrect!'
//         });
//       }
//       //check password
//       bcrypt.compare(
//         req.body.password,
//         result[0]['password'],
//         ( bResult) => { // Define bErr as a parameter here
//           // wrong password
//           // if (bErr) {
//           //   return res.status(401).send({
//           //     msg: 'Email or password is incorrect!'
//           //   });
//           // }
          
//            if (bResult) {
//             const token = jwt.sign({ id: result[0].id }, 'the-super-strong-secret', { expiresIn: '1h' });
//             return res.status(200).send({
//               msg: 'Logged in!',
//               token,
//               user: result[0]
//             });
//           }
//           return res.status(401).send({
//             msg: 'Username or password is incorrect!'
//           });
//         }
//       );
//     }
//   );
// });

 module.exports = router;
