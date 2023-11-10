let request={
    "body":{
        "ip_address": "48.69.96.85",
        "created": "2023-03-30 12:15:53",
        "profile_accent": "#c4baac",
        "first_name": "Bartholomeo",
        "last_name": "Appleseed",
        "gender": "Male",
        "email": "baverall0@salon.com",
        "job_title": "Director",
        "banned": false
    }
}

function autoParse(req){
    
    let data=[]
    let keys = Object.keys(req.body)

    for (x of keys){
        let val=req.body[x]
        data.push({[x]:val})  
    }
    console.log(data)
    return(data)
}

// autoParse(request)

function autoSQL(method,table,req){
    console.log(method)
    let data={
        "keys":[],
        "values":[]
    }
    
    let keys = Object.keys(req.body)

    for (x of keys){
        let val=req.body[x]
      
        data.keys.push(x);
        data.values.push(val)  
    }

    let query=`
    ${method} ${table}(
        ${data.keys}
    )
    VALUES(
        ${data.values}
    )`


    return(query)
  
    
   
}

autoSQL("insert into","MOCK_DATA",request)