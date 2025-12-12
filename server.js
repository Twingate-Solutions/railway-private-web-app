const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("OK - private service"));
app.get("/healthz", (req, res) => res.status(200).send("ok"));

const port = process.env.PORT ? Number(process.env.PORT) : 3000;
app.listen(port, "0.0.0.0", () => console.log(`Listening on ${port}`));
