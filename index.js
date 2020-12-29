const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    a = 1;
    b = 2;
    c = a + b;
    res.send("hello");
});
app.listen(port, () => console.log(`run in port: ${port}`));
