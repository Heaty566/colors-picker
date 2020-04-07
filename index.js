const express = require("express");
const app = express();

app.use(express.static(process.cwd() + "/public"));
app.use(express.json());
app.get("/*", (req, res) => {
    res.sendFile(process.cwd() + "/public/index.html");
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`listening on port ${port}`);
});
