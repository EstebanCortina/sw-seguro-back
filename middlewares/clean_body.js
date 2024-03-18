const validator = require("validator");
function clean_body(req, res, next) {
  let err = null;
  const regex = /^[a-zA-Z0-9._-]+@ucol\.mx$/;
  Object.keys(req.body).forEach((field) => {
    if (req.body[field].length < 80 && typeof req.body[field] === "string") {
      if (field === "email") {
        if (
          !validator.isEmail(req.body[field]) ||
          !regex.test(req.body[field])
        ) {
          err = res.status(400).send({
            httpStatus: 400,
            message: "Bad request",
            data: [],
          });
        }
        req.body[field] = req.body[field].trim().toLowerCase();
      }
    } else {
      err = res.status(400).send({
        httpStatus: 400,
        message: "Bad request",
        data: [],
      });
    }
  });
  if (err) {
    return err;
  }
  next();
}

module.exports = clean_body;

