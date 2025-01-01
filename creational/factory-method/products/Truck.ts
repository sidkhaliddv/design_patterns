import { Vehicle } from "./Vehicle";

export class Truck implements Vehicle {
  move(): string {
    return 'Truck is moving'
  }
  
  stop(): string {
    return 'Truck has stopped'
  }
}
