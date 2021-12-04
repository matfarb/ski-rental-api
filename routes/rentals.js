//GET /students
//GET /student/:id
//POST /students
//PUT /students/:id
//DELETE /students/:id

const express = require('express');
const router = express.Router();
const rentalsCtrl =  require('../controllers/rentals');

/* GET users listing. */
router.post('/', rentalsCtrl.create);
router.get('/', rentalsCtrl.getUserRentals);
router.delete('/delete/:id', rentalsCtrl.deleteRental);


module.exports = router;
