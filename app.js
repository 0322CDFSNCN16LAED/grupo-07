const path = require("path");
const express = require("express");

const app = express();

const PORT = 3000;
app.listen(PORT, () => {
  console.log("Estamos corriendo en el puerto " + PORT);
});

app.use(express.static(path.join(__dirname, "public")));

//camino | path | ruta
app.get("/", (req, res) => {
  // funcion controladora o handler
  res.sendFile(path.join(__dirname, "views/home.html"));
});

app.get("/login", (req, res) => {
  // funcion controladora o handler
  res.sendFile(path.join(__dirname, "views/login.html"));
});

app.get("/register", (req, res) => {
  // funcion controladora o handler
  res.sendFile(path.join(__dirname, "views/register.html"));
});

app.get("/productos", (req, res) => {
  // funcion controladora o handler
  res.sendFile(path.join(__dirname, "views/productos.html"));
});

app.get("/escuelas-de-surf", (req, res) => {
  // funcion controladora o handler
  res.sendFile(path.join(__dirname, "views/escuelas-de-surf.html"));
});

app.get("/nosotros", (req, res) => {
  // funcion controladora o handler
  res.sendFile(path.join(__dirname, "views/nosotros.html"));
});

app.get("/carrito", (req, res) => {
  // funcion controladora o handler
  res.sendFile(path.join(__dirname, "views/carrito.html"));
});
