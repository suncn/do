const Activity = require('../models/Activity');

exports.findLast = (req, res, next) => {
  const userId = req.user.id;

  Activity.findLast(userId).then(activity => {
    res.status(200).json({ result: activity });
  }, next);
  
};
