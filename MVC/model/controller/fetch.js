const db_con = require('../model/db');
const express = require('express');
const router = express.Router();

const config = {
    listPerPage: 1 // Set an appropriate value based on your application's needs
  };


      router.get('/user', (req, res) => {
      
        const sql = 'SELECT * FROM tbl_users'
      
        db_con.query(sql,(err , data) => {
         if(err) return res.json(err);

        return res.json(data)
        
        })
      });

     //teacher get the result
      router.get('/teacher' , (req, res) => {
        const sql = 'Select * FROM tbl_teachers'

        db_con.query(sql, (err, data) => {
          if(err) return res.json(err);

          return res.json(data)
        })
      });
    
      //deleting the value in the form api'

      

      module.exports = router;
      

