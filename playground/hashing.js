var jwt=require("jsonwebtoken");
var data={
    id:10
};

var token=jwt.sign(data,"123secret");
console.log(token);
var decoded=jwt.verify(token,"4123secret");
console.log(decoded);