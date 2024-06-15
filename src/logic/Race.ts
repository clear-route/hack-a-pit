class Race {
  constructor(name: string, maxHoursPerDriver: number, maxNumberOfChangedTyres: number) {
    this.name = name;
    this.maxHoursPerDriver = maxHoursPerDriver;
    this.maxNumberOfChangedTyres = maxNumberOfChangedTyres;
  }

  name: string;
  maxHoursPerDriver
  raceDate: Date = new Date();

  name: string;
  maxHoursPerDriver: number;
  raceDate: Date = new Date();

  stint: number = 0;
  lapTimes: number[] = [];
  trackLength: number = 0;
  milesThroughLap: number = 0;

  calculateStintTime(totalRaceTime: number, numberOfDrivers: number): number {
    return totalRaceTime / numberOfDrivers;
  }
}


