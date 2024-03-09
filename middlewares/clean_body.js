function clean_body(req, res, next) {
  Object.keys(req.body).forEach((field) => {
    if (req.body[field].length < 80) {
      req.body[field] = req.body[field].trim().toLowerCase();
    } else {
      throw new Error(`'${field}' too long content`);
    }
  });
  next();
}

module.exports = clean_body;

