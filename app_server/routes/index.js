const express = require('express');
const router = express.Router();

const ctrlMain = require ('../controllers/main');
const ctrlOthers = require('../controllers/others');
 
router.get('/', ctrlMain.homelist);
router.get('/addnewbook', ctrlMain.addNewBook);
router.post('/doAddNewBook', ctrlMain.doAddNewBook);
router.get('/bookdetails',ctrlMain.bookdetails);
router.post('/bookdetails',ctrlMain.postBookDetails);
router.post('/edit',ctrlMain.editbook);
router.get('/edit',ctrlMain.getEditBook);
router.get('/delete',ctrlMain.deletebook);
router.post('/delete',ctrlMain.postDeleteBook);
router.get('/listbooks',ctrlMain.listbook);
router.get('/about', ctrlOthers.about);


module.exports = router;
