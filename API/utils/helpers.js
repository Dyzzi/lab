//convert/parse-out/render data
//json formatting helper function 
function autoSQL(method,table,req){
    let data={
        "keys":[],
        "values":[]
    }
    
    let keys = Object.keys(req.body)

    for (x of keys){
        let val=req.body[x]
        data.keys.push(x);
        data.values.push(`"${val}"`)  
    }

    let query=`${method} ${table}(${data.keys})VALUES(${data.values})`
    console.log(query)
    return(query)
}

module.exports=autoSQL