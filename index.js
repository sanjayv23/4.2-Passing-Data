import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
let sum=0
let fname,lname
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  
  res.render("index.ejs")
  
  
});

app.post("/submit", (req, res) => {
  fname=req.body["fName"]
  lname=req.body["lName"]
  sum=fname.length+lname.length;
  res.render("index.ejs",{nol:sum})
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
