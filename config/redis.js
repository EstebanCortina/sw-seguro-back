const redis = require("redis");
const session = require("express-session");
const RedisStore = require("connect-redis").default;

let redisClient = redis.createClient({
  url:
    process.env.NODE_ENV === "prod"
      ? process.env.REDIS_INTERNAL
      : process.env.REDIS_EXTERNAL,
});
redisClient.connect().then((connect) => {
  console.log("redis connection");
});

module.exports = session({
  store: new RedisStore({
    client: redisClient,
    ttl: 86400
  }),
  secret: process.env.EXPRESS_SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: process.env.NODE_ENV === "prod" ? true : false,
  },
});
