//GET /students
//GET /student/:id
//POST /students
//PUT /students/:id
//DELETE /students/:id

const express = require('express');
const router = express.Router();
const rentalsCtrl =  require('../controllers/rentals');

/* GET users listing. */
router.get('/', rentalsCtrl.index);
router.post('/', rentalsCtrl.create);


module.exports = router;
