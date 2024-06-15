export class Race {
  private static instance: Race;

  public raceDate: Date = new Date();
  private stintMinutes: number = 0;
  private lapTimes: number[] = [];
  private trackLength: number = 0;
  private milesThroughLap: number = 0;

  // Private Constructor for Singleton
  private constructor(
    private name: string,
    private maxHoursPerDriver: number,
    private maxNumberOfChangedTyres: number
  ) {
    this.name = name;
    this.maxHoursPerDriver = maxHoursPerDriver;
    this.maxNumberOfChangedTyres = maxNumberOfChangedTyres;
  }

  // Get Singleton Instance
  public static getInstance(
    name: string,
    maxHoursPerDriver: number,
    maxNumberOfChangedTyres: number
  ): Race {
    if (!Race.instance) {
      Race.instance = new Race(
        name,
        maxHoursPerDriver,
        maxNumberOfChangedTyres
      );
    }
    return Race.instance;
  }

  public getStintMinutes(): number {
    return this.stintMinutes;
  }
  public setStintMinutes(value: number) {
    this.stintMinutes = value;
  }

  public calculateStintTime(
    totalRaceTime: number,
    numberOfDrivers: number
  ): number {
    return totalRaceTime / numberOfDrivers;
  }
}
