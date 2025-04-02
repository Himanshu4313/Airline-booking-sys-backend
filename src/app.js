const express = require('express');
const apiRoutes = require("./routes/index.js");
const app = express();


app.use(express.json()); // for json request and response
app.use(express.urlencoded({extended : true}));

// console.log("Enter API routes now");
//for routes
app.use('/api',apiRoutes);

app.use("/", (req, res) => {
  res.status(200).json({ message: "Hey welcome,to my server" });
});

//This route for unknown url request to server
app.use("*", (req, res) => {
  res.status(400).send("OOPS! 404 page not found");
});

module.exports = app;