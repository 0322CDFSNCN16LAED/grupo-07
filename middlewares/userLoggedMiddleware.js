function userLoggedMiddleware(req, res, next) {
  console.log("pase por MD de USERLOGGED");
  const isLogged = false;
  next();
}

module.exports = userLoggedMiddleware;
