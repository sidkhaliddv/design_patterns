import { BusCreator } from "./factories/BusCreator";
import { CarCreator } from "./factories/CarCreator";
import { TruckCreator } from "./factories/TruckCreator";

const truck = new TruckCreator().create()
console.log(truck.move())
console.log(truck.stop())

const car = new CarCreator().create()
console.log(car.move())
console.log(car.stop())

const bus = new BusCreator().create()
console.log(bus.move())
console.log(bus.stop())
