const express = require("express");
const app = express();

app.set('view engine' ,'ejs')
                   
app.get("/", (req, res) => {
  res.render("home.ejs");
});
app.get("/about", (req, res) => {
    res.send("this is about page");
  });
  app.get("/contact", (req, res) => {
    res.send("this is contact page");
  });
  
  


app.listen(3000, () => {
  console.log("project started");
});
