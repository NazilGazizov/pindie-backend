const express = require("express");
const app = express();
const PORT = 3000;
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("./middlewares/cors.js");
const connectToDatabase = require("./database/connect.js");
const apiRouter = require("./routes/apiRouter.js");

connectToDatabase();

app.use(
    cors,
    bodyParser.json(),
    express.static(path.join(__dirname, "public")),
    apiRouter
);

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
