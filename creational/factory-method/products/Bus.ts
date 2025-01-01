import { Vehicle } from "./Vehicle";

export class Bus implements Vehicle {
  move(): string {
    return 'Bus is moving'
  }
  stop(): string {
    return 'Bus has stopped'
  }
}
