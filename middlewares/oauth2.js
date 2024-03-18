const { OAuth2Client } = require("google-auth-library");
const client = new OAuth2Client(process.env.OAUTH2_CLIENT_ID);

const validate_google_token = async (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader.split(" ")[1];

  try {
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.OAUTH2_CLIENT_ID,
    });
    const payload = ticket.getPayload();
    console.log(`${payload["sub"]} - ${payload["email"]}`);
    if (req.body.email === payload["email"]) {
      next(payload["email"]);
    } else {
      res.status(400).send({ error: "It must be the same account" });
    }
  } catch (error) {
    console.error("Error while token validation:", error);
    res.status(401).send({ error: "Invalid Token" });
  }
};

module.exports = validate_google_token;

