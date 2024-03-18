function ranmdon_delay(req, res, next) {
  const randomDelay = Math.floor(Math.random() * (2500 - 1000 + 1) + 1000);
  setTimeout(() => {
    next();
  }, randomDelay);
}

module.exports = ranmdon_delay;

