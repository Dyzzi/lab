const express = require("express")
const connection = require("../../DB/db")
const mysql=require ("mysql")

const router = express.Router()


//global middleware goes at the top 

//make this below a constructor

//validate[Number,Alphabetical,Special,National]-> https://www.ibm.com/docs/en/zos/2.4.0?topic=commands-alphanumeric-national-special-characters


//auth goes here
const allTables=`
 select table_schema as database_name,
 table_name
 from information_schema.tables
 where table_type = 'BASE TABLE'
    and table_schema = database() 
 order by database_name, table_name;
`
router.get('/',(req, res)=>{
    connection.query(allTables, function (error, results, fields) {
        if (error) throw error;
    console.log(results)
       connection.end()
       res.send(results)
        })
    })



router.delete('/nuke',(req,res)=>{
    let TABLE_NAME=req.params.TABLE_NAME;
    connection.query(`DROP TABLE ${TABLE_NAME}`, function(error){
        if (error) throw error;
        connection.end()
        res.send("nuked");
    });
})

router.post('/touch',(req,res)=>{

    console.log(req)

    res.send("post sent")
})

// dynamic routes GO LAST

// '/:' signifies a dynamic parameter, here being 'id'

//THIS ACTUALLY WORKS 
router.get('/:TABLE_NAME', (req, res)=>{

        connection.query(`SELECT * FROM ${req.params.TABLE_NAME}`, function (error,results, fields) {
            if (error) throw error;
            console.log(results)    
                res.status(200).json(
                    results
                )
                ;
                connection.end()
        })
})

router.delete('/nuke/:TABLE_NAME',(req,res)=>{
    connection.query(`DROP TABLE ${req.params.TABLE_NAME}`, function(error){
        if (error) throw error;
        connection.end()
        res.send("nuked");
    });
})

 //middleware learn about middleware




       

module.exports = router