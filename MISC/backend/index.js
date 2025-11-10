const express = require("express");
const app=express();

const port=2000;

app.use(express.urlencoded({extended:true}));
app.use(express.json());


app.listen(port,()=>
    {
        console.log(`listeingc on port ${port}`);
    });

app.get('/register',(req,res)=>
{
    res.send("acceped get");
})

app.post('/register',(req,res)=>
    {
        console.log(req.body);
        let {user , password}=req.body;
        res.send(`welcome ${user}`)
       
    })

    