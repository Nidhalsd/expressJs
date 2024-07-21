const express = require ("express")
const app = express()
const fs = require ("fs") ;



app.get ("/home.html" , (req , res ) => {
    fs.readFile("./Homepage.html" ,"utf-8", (err, data) =>{
        err ? res.end ("FILE NOT FOUND")  && console.error ( err) : res.send(data) ; 
    } );

}) ;

app.get ("/services.html"  , (req , res ) => {
    fs.readFile("./Homepage.html" ,"utf-8", (err, data) =>{
        err ? res.end ("FILE NOT FOUND")  && console.error ( err) : res.send(data) ; 
    } );

}) ;

app.get ("/contactus" , (req , res ) => {
    fs.readFile("./Homepage.html" ,"utf-8", (err, data) =>{
        err ? res.end ("FILE NOT FOUND")  && console.error ( err) : res.send(data) ; 
    } );
})


const PORT=5000 
app.listen (PORT,()=> console.log("my server is running on port :" ,PORT))