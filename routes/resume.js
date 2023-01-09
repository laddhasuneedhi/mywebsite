const express = require('express');
const router = express.Router();


router.get('', async (req, res) => {

  res.render('posts/resume', {homePage: false})

});

module.exports = router;