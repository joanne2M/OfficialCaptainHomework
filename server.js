// All Require Together

const mongoose = require("mongoose");
const express = require('express')
require("dotenv").config();

const app = express();

// All Settings Together

app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

app.use(express.urlencoded({ extended: false }));

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.once("open", () => {
  console.log("connected to mongo");
});

// All Routes Together

app.get("/new", (req,res) => {
    res.render("New")
})

app.listen("3000", ()=>{console.log('hey')})

app.post("/logs",(req,res)=> {
    if (req.body.shipIsBroken === "on") {
        req.body.shipIsBroken = true;
      } else {
        req.body.shipIsBroken = false;
      } 
      
      res.send(req.body) 

    })
