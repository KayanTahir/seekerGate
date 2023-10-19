const db_con = require('../model/db');
const express = require('express');
const router = express.Router();

//delete api for user table

router.delete('/api/users/:id', (req, res) => {
    const id = req.params.id;
  
    const sql = 'DELETE FROM tbl_users WHERE id = ?';
  
    db_con.query(sql, [id], (err, result) => {
      if (err) {
        console.error('Error executing DELETE query:', err);
        res.status(500).json({ error: 'Internal Server Error' });
        return;
      }
  
      console.log('Deleted user with id', id);
      res.status(200).json({ message: 'User deleted successfully' });
    });
  });
  
//delete api for the teacher table
  router.delete('/api/teacher/:teacher_id', (req, res) => {
    const teacher_id = req.params.teacher_id;
  
    const sql = 'DELETE FROM tbl_teachers WHERE teacher_id = ?';
  
    db_con.query(sql, [teacher_id], (err, result) => {
      if (err) {
        console.error('Error executing DELETE query:', err);
        res.status(500).json({ error: 'Internal Server Error' });
        return;
      }
  
      console.log('Deleted user with id', teacher_id);
      res.status(200).json({ message: 'User deleted successfully' });
    });
  });


  module.exports = router;