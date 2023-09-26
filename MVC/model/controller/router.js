const db_con = require('../model/db');
 var express = require('express');
 var router = express.Router();
// const { signupValidation, loginValidation } = require('./validation');
// const { validationResult } = require('express-validator');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');       

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
  const sql = "SELECT Users FROM tbl_users WHERE Username = ? AND Password = ? ";

  db_con.query(sql, [req.body.email, req.body.password], (err, data) => {
    if (err) return res.json({ msg: "ERROR" });
    if (data.length > 0) {
      const Users = data[0].Users;
      res.status(200) // Extract username from the first result
      return res.json({ msg: "Login Successful", Users });
    } else {
      res.status(404)
      return res.json({ msg: "No Record" });
    }
  });
});

router.post('/Signup', (req, res) => {
  const sql = " INSERT INTO tbl_users (`Username`, `Password`, `Users`, `mobile_number`, `city`) VALUES (?)";
  const values = [
    req.body.username,
    req.body.password,
    req.body.users,
    req.body.mobile_number,
    req.body.city,
  ]
  db_con.query(sql, [values],(err, data) => {
    if(err) return res.json(err);
    return res.json("created");
  });
});


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
