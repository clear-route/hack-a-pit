export class Driver {
  private driverRemainingTimeInMinutes: number;
  private healthLeft: number = 100;

  constructor(private name: string, private timeToExitRaceInMiutes: number) {
    this.name = name;
    this.driverRemainingTimeInMinutes = this.timeToExitRaceInMiutes;
  }

  public getHealthLeft(): number {
    return this.healthLeft;
  }

  public upHealthLeftBy(amount: number): void {
    this.healthLeft =
      this.healthLeft + amount <= 100 ? this.healthLeft + amount : 100;
  }

  public getDriverRemainingTimeInMinutes(): number {
    return this.driverRemainingTimeInMinutes;
  }
}
