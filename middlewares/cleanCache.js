const { clearCache } = require("../services/cacheService");

module.exports = async (req, res, next) => {
  await next();
  clearCache(req.user.id);
}