const express=require('express');
const bodyParser=require('body-parser');

const {mongoose}=require('./db/mogoose');
const {User}=require('./models/user');
const {Todo}=require('./models/todo');

var app=express();
var port=process.env.port||3000

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
app.get('/todos',(req,res)=>{
Todo.find().then((todos)=>{
    res.send({todos})
},(err)=>{
    res.status(400).send(err);
});
});
app.listen(port,()=>{
    console.log('server running at port '+port);
})

