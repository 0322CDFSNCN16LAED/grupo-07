const path = require("path");
const express = require("express");
const methodOverride = require("method-override");
const session = require("express-session");
const cookieParser = require("cookie-parser");
<<<<<<< HEAD
const logMiddleware = require("./middlewares/logMiddleware.js");
=======
>>>>>>> 1daf4aabad4b78fa96885d32978eab1e10c87ce4

const app = express();

app.use(logMiddleware);
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));
app.use(cookieParser());
<<<<<<< HEAD
app.use(
  session({
    secret: "Mensaje secreto",
    resave: false,
    saveUninitialized: false,
  })
);
=======
app.use(session({
  secret: "Mensaje secreto",
  resave: false,
  saveUninitialized: false
}));
>>>>>>> 1daf4aabad4b78fa96885d32978eab1e10c87ce4

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

const mainRoutes = require("./routes/main-router");
app.use("/", mainRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log("Estamos corriendo en el puerto " + PORT);
});
