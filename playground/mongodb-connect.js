const MongoClient=require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{

    if(err){
        return console.log("connection got error");
    }
    console.log("mongodb connected.....");
const db=client.db('TodoApp')
//db.collection('Todos').insertOne({text:'wakeup early',completed:false},(err,result)=>{

  //  if(err){
    //    return console.log('unable to insert todo',err);
    //}
    //console.log(JSON.stringify(result.ops,undefined,2));
//});
db.collection('Users').insertOne({name:'john',age:29,location:'istambul'},(err,result)=>{
    if(err){
        return console.log('user not inserted',err);
    }
    console.log(JSON.stringify(result.ops,undefined,2));
});
    
    client.close();
});