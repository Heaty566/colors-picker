const express = require("express");
const compression = require("compression");
const helmet = require("helmet");
const app = express();

app.use(express.static(process.cwd() + "/public"));
app.use(express.json());
app.use(helmet());
app.use(compression());
app.get("/*", (req, res) => {
    res.sendFile(process.cwd() + "/public/index.html");
});

const port = process.env.PORT || 7000;
app.listen(port, () => {
    console.log(`listening on port ${port}`);
});
