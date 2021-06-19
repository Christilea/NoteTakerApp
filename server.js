
const express = require('express');

const app = express();
const PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use("/api",require("./routes/apiroutes"));
app.use("/",require("./routes/htmlroutes"));


app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));