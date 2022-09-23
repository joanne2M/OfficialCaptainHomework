const express = require("express");
const app = express();
app.listen("3000", () => {console.log('Heller')})

app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

// change your res.send to res.render this view
app.get("/New", (req, res) => { 
res.render("New")
}
)