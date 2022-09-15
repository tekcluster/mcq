const express = require("express");
const bodyParser = require('body-parser');
const cors = require("cors");
const fs=require("fs");
var data = fs.readFileSync("./data.json");
var myObject = JSON.parse(data);
const app = express();

app.use(cors());
app.use(bodyParser.json());

 function create(customer){
  myObject.table.push(customer);
  fs.writeFile("./data.json", JSON.stringify(myObject), err => {
    if (err) console.log("Error writing file:", err);
  });
 }
//add new user
app.post('/',(req, res) => {
  create(req.body);
  res.send(JSON.stringify({"status": 200, "error": null, "response": "Suess"}));
});
app.listen(4000, () => {
  console.log("Server running successfully on 4000");
});