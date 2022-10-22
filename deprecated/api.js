const express =require('express');
const { MongoDBNamespace } = require('mongodb');
const app=express();
const dbconnect=require('./mongodb');

app.use(express.json());

app.get('/',async(req,resp)=>{
      let data =await dbconnect();
      data =await data.find().toArray();
      console.log(data)
      resp.send(data)
});

app.post('/',async(req,resp)=>{
let data =await dbconnect();
let result =await data.insertOne(req.body)

resp.send(result);
})


app.put("/:name",async(req,resp)=>{
      let data=await dbconnect();
      let result = data.updateOne(
            {name:req.params.name},
            {$set:req.body}
      )
      
})

app.delete("/:id",async(req,resp)=>{
      console.log(req.params.id)
      const data=await dbconnect();
      const result =await data.deleteOne({_id:new MongoDBNamespace.object_Id(req.params.id)})
      resp.send(result)
})

app.listen(5500);