// server.js
// where your node app starts

// init project
var express = require("express");
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
var cors = require("cors");
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

// your first API endpoint...
app.get("/api", function (req, res) {
  let date = new Date();
  res.json({ unix: date.getMilliseconds(), utc: date.getUTCDate() });
});

app.get("/api/:date", (req, res) => {
  let date = parseInt(req.params.date);
  console.log(date);

  if (isNaN(date)) {
    res.json({ error: "Invalid Date" });
    return;
  }

  if (date === "" || date === undefined) {
    return res.json({ unix: date.getMilliseconds(), utc: date.getUTCDate() });
  }

  let dateObj = new Date(date);
  console.log(dateObj);

  let dateJson = { unix: date, utc: new Date(dateObj).toUTCString() };
  return res.json(dateJson);
});

// listen for requests :)
var listener = app.listen(8881, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
