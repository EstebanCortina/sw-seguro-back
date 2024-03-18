module.exports = (req, res, next) => {
  if (req.session.signIn) {
    next();
  } else {
    res.status(403).send({
      httpStatus: 403,
      message: "Forbiden",
      data: null,
    });
  }
};

