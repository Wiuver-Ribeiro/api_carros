// routes/carRoutes.js

const express = require('express');
const router = express.Router();
const carController = require('../controllers/carController');

// Listar todos os carros
router.get('/', carController.getAllCars);

router.get('/:id', carController.getCarById);

router.post('/', carController.addCar);

router.put('/:id', carController.updateCar);

router.delete('/:id', carController.deleteCar);

module.exports = router;
