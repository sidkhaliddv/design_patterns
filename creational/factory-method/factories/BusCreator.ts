import { Bus } from "../products/Bus";
import { Vehicle } from "../products/Vehicle";
import { Factory } from "./factory";

export class BusCreator extends Factory {
  create(): Vehicle {
    return new Bus();
  }
}