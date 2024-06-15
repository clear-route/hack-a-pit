import { Tyre } from "./Tyre";
import { Driver } from "./Driver";
import assert from "assert";

export class Car {
  constructor(private name: string, private driverList: Driver[]) {}

  private fuelLeft: number = 100;
  private currentDriver: Driver;

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

  private tyresSet: Tyre[] = [];

  public setTyresSet(): void {
    this.tyresSet = [
      new Tyre("soft1"),
      new Tyre("soft2"),
      new Tyre("soft3"),
      new Tyre("soft4"),
    ];
  }
}
