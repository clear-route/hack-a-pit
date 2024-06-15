export class Driver {
  constructor(private name: string, private timeToExitRaceInMiutes: number) {
    this.name = name;
  }

  private healthLeft: number = 100;

  //TODO: Who holds this data? Race "rules" is what decides the max race time

  public getTimeToExitRaceInMiutes(): number {
    return this.timeToExitRaceInMiutes;
  }

  public getHealthLeft(): number {
    return this.healthLeft;
  }
}
