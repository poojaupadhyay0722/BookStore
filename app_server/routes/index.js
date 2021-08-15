const express = require('express');
const router = express.Router();

const ctrlLocations = require ('../controllers/locations');
const ctrlOthers = require('../controllers/others');

router.get('/',ctrlLocations.homelist);
router.get('/location',ctrlLocations.locationInfo);
router.get('/addnewbook', ctrlLocations.addReview);
router.get('/bookdetails',ctrlLocations.bookdetails);
router.get('/edit',ctrlLocations.editbook);
router.get('/delete',ctrlLocations.deletebook);
router.get('/about', ctrlOthers.about);

module.exports = router;
