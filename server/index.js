const express = require("express");
const fs = require("fs");

// create an express route which takes two numbers as
//  query parameters and a middleware to double the values
//  and write the sum of two in a file named sum.txt

const app = express();

function DoubleMiddleware(req, res, next) {
  console.log("hai");
  req.query.num1 = req.query?.num1 * 2;
  req.query.num2 = req.query?.num2 * 2;
  next();
}

app.get("/add", DoubleMiddleware, (req, res) => {
  console.log(req.query);
  fs.writeFile(
    "sum.txt",
    JSON.stringify(req.query?.num1 + req.query?.num2),
    (err) => {
      if (err) {
        console.error("Error writing to file:", err);
      } else {
        console.log("Sum written to sum.txt");
      }
    }
  );
});

app.listen(3000, () => {
  console.log("server listening ", 3000, "port");
});
