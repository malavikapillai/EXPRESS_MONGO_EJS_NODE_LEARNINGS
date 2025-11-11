const express=require("express");

const app=express();

const port=3000;

// middleware

// app.use((req,res,next)=>
// {
//     console.log("I am middleware");
//     next();

  
// });
// app.use((req,res,next)=>
//  {
//         console.log("I am 2nd middleware");
//         next();
    
      
//     });



app.use("/random",(req,res,next)=>{
    console.log("i am only for raanodm middleware");
    next();

});
app.use("/",(req,res,next)=>
{
    console.log('I am only for root path');
    next();
});


app.get('/',(req,res)=>
{
    res.send("helli");
});

app.get('/random',(req,res)=>
{
        res.send("hellio ranodm");
});

app.listen(port,()=>
{
    console.log(`listeing on port ${port}`);
});

