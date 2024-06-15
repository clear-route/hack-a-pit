class Race {
  constructor(name: string) {
    this.name = name;
  }

  name: string;
  raceDate: Date = new Date();

  stint: number = 0;
  lapTimes: number[] = [];
  trackLength: number = 0;
  milesThroughLap: number = 0;
}
