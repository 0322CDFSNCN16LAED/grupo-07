function guestMiddleware(req, res, next) {
  if (req.session.userLogged) {
    return res.redirect("/usuarios/perfil");
  }
  next();
}

module.exports = guestMiddleware;
