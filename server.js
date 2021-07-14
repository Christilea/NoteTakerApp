// const fs = require('fs');

// fs.writeFile('mynewfile3.txt', 'Hello content!', function (err) {
    // if (err) throw err;
    // console.log('Saved!');
//   });
const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;

// const express = require('express');

// const app = express();
// const PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use("/api",require("./routes/apiroutes"));
app.use("/",require("./routes/htmlroutes"));


app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));

// app.listen(PORT, function () {
    // console.log("App listening on PORT: " + PORT);