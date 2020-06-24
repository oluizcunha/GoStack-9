const express = require("express");

console.log(express);

const server = express();

server.get("/teste", (req, res) => {
  return res.json({ message: "aloo" });
});

server.listen(3000);
