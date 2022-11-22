const express = require("express");
const router = express.Router();
const sql = require("mssql/msnodesqlv8");
const db = require("../models/dbcon");
const bcrypt = require("bcrypt");
const sessionStorage = require("sessionstorage");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");


const OtpGenerate = Math.floor(1000 + Math.random() * 9000); 

router.get("/gett", async (req, res) => {
  res.send("Server Side");
});

router.post("/login", (req, res) => {
  const { username, pass } = req.body;
  console.log(req.body);

  var request = new sql.Request();
  request
    .query(`SELECT * FROM data WHERE username='${username}'`)
    .then((result) => {
      if (result.recordset.length > 0) {
        bcrypt.compare(pass, result.recordset[0].pass, (err, result) => {
          if (result) {
            let transporter = nodemailer.createTransport({
              service: "Outlook365",
              auth: {
                user: "amrit0789@outlook.com",
                pass: "Amrit@123",
              },
            });

            let mailOptions = {
              from: "amrit0789@outlook.com",
              // send to username
              to: username, 
              subject: "otp for login",
              text: `Your OTP is ${OtpGenerate}`,
            };

            transporter.sendMail(mailOptions, function (err, data) {
              if (err) {
                console.log(err);
              } else {
                console.log('Email sent' );
              }
            });
            res.send("Opt sent to your email");
          } else {

            res.json({ userError: "User doesnot exists" });
          }
        });
      }
    });
});

router.post("/register", async (req, res) => {
  const { username, pass } = req.body;

  var request = new sql.Request();
  request
    .query(`SELECT * FROM data WHERE  username='${username}'`)
    .then((result) => {
      if (result.recordset.length == 0) {
        const saltRounds = 10;
        bcrypt.hash(pass, saltRounds, function (err, hash) {
          request.query(
            `INSERT INTO data(username,pass) VALUES('${username}','${hash}')`,
            function (err, recordset) {
              if (err) throw err;
              res.send("User Registered");
              console.log("User Registered");
            }
          );
        });
      } else {
        console.log("User already exists!!!");
        res.json({ errorUser: "User already exists" });
      }
    });
});

router.post("/verify", (req, res) => {
  const { otp } = req.body;
  console.log(otp);
  console.log(OtpGenerate);
  if (otp == OtpGenerate) {
    const accessToken = jwt.sign({ otp }, "secretkey");
    res.json(accessToken);
    console.log(accessToken);

  } else {
    res.json({ otpError: "Wrong OTP" });
  }
});

module.exports = router;
