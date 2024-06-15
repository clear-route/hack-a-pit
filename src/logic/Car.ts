import { Tyre } from "./Tyre";

class Car {
  constructor(public name: string) {}

  fuelLeft: number = 0;
  lastServiceTimestamp: number = 0;
  tyresSet: Tyre = [];
}
