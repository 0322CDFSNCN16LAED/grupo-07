const path = require("path");
const express = require("express");
const methodOverride = require("method-override");
const session = require("express-session");
const cookieParser = require("cookie-parser");

const app = express();
const cors = require("cors");

app.use(cors(["localhost:3000"]));

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));
app.use(cookieParser());
app.use(
  session({
    secret: "Mensaje secreto",
    resave: false,
    saveUninitialized: false,
  })
);

app.set("views", path.resolve(__dirname, "./src/views"));
app.set("view engine", "ejs");

const mainRoutes = require("./src/routes/main-router");
app.use("/", mainRoutes);

const apiRoutes = require("./src/routes/api/apiRoutes");
app.use("/api", apiRoutes);

const PORT = 3001;
app.listen(PORT, () => {
  console.log("Estamos corriendo en el puerto " + PORT);
});
