var express = require('express');
var router = express.Router();
var controller = require('../controllers/carController');

router.get('/', controller.getAllCars);
router.get('/cars/:id', controller.getCarById);
router.post('/cars', controller.addCar);
router.put('/cars/:id', controller.editCar);
router.delete('/cars/:id', controller.removeCar);

module.exports = router;