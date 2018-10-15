const {MongoClient,ObjectID}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017',(err,client)=>{
    if(err){
       return console.log('unable to connect..');
    }
    
    console.log('db connected.');
    
    const db=client.db('TodoApp');
    
    //db.collection('Todos').findOneAndUpdate({_id:new ObjectID("5bc46aec2c794f4cad857964")},{$set:{
    //    completed:true
    //}},{returnOriginal:false}).then((response)=>{
    //    console.log(response);
   // });

    db.collection('Users').findOneAndUpdate(
        {_id:new ObjectID("5bc4703e2c794f4cad857a7c")},
   {
       $set:{name:'qwerty'},
       $inc:{age:1}
   },
   {returnOriginal:false}
    ).then((response)=>{
        console.log(response);
    });

    client.close();

});