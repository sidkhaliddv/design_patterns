import { Vehicle } from "../products/Vehicle";

export abstract class Factory {
  abstract create(): Vehicle;
}
