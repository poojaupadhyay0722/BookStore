const express = require('express');
const router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });
const ctrlLocations = require ('../controllers/locations');
const ctrlOthers = require('../controllers/others');
//router.get('/', ctrlMain.index);

router.get('/',ctrlLocations.homelist);
router.get('/location',ctrlLocations.locationInfo);
router.get('/location/review/new', ctrlLocations.addReview);
//router.get('/Book-details',ctrlLocations.bookdetails);

router.get('/about', ctrlOthers.about);

module.exports = router;
