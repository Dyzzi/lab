
const express = require("express")
const connection = require("../../DB/db")
const mysql=require ("mysql")
const autoSQL= require("../utils/helpers.js")
const { ipLogger } = require("../utils/middleware.js")
const router = express.Router()

//global middleware goes at the top 

//AUTH GOES HERE

const table="users"
//DEFAULT ROUTE
router.route("/")
    .get((req, res)=>{
        connection.query(`SELECT * FROM ${table}`, function (err, results, next, fields) {
            if (err) throw err;
        res.send(results)
        });
        ipLogger()  
    })

    .post((req, res,) => {
        let data=autoSQL("INSERT INTO", table, req)
        connection.query(data, function(error, data){
            if (error) throw error;

        res.send(data)})
    })
        

    

// dynamic routes GO LAST
// "/:" signifies a dynamic parameter, here being "id"
router.route("/:id")
    .get((req, res,next)=>{
        connection.query(`SELECT id, display_name, handle, bio, gender FROM ${table} WHERE id = ${req.params.id}`, function (error, results, fields) {
            if (error) throw error;
        console.log(results)
       
        res.send(results)
        });  
        
    })

    .delete((req,res)=>{
        connection.query(`DELETE FROM ${table} WHERE id = ${req.params.id}`,
        function (err, res){
            if (err) throw err;
        })
    })

router.param("id", (req,res,next,err)=>{
    const isInteger= /^\d+$/.test(req.params.id);
    isInteger ? 
        next(console.log(`${req.params.id} is a valid ID`))
        :
        next(`invalid ID`, console.error(new Error(`"${err}" IS NOT A VALID INTEGER ID`)))
    })

router.param("id",(req,res,next,err)=>{
    switch (req.method){
    case "POST":
        next(console.log("post"));
        break;

    case "GET":
        next(console.log("get"));
        break;
        }
    // table?
    // next()
    // :
    // next(`Table does not exist`, console.error(new Error(`"${err}" Table does not exist!`)))
    })
 //middleware learn about middleware

module.exports = router