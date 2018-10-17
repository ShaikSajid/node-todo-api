const {MongoClient,ObjectId}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017',(err,client)=>{
if(err){
    return console.log('unable to connect');
}

console.log('connected...');

const db=client.db('TodoApp');
//db.collection('Users').deleteMany({name : "john"}).then((response)=>{
//console.log(response);
//});
//db.collection('Users').deleteOne({name : "john"}).then((response)=>{
//   console.log(response);
// });
//db.collection('Users').findOneAndDelete({ name : "hill"}).then((response)=>{
//      console.log(response);
//     });
//db.collection('Todos').findOneAndUpdate().then((response)=>{console.log(response)});
db.collection('Users').findOneAndDelete({ _id : new ObjectId("5bc4703e2c794f4cad857a7c")}).then((response)=>{
            console.log(response);
            });
client.close();
});