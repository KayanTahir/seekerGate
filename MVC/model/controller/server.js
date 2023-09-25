const express = require("express");
const db_con = require('../model/db');
const cors = require("cors");
const indexRouter = require ('../controller/router')
const indeRouter = require('../controller/fetch')
const deleteRouter =require('../controller/delete')

const app = express();
//http://127.0.0.1:8000/api/login
// var corsOptions = {
//   origin: "http://localhost:8000"
// };

app.use(cors());

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded - parses incoming requests with URL-encoded payloads 
app.use(express.urlencoded({ extended: true }));

//Routering the api
app.use('/api', indexRouter);
app.use('/api', indeRouter );
app.use('/api' , deleteRouter);

 


// Handling Errors
app.use((err, req, res, next) => {
    // console.log(err);
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Internal Server Error";
    res.status(err.statusCode).json({
      message: err.message,
    });
});
// set port, listen for requests
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});