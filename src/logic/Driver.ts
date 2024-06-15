class Driver {
  constructor(name: string) {
    this.name = name;
  }

  name: string = "";

  healthLeft: number = 100;

  //Who holds this data? Race "rules" is what decides the max race time
  timeToExitRace: number = 0;
}
