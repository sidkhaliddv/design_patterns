import { Truck } from "../products/Truck";
import { Vehicle } from "../products/Vehicle";
import { Factory } from "./factory";

export class TruckCreator extends Factory {
  create(): Vehicle {
    return new Truck();
  }
}
