const express= require("express");
const app=express();


let port=3000;
app.listen(port,()=>
{
    console.log(`app listeing in port`);
});


app.use((req,res,next)=>
{
    console.log("request recived");
    // res.send("this is a first response");

    // res.send({
    //     "name":"apple"
    // });
    next() 
    // moves to next route
})


// routing 

app.get("/", (req, res) => {
  res.send("You contacted root path");
});

app.get("/home",(req,res)=>
    {
        res.send("you conatcted home page again");
    });


// path parameters

app.get("/:username",(req,res)=>
    {
        let {username}=req.params;
        let data=`<h1> Welcome to the page of @ ${username}</h1>`;
        res.send(data);
    
    });






// 404 handler for all unmatched routes
app.use((req, res) => {
  res.status(404).send("Page doesn't exist");
});




