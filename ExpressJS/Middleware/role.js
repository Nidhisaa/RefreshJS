const checkRole = (allowedRoles) => {

  return (req, res, next) => {
    const role = req.headers["role"];
    if (!role) user.roll="guest";
    if (!allowedRoles.includes(role)) {
      return res.status(403).json({ error: "Access Denied" });
    }
    next();

    };
  };
module.exports = checkRole;