const express= require("express")
const app = express()

// function add(a,b){
//     const res=a+b
//     return res
// }

app.get("/",(req,res)=>{
    console.log("i am the home page")
    res.send("hello from home page")
})

app.get("/add/:firstArg/:secondArg",(req,res)=>{
// app.get("/add",(req,res)=>{
    const a = parseInt(req.query.a)
    const b = parseInt(req.query.b)
    console.log("yeah i am running")
    res.send("the sum is "+(a+b))
})

// app.listen(3000)
app.listen(3000, () => {
    console.log("Server running on port 3000")
})