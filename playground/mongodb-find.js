const{MongoClient,ObjectId}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/Todos',(err,client)=>{
    if(err){
        return console.log('error in db connections');
    }
    console.log("db connected");
const db=client.db('TodoApp')
db.collection('Todos').find({_id:new ObjectId('5bc440ad8507cf3d1c9d316c')}).toArray().then(
    (docs)=>{

console.log(JSON.stringify(docs,undefined,2));
    },(err)=>{
        return console.log('error in fetching...')
    }
);
client.close();
});

