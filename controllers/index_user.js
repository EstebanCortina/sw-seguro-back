const User = require("../models/user_model.js");
module.exports = async (req, res) => {
  console.log(req.session);
  console.log("index user");
  if (req.session.user_id === parseInt(req.params.id)) {
    let response = await User.find_by_id(req.params.id);
    res.status(response.httpStatus).send(response);
  } else {
    res.status(403).send({
      httpStatus: 403,
      message: "Forbidden content",
      data: null,
    });
  }
};
