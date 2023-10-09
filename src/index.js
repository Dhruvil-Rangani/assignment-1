const express = require("express");
const app = express();
const path = require("path");

app.set("view engine","ejs");//setting application's templating engine to ejs

app.use(express.static("public"));
//setting up rendered view as a response for all the pages in the views folder.
app.get("/",(req,res) => {
    res.render("pages/index");
});

app.get("/aboutEJS",(req,res) => {
    res.render("pages/about");
});

app.get("/contactEJS",(req,res) =>{
    res.render("pages/contact");
});
app.get("/projectsEJS",(req,res) =>{
    res.render("pages/projects");
});
app.get("/servicesEJS",(req,res) =>{
    res.render("pages/services");
});


// configuring port number
const PORT = process.env.port || 5000;
app.listen(PORT, () => {
    console.log("Listening on port");
});