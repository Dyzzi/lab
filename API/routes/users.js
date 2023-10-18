
const express = require("express")
const connection = require("../../DB/db")
const mysql=require ("mysql")

const router = express.Router()


//global middleware goes at the top 



//AUTH GOES HERE

const table="MOCK_DATA"
//GET ALL
router.get("/",(req, res)=>{
    connection.query(`SELECT * FROM ${table}`, function (error, results, fields) {
        if (error) throw error;
    console.log(results)
       connection.end()
       res.send(results)
        });  
})
.post("/",(req, res) => {
//     connection.query(
//     `INSERT INTO ${table}(
//     "ip_address",
//     "created",
//     "profile_accent",
//     "first_name",
//     "last_name",
//     "gender",
//     "email",
//     "job_title",
//     "banned")
// VALUES(
//     "${req.body.ip_address}",
//     "${req.body.created}",
//     "${req.body.profile_accent}",
//     "${req.body.first_name}",
//     "${req.body.last_name}",
//     "${req.body.gender}",
//     "${req.body.job_title}",
//     " ${req.body.banned}"

// )`);
// connection.end();

console.log(    `INSERT INTO ${table}(
    "ip_address",
    "created",
    "profile_accent",
    "first_name",
    "last_name",
    "gender",
    "email",
    "job_title",
    "banned")
VALUES(
    ${req.body.ip_address},
    ${req.body.created},
    ${req.body.profile_accent},
    ${req.body.first_name},
    ${req.body.last_name},
    ${req.body.gender},
    ${req.body.job_title},
    ${req.body.banned})`
)
res.send("done")
})




    
// dynamic routes GO LAST
// "/:" signifies a dynamic parameter, here being "id"
router.route("/:id")
    .get((req, res,)=>{
        
    res.status(200).json({
        "id":`${req.params.id}`
        })
    })
    .delete((req,res)=>{
        connection.query(`DELETE FROM ${table} WHERE id = `)
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