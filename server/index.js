const express = require("express");

const app =express();

app.get("/",(req,resp)=>{
resp.send(`<h1>hello</h1>`)
})
app.listen(5000,()=>{
    console.log("Server is runnning")
});