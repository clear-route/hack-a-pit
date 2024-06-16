export class Driver {
  private racingTimeLeft: number;
  private healthLeft: number = 100;

  constructor(private name: string, private timeToExitRaceInMinutes: number) {
    this.name = name;
    this.racingTimeLeft = this.timeToExitRaceInMinutes;
  }

  public getHealthLeft(): number {
    return this.healthLeft;
  }

  public upHealthBy(amount: number): void {
    this.healthLeft =
      this.healthLeft + amount <= 100 ? this.healthLeft + amount : 100;
  }

  public reduceHealthBy(amount: number): void {
    this.healthLeft =
      this.healthLeft - amount >= 0 ? this.healthLeft - amount : 0;
  }

  public getDriverRemainingTimeInMinutes(): number {
    return this.racingTimeLeft;
  }

  public reduceRacingTimeLeftBy(amount: number): void {
    this.racingTimeLeft =
      this.racingTimeLeft - amount >= 0 ? this.racingTimeLeft - amount : 0;
  }

  public getDriverName(): string {
    return this.name;
  }
}
