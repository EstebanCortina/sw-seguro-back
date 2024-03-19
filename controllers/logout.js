module.exports = (req, res) => {
  // Destruir la sesión actual
  req.session.destroy((err) => {
    if (err) {
      console.error("Error while logout:", err);
      res.status(500).send("Server Error");
    } else {
      res.status(200).send({
        httpStatus: 200,
        message: "Logout success",
        data: null,
      });
    }
  });
};
