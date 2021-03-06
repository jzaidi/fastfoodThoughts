const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 3004;
const listener = () => console.log(`Server is running on port ${port}`);
const knex = require("../db/knex");
const bodyParser = require("body-parser");
const cors = require("cors");
const logger = require("morgan");

app.disable("x-powered-by");
app.use(express.static(path.join(__dirname, "../client/build")));
app.use(logger("dev"));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/api/ping", (req, res, next) => {
    res.json({ message: "pong!" });
});

app.get("/api/posts", (req, res, next) => {
    knex("posts").then(posts => res.json({ posts: posts }));
});

app.post("/api/posts", (req, res, next) => {
    knex("posts")
        .insert(req.body)
        .then(() => {
            knex("posts").then(posts => res.json(posts));
        });
});

app.get("/", (req, res, next) => {
    const index = path.join(__dirname, "../client/build/index.html");
    res.sendFile(index);
});

app.delete("/api/posts/:id", (req, res, next) => {
    knex("posts")
        .del()
        .where("id", req.params.id)
        .then(() => {
            knex("posts").then(posts => res.json(posts));
        });
});

app.patch("/api/posts/:id", (req, res, next) => {
    knex("posts")
        .update(req.body)
        .where("id", req.params.id)
        .then(() => {
            knex("posts").orderBy("id", 'desc').then(posts => res.json(posts));
        });
});

// handle error
app.use((err, req, res, next) => {
    const status = err.status || 500;
    res.status(status).json({ error: err });
});

app.use((req, res, next) => {
    res.status(404).json({ error: { message: "Not found." } });
});

app.listen(port, listener);
