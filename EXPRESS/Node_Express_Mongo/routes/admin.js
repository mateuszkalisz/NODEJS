const express = require('express');
const router = express.Router();
const News = require('../models/news');


router.all('*', (req,res,next)=>{
  if(!req.session.admin){
    res.redirect('/login');
  }
  next();
})

/* GET home page. */
router.get('/', (req, res) => {
  
  // const newsData = new News({
  //   title: 'test title',
  //   description: 'test description'
  // })

  // newsData.save(err =>{
  //   console.log(err);
  // })

  res.render('admin/index', { title: 'Admin' });
});

router.get('/news/add', (req,res)=>{
  res.render('admin/news-form', { title: 'Dodaj news'});
})

router.post('/news/add', (req,res)=>{
  const body = req.body;

  const newsData = new News(body);
  const errors = newsData.validateSync();

  // console.log(errors);

  newsData.save((err)=>{
    console.log(err);
  })

  res.render('admin/news-form', {title: 'Dodaj news', errors});

})

module.exports = router;
