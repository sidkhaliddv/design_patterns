import { Vehicle } from "./Vehicle";

export class Car implements Vehicle {
  move(): string {
    return 'car is moving'
  }
  
  stop(): string {
    return 'car has stopped'
  }
}
