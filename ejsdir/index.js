const express = require("express");
const app=express();

const port=8080;

app.set("view engine","ejs");

// serving static files

app.use(express.static("public"));


app.listen(port,()=>
{
    console.log(`listeingc on port ${port}`);
});

app.get("/",(req,res)=>
{
    res.render("home.ejs");
});





app.get("/rolldice",(req,res)=>
{

    // suppose we get dat from database
    let dicevalue=Math.floor(Math.random()*6) +1;
    res.render("rolldice.ejs",{num:dicevalue});
    // the we can acess this num value in rolldice.ejs

    // also we can wriyte

    // res.render("rolldice.ejs",{dicevalue});
});


// instagram ejs

app.get("/ig/:username",(req,res)=>
{
    const {username}=req.params;
    const instadata=require("./data.json");
    const data=instadata[username];

    if(data)
    {
        res.render("instagram.ejs",{data});

    }
    else{
        res.render("error.ejs");
    }
});





