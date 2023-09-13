let cars = [
  { id: 1, brand: "Fiat", model: "Pulse", year: 2023 },
  { id: 2, brand: "Volkswagen", model: "Jetta TSI", year: 2018 },
];


module.exports = {
    getAllCars: (req, res, next) => {
        res.status(200).json(cars);
    },
    getCarById: (req, res, next) => {
      let idCar = req.params.id;
      let cars = cars.filter((car) =>  car.id === idCar);
      console.log(cars);

      if(cars.length == 0) {
        res.status(404).json({ message: 'Nenhum carro encontrado!'})
      } else {
        res.status(200).json(cars)[0];
      }
    },
}
