const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  console.log("Request received");
  res.send("Hello Skaffold 🚀 - toto");
});

app.listen(PORT, () => {
  console.log("Request received");
}); 
