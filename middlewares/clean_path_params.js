function validate_param(param) {
  let uri_decoded = decodeURIComponent(param);
  if (uri_decoded.length >= 20) {
    return false;
  }
  if (!/^[a-zA-Z0-9\-_]+$/u.test(uri_decoded)) {
    return false;
  }
  return true;
}
module.exports = (req, res, next) => {
  if (req.params) {
    Object.values(req.params).forEach((param) => {
      if (!validate_param(param)) {
        return res.send(400).send("bad param");
      }
    });
  }
  next();
};
