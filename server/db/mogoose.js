const mongoose=require('mongoose');

mongoose.Promise=global.Promise;
mongoose.connect('mongodb://Todos:qwerty@123@ds239703.mlab.com:39703/todos'||'mongodb://localhost:27017/TodoApp',(err,client)=>{
    if(err){
        return console.log(err);
    }
    console.log('connected...')
});

module.exports={mongoose};