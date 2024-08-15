const express=require("express");
const path=require("path");
const { clearScreenDown } = require("readline");
require("../expressweb1/src/db/conn");
const hbs =require("hbs");


const app=express();
const port =process.env.PORT ||3000;

// setting the path
const staticpath=path.join(__dirname,"../public");
const tamplatepath=path.join(__dirname,"../tamplates/views");
const partialpath=path.join(__dirname,"../tamplates/partials");

// middleware
app.use('/css',express.static(path.join(__dirname,"../node_modules/bootstrap/dist/css")));
app.use('/js',express.static(path.join(__dirname,"../node_modules/bootstrap/dist/css")))
app.use('/jq',express.static(path.join(__dirname,"../node_modules/jquery/dist")));
app.use(express.static(staticpath));
app.use(express.static(staticpath))
app.set("view engine","hbs");
app.set("views",tamplatepath);
hbs.registerPartials(partialpath);


//routing
app.get("/",(req,res)=>{
    res.render("index");
})

app.get("/contact",(req,res)=>{
    res.render("about");
})

app.get("/services",(req,res)=>{
    res.render("services");
})

app.get("/project",(req,res)=>{
    res.render("project");
})

app.get("/contact",(req,res)=>{
    res.render("contact");
})



//server create
app.listen(port,()=>{
    console.log(`server is running at port no ${port}`);
})