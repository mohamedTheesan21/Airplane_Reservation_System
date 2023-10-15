const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser"); // Corrected import

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get("/ip", function (req, res) {
  res.json("Hello World");
});

app.post("/login", (req, res) => {
    console.log(req.body);
    let {username,password} = req.body;

    res.json({ message: "submitted" });
});

app.listen(5000, function () {
  console.log("Server is running on port 5000");
});
