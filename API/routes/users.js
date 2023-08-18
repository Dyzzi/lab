const express = require("express")
const connection = require("../../DB/db")
const mysql=require ("mysql")

const router = express.Router()


//global middleware goes at the top 

//make this below a constructor

//validate[Number,Alphabetical,Special,National]-> https://www.ibm.com/docs/en/zos/2.4.0?topic=commands-alphanumeric-national-special-characters


//auth goes here
const table='MOCK_DATA'
router.get('/',(req, res)=>{
    connection.query(`SELECT * FROM ${table}`, function (results, fields) {
        try{        
            if (results=[]){
                res.send("no such table exists")  
            } 
            else {
                res.send(results)
            }
        }
        catch(error) {
            console.error(error)
        }
        finally{
            connection.end()
        }
      });  
})



router.delete('/nuke',(req,res)=>{
    connection.query(`DROP TABLE ${table}`, function(error){
        if (error) throw error;
        connection.end()
        res.send("nuked");
    });
})
router.post('/new',(req,res)=>{
    // connection.query(`insert into ${table} values(${req.}) `, function (error, results, fields) {
    //     if (error) throw error;
    //    console.log(results)
    //    connection.end()
    //    res.send(results)
    //   });
    console.log(req)

    res.send("post sent")
})

// dynamic routes GO LAST
// '/:' signifies a dynamic parameter, here being 'id'
router.route('/:id')
    .get((req, res,)=>{
        
    res.status(200).json({
        "id":`${req.params.id}`
        })
    })
    .delete((req,res)=>{
        connection.query(`DELETE FROM ${table} WHERE id = `)
    }
    )
    .post((req, res) => {
        connection.query('SELECT * FROM MOCK_DATA', function (error, results, fields) {
        if (error) throw error;
        console.log(results)

       connection.end()
       res.send(results)
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
    case 'POST':
        next(console.log("post"));
        break;

    case 'GET':  
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