const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/blogRoutes")

// creating an express app
const app = express();

// connect to mongo db

const dbURI = 'mongodb+srv://Leoravoe_Kel:preetamsarkar@12@nodetutorial.fndob.mongodb.net/Node-tuts?retryWrites=true&w=majority'
mongoose.connect(dbURI, {useNewUrlParser : true,useUnifiedTopology: true})
  .then((result) => {
    console.log("connected to the database")
    // listening to particular port only after the db is connected to
    app.listen(3000);
  })
  .catch((err) =>{
    // console.log("I entered")
    console.log(err)
  })

// register view engine
app.set("view engine", "ejs");

//middleware & static files

app.use(express.static("public"))
app.use(express.urlencoded({extended: true}));

// basic routing particular

app.get("/", (req, res) => {
  //res.send('<p> hi hello</p>');
  // res.sendFile("./index.html", { root: __dirname });
  // res.render("index",{title: 'Home'});
  res.redirect("/blogs")

});
app.get("/about", (req, res) => {
  // res.sendFile("./about.html", { root: __dirname });
  res.render("about",{title: 'About'});
});

app.get("/create", (req, res) => {
  // console.log("I entered")
  res.render("create",{title: 'Create a blog'});
});

// blog routes 

app.use('/blogs',router)


// 404 error handling
app.use((req, res) => {
  res.status(404).render("404",{title: 'Error'});
});
