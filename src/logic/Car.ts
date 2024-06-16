import { Tyre } from "./Tyre";
import { Driver } from "./Driver";
import assert from "assert";

export class Car {
  private fuelLeft: number = 100;
  private lastServiceTimestamp: number = Date.now();
  private tyresSet: Tyre[] = [];

  public constructor(
    private carName: string,
    private driversList: Driver[],
    private currentDriver: Driver
  ) {
    this.carName = carName;
    this.driversList = driversList;
    this.currentDriver = currentDriver;
  }

  public getLastServiceTimestamp(): number {
    return this.lastServiceTimestamp;
  }
  public setLastServiceTimestamp(): void {
    this.lastServiceTimestamp = Date.now();
  }

  public setCurrentDriver(driver: Driver): void {
    this.currentDriver = driver;
  }

  public getCurrentDriver(): Driver {
    return this.currentDriver;
  }

  public getCarName(): string {
    return this.carName;
  }

  public getDriversList(): Driver[] {
    return this.driversList;
  }

  public getFuelLeft(): number {
    return this.fuelLeft;
  }

  public burnFuelBy(amount: number): void {
    assert(amount < this.getFuelLeft(), "Ammout musst be less than fuel left.");
    this.fuelLeft = this.fuelLeft - amount;
  }

  public setNewTyresSet(): void {
    this.tyresSet = [
      new Tyre("soft1"),
      new Tyre("soft2"),
      new Tyre("soft3"),
      new Tyre("soft4"),
    ];
  }
}
