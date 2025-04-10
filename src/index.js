const dotenv = require("dotenv");
dotenv.config();

const app = require("./app.js");
const express = require("express");

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server is runnig at http://localhost:${PORT}`);
});
