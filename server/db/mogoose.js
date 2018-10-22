const mongoose=require('mongoose');

mongoose.Promise=global.Promise;
mongoose.connect('mongodb://<dbuser>:<dbpassword>@ds137913.mlab.com:37913/todoappdb'||'mongodb://localhost:27017/TodoApp',(err,client)=>{
    if(err){
        return console.log(err);
    }
    console.log('connected...')
});

module.exports={mongoose};