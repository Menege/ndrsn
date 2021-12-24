"use strict";

class Car {
  constructor() {
    this._brand = "";
    this._model = "";
    this._yearOfManufacturing = 0;
    this._maxSpeed = 0;
    this._maxFuelVolume = 0;
    this._fuelConsumption = 0;
    this._currentFuelVolume = 0;
    this._isStarted = false;
    this._mileage = 0;
  }

  set fuelConsumption(value) {
    if (value > 0) this._fuelConsumption = value;
    else throw new Error("Неправильное значение");
  }

  get fuelConsumption() {
    return this._fuelConsumption;
  }

  set maxFuelVolume(value) {
    if (value > 5 && value < 20) this._maxFuelVolume = value;
    else throw new Error("Неправильное значение");
  }

  get maxFuelVolume() {
    return this._maxFuelVolume;
  }

  set maxSpeed(value) {
    if (value > 100 && value < 300) this._maxSpeed = value;
    else throw new Error("Неправильное значение");
  }

  get maxSpeed() {
    return this._maxSpeed;
  }

  set brand(value) {
    if (value.length > 0 && value.length <= 50) this._brand = value;
    else throw new Error("Неправильное значение");
  }

  get brand() {
    return this._brand;
  }

  set model(value) {
    if (value.length > 0 && value.length <= 50) this._model = value;
    else throw new Error("Неправильное значение");
  }

  get model() {
    return this._model;
  }

  set yearOfManufacturing(value) {
    if (value > 1900 && value <= 2021) this._yearOfManufacturing = value;
    else throw new Error("Неправильное значение");
  }

  get yearOfManufacturing() {
    return this._yearOfManufacturing;
  }

  get currentFuelVolume() {
    return this._currentFuelVolume;
  }

  get isStarted() {
    return this._isStarted;
  }

  get mileage() {
    return this._mileage;
  }

  start = () => {
    if (this._isStarted) {
      throw new Error("Машина уже заведена");
    } else this._isStarted = true;
  };

  shutDownEngine = () => {
    if (this._isStarted) {
      throw new Error("Машина ещё не заведена");
    } else this._isStarted = false;
  };

  fillUpGasTank = (value) => {
    if (!+value || value <= 0)
      throw new Error("Неверное количество топлива для заправки");
    else if (this._currentFuelVolume + value > +this._maxFuelVolume)
      throw new Error("Топливный бак переполнен");
    else this._currentFuelVolume += value;
  };

  drive = (speed, hours) => {
    if (!+speed || speed <= 0) throw new Error("Неверная скорость");
    else if (!+hours || hours <= 0) throw new Error("Неверное количество часов");
    else if (speed > 300) throw new Error("Машина не может ехать так быстро");
    else if (!this._isStarted)
      throw new Error("Машина должна быть заведена, чтобы ехать");
    else if (
      speed * hours >
      (this._currentFuelVolume / this._fuelConsumption) * 100
    )
      throw new Error("Недостаточно топлива");
    else {
      this._currentFuelVolume -= (speed * hours) / this._fuelConsumption;
      this._mileage += speed * hours;
    }
  };
}

let carTown = new Car();
carTown.fuelConsumption = 10;
carTown.maxFuelVolume = 16;
carTown.maxSpeed = 250;
carTown.brand = "Mercedes";
carTown.model = "E200";
carTown.yearOfManufacturing = 1995;
carTown.fuelConsumption = 10;
carTown.start();
carTown.fillUpGasTank(15);
carTown.drive(40, 2);
console.log(carTown.brand)
console.log(carTown.model)
console.log(carTown.maxFuelVolume)
console.log(carTown.fuelConsumption)
console.log(carTown.maxSpeed)
console.log(carTown.yearOfManufacturing)
console.log(carTown.currentFuelVolume)
console.log(carTown.isStarted)
console.log(carTown.mileage)