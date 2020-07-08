const express = require('express');

module.exports = (models) => {
  const router = express.Router();
  
  router.use('/api/users', require('./routes/user')(models));
  router.use('/api/articles', require('./routes/article')(models));
  router.use('/api/categories', require('./routes/category')(models));
  router.use('/api/tags', require('./routes/tag')(models));
  
  
  router.get('*', (req, res) => res.sendStatus(404));
  
  return router;
}
