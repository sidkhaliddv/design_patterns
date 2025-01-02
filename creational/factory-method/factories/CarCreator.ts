import { Car } from "../products/Car";
import { Vehicle } from "../products/Vehicle";
import { Factory } from "./factory";

export class CarCreator extends Factory {
  create(): Vehicle {
    return new Car();
  }
}