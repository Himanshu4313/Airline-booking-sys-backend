import express from "express";
const app = express();

app.use("/", (req, res) => {
  res.status(200).json({ message: "Hey welcome,to my server" });
});

//This route for unknown url request to server
app.use("*", (req, res) => {
  res.status(400).send("OOPS! 404 page not found");
});

export default app;