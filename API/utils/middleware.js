function autoParse(req){
    
    let data=[]
    let keys = Object.keys(req)

    for (x of keys){
        let val=req[x]
        data.push({[x]:val})  
    }
    console.log(data)
    return(data)
}
