import { BusCreator } from "./creators/BusCreator";
import { CarCreator } from "./creators/CarCreator";
import { TruckCreator } from "./creators/TruckCreator";

const truck = new TruckCreator().create()
console.log(truck.move())
console.log(truck.stop())

const car = new CarCreator().create()
console.log(car.move())
console.log(car.stop())

const bus = new BusCreator().create()
console.log(bus.move())
console.log(bus.stop())
