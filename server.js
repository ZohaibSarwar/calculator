const express = require("express");
const path = require("path");
// const routes = require("./routes/index");

const app = express();

const port = process.env.PORT || 3000;

// The middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use("/api", routes);

app.use(express.static("public"));

// GET Route for homepage
app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/index.html"))
);


// Wildcard to direct all undefined end points back to the homepage
app.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, "public/index.html"))
);

app.listen(port, () =>
  console.log(`\n Server is running at http://localhost:${port} \n`)
);
