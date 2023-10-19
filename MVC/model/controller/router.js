const db_con = require('../model/db');
 var express = require('express');
 var router = express.Router();
// const { signupValidation, loginValidation } = require('./validation');
// const { validationResult } = require('express-validator');
// const bcrypt = require('bcryptjs');
 const jwt = require('jsonwebtoken');       
const { courseadd, Noteupload, userlogin } = require('./queries/queries');

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
    }


  
  const sql = " INSERT INTO tbl_users (`Username`, `Password`, `Users`, `mobile_number`, `city`) VALUES (?)";
  const values = [
    req.body.username,
    req.body.password,
    req.body.users,
    req.body.mobile_number,
    req.body.city,
  ]
  db_con.query(sql, [values],(err, data) => {
    //if(err) return res.json(err);
    if(!data.length){
      return res.json({msg : "User build"})
    }else{
    return res.json({msg: "ERROR"})
    }
   
  });
});

//adding the course in ourcourse
router.post('/addcourse', (req, res) => {

  const coursevalue = [
    req.body.course_catg,
    req.body.course_name,
    req.body.total_video,
    req.body.course_rel_date,
    req.body.course_dur_time
 ]

 
const body = coursevalue;
  if(!body.course_catg){
    res.status(400);
    return res.json({msg: 'Course Catg  is mandatory'});
    }else if (!body.course_name){
      res.status(400)
      return res.json({msg:"Password is mandatory"});
    }else if (!body.total_video){
      res.status(400)
      return res.json({msg:"Users is mandatory"})
    }else if(!body.course_rel_date){
      res.status(400)
      return res.json({msg: "Add mobile number"})
    }else if(!body.course_dur_time){
      res.status(400)
      return res.json({msg:"Add your City"})
    }

   db_con.query(courseadd, [coursevalue] , (err , data) => {
    if(!data.length){
      return res.json({msg: "Data Inserted"})
    }else{
      return res.json({msg: "ERROR"})
    }
  });
  
});
    


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
