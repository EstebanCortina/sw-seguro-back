const User = require("../models/user_model.js");
module.exports = (req, res) => {
  let response = User.index().filter(
    (user) => user.user_type_name === "alumno"
  );
  res.status(response.httpStatus).send(response);
};

