import { Tyre } from "./Tyre";
import { Driver } from "./Driver";
import assert from "assert";

export class Car {
  private fuelLeft: number = 100;
  private lastServiceTimestamp: number = Date.now();

  private tyresSet: Tyre[] = [];

  constructor(
    private carName: string,
    private driversList: Driver[],
    private currentDriver: Driver
  ) {}

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
