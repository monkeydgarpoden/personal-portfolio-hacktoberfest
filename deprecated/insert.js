const dbconnect=require('./mongodb');

const insert =async ()=>{
      const db =await dbconnect();

      const result =await db.insert(
            [
            {name:"vivek", brand:"micro"},
            {name:"vivek", brand:"micro"},
            {name:"vivek", brand:"micro"}
            ]
      );

      if(result.acknowledged)
      {
            console.log("data inserted")
      }
}
insert();