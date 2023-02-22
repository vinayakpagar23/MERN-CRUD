const mongoose = require("Mongoose");
const Connection =()=>{
    const URL =";"
 try{
    mongoose.connect(URL,{useUnifiedTopology:true, useNewUrlParser:true});
 }
 catch(e){
    console.log(e);
 }
}