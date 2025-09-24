function logTimestamp(req, res, next) {
  const now = new Date();
  console.log(`[${now}] Request to: ${req.method} ${req.url}`);
  next();
}

module.exports = logTimestamp;