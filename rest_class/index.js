const express=require("express");
const app=express();
const port=8080;
const path=require("path");

app.use(express.urlencoded({extended:true}));
app.use(express.json());



app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

app.use(express.static(path.join(__dirname,"public")));


let posts = [
    {
        id:"1a",
        username: "john_doe",
        content: "Just finished my first Express.js project!"
    },
    {
        id:"2a",
        username: "malavika",
        content: "Learning backend is actually fun 😎"
    },
    {
        id:"3a",
        username: "alex",
        content: "Coffee + coding = perfect combo ☕💻"
    },
    {
        id:"4a",
        username: "sara",
        content: "Currently exploring EJS templates ✨"
    },
    {
        id:"5a",
        username: "dev_girl",
        content: "Debugging is like solving a mystery... 🕵️‍♀️"
    }
];


app.get("/posts",(req,res)=>
{
    res.render("index.ejs",{posts})

});

app.get("/posts/new",(req,res)=>
{
    res.render("new.ejs")
});

app.post("/posts",(req,res)=>
{
   let {username,content}=req.body;
   posts.push({username,content});
   res.redirect("/posts")
});








app.listen(port,()=>
{
    console.log(`listening on port ${port}`);
});