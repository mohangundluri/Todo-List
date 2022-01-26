const express = require("express");
const bodyParser = require("body-parser");
const dayFun = require(__dirname+"/data/data.js"); 


const app = express();
//Creatingh a lists
const data_list =[];
const work_list = [];

// Middlewares and ejs setting
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("Public"))


//Routes start here
app.get("/", (req, res)=>{
    res.render('index', {title:dayFun.getDate(), data_list: data_list});
});

app.post("/", (req, res)=>{
    let data = req.body.n1;
    data_list.push(data);
    res.redirect("/");
})


app.get("/work", (req, res)=>{
    res.render("index", {title:"work Page", data_list:work_list})
});

app.post("/work", (req, res)=>{
    let data = req.body.n1;
    work_list.push(data);
    res.redirect("/work")
});

app.get("/about", (req, res)=>{
    res.render('about', { title: "About Page"})
})
app.listen(5000, ()=>{
    console.log("Server runnning at the port 5000");
});