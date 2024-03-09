function clean_body(req, res, next) {
  Object.keys(req.body).forEach((field) => {
    if (req.body[field].length < 80) {
      req.body[field] = req.body[field].trim().toLowerCase();
    } else {
      res.status(400).send({
        httpStatus: 400,
        message: "Bad body request",
        data: `'${field}' too long content`,
      });
    }
  });
  next();
}

module.exports = clean_body;

