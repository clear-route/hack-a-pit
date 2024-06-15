export class Driver {
  constructor(private name: string, private timeToExitRace: number) {
    this.name = name;
  }

  private healthLeft: number = 100;

  //TODO: Who holds this data? Race "rules" is what decides the max race time

  public getTimeToExitRace(): number {
    return this.timeToExitRace;
  }

  public getHealthLeft(): number {
    return this.healthLeft;
  }
}
