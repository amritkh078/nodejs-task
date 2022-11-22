const express = require("express");
const router = express.Router();
const sql = require("mssql/msnodesqlv8");
const db = require("../models/dbcon");
const validate = require("../controller/validate");


router.get("/get",validate, async (req, res) => { 

  var request = new sql.Request();
  var page = req.query.page;
  var limit = req.query.limit;
  var search = req.query.search;

  var start = (page - 1 ) * limit;


  console.log(search);

  if (search == "") {
    request.query(`select * from Person order by Id offset ${start} 
    rows fetch next ${limit} rows only`,
     function (err, recordset) {
      if (err) {
        console.log(err);
      }
      else {
        res.send(recordset.recordset);
      }
    });
  }
  else {
    request.query(`select * from Person where name like '%${search}%' order by Id offset 
    ${start} rows fetch next ${limit} rows only  `, 
    function (err, recordset) {
      if (err) {
        console.log(err);
      }
      else {
        res.send(recordset.recordset);
      }
    });
  }
});

router.post("/post", async (req, res) => {
  const { email, name, address, phone,age} = req.body;
  var request = new sql.Request();  
  request.query(
    `INSERT INTO Person( Email,Name, Address, Phone, Age) VALUES('${email}','${name}','${address}','${phone}', '${age}')`,
    function (err, recordset) {
      if (err) throw err;
      console.log("Data Entered");
    }
  );
});

router.put("/put", async (req, res) => {
  const { name, email, address,age, phone, Id } = req.body;
  var request = new sql.Request();
  request.query(
    `UPDATE Person SET name= '${name}', email='${email}', address='${address}', phone='${phone}', age='${age}' WHERE id=${Id}`,
    function (err, recordset) {
      if (err) throw err;
      console.log("Data Updated");
    }
  );
});

module.exports = router;
