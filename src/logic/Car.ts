import { Tyre } from "./Tyre";

class Car {
  constructor(private name: string,  private driversList: []) {
    this.driversList = driversList;
  }
  fuelLeft: number = 100;


  lastServiceTimestamp: number = 0;
  tyresSet: Tyre = [];


}

