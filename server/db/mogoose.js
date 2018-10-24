const mongoose=require('mongoose');

mongoose.Promise=global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
    if(err){
        return console.log(err);
    }
    console.log('connected...')
});

module.exports={mongoose};