const { port, host, secret, user, dialect, password, db } = require('../config');
const crypto=require('crypto')
const mysql = require('mysql');
console.log(`${host}.${port}`);

// const hashValue=crypto.createHash('sha256', process.env.SECRET).update(password).digest('hex')
// url=`${dialect}://${user}:${hashValue}@${host}:${port}/${db}`
// var con = mysql.createConnection({url
// })
// console.log(hashValue)
 

// secret===!(null || '')  
// PASSWORD = hashValue.update(process.env.PASSWORD).digest('hex').then((pass)=>console.log("Hash Obtained is: ", pass))

// : (console.log("error"));
const url=`${dialect}://${user}:${password}@${host}:${port}/${db}`
var connection = mysql.createConnection(url);

connection.connect(function(err) {
    if(err){
      throw(err) 
    }
    else 
      console.log(`Connected to URL: [${url}]`);
     

  });
module.exports=connection
