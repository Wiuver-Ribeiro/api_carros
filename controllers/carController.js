let id = 2;

let cars = [
  { id: 1, brand: "Fiat", model: "Pulse", year: 2023 },
  { id: 2, brand: "Volkswagen", model: "Jetta TSI", year: 2018 },
];


module.exports = {
  getAllCars: (req, res, next) => {
    res.setHeader("content-type", "application/json");
    res.status(200).json(cars);
  },
  getCarById: (req, res) => {
    const { id } = req.params;
    const car = cars.find((car) => car.id === parseInt(id));
    if (!car) {
      return res.status(404).json({ error: 'Carro não encontrado' });
    }
    res.json(car);
  },

  addCar: (req, res, next) => {
    let brand = req.body.brand;
    let model = req.body.model;
    let year = req.body.year;

    let car = {
      id: ++id,
      brand: brand,
      model: model,
      year: year
    }

    cars.push(car);
    return res.status(201).json(car);
  },
  updateCar: (req, res, next) => {
    const { id } = req.params;
    const { brand, model, year } = req.body;
    const carIndex = cars.findIndex((car) => car.id === parseInt(id));
    if (carIndex === -1) {
      return res.status(404).json({ error: 'Carro não encontrado' });
    }
    cars[carIndex] = { ...cars[carIndex], brand, model, year };
    res.json(cars[carIndex]);
  },
  deleteCar: (req, res, next) => {
    let id = req.params.id;
    for (i = 0; i < cars.length; i++) {
      let car = cars[i];

      if (car.id == id) {
        cars.splice(i, 1);
        return res.status(200).json({
          message: "CARRO REMOVIDO COM SUCESSO!"
        })
      }
    }
    return res.status(404).json({ error: "Carro não encontrado!" })
  }
}

