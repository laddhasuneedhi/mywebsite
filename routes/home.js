const express = require('express');
const router = express.Router();


router.get('', async (req, res) => {

  res.render('posts/home',{homePage:true,  stylesheet: '/public/css/home.css'});

});

module.exports = router;