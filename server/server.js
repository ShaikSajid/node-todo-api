const express=require('express');
const bodyParser=require('body-parser');

const {mongoose}=require('./db/mogoose');
const {User}=require('./models/user');
const {Todo}=require('./models/todo');

var app=express();

app.use(bodyParser.json());

app.post('/todos',(req,res)=>{
    console.log(req.body.text);
    var newTodo=new Todo({
       text:req.body.text
    });
    
    newTodo.save().then((docs)=>{
        res.send(docs);
    },(e)=>{
    res.status(400).send(e);
    });

});
app.listen(3000,()=>{
    console.log('server running at port 3000');
})

