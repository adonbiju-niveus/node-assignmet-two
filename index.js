const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(express.json());

// Parse JSON bodies
app.use(bodyParser.json());

app.post("/api/data", (req, res) => {
  const data = req.body;
  let newArr = [];
  newArr.push(data);
  res.status(200).json({
    data: newArr,
    message: "Data inserted successfully!",
  });
});

app.get('/api/:id', (req, res) => {
    const queryParam = req.query.name;
    const pathParam = req.params.id;
    res.json({queryParam,pathParam,info: 'This is your path and query params!'});
  });
app.listen(3000, () => {
  console.log("Server listening on port 3000!");
});
