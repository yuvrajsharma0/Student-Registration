const path = require("path");
const express = require("express");
const indexRoute = require("./src/routes/index");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// Setting View Engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "src", "views"));

app.get("/favicon.ico", (req, res) => {
	res.sendStatus(204);
});

app.use("/", indexRoute);

app.listen(5000, () => {
	console.log("App is now running at port ", 5000);
});
