module.exports = (email, req, res, next) => {
  //TODO retirar el negado despues para que solo acepte ucol.mx
  if (!/^[a-zA-Z0-9._-]+@ucol\.mx$/.test(email)) {
    
    next();
  } else {
    res.status(401).send({ error: "Invalid email" });
  }
};

