module.exports = (req, res, next) => {
  console.log("authorizer");
  console.log(req.session);
  if (req.session.signIn) {
    console.log(req.session);
    next();
  } else {
    console.log("NO session in authorizer");
    console.log(req.session);
    res.status(403).send({
      httpStatus: 403,
      message: "Forbidden authorizer",
      data: null,
    });
  }
};
