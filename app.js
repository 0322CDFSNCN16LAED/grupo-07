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


