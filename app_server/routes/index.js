const express = require('express');
const router = express.Router();

const ctrlMain = require ('../controllers/main');
const ctrlOthers = require('../controllers/others');
 
router.get('/', ctrlMain.homelist);
router.get('/addnewbook', ctrlMain.addNewBook);
router.post('/doAddNewBook', ctrlMain.doAddNewBook);
router.get('/bookdetails',ctrlMain.bookdetails);
router.get('/edit',ctrlMain.editbook);
router.get('/delete',ctrlMain.deletebook);
router.get('/listbooks',ctrlMain.listbook);

router.get('/about', ctrlOthers.about);


module.exports = router;
