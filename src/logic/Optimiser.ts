import { Driver } from "./Driver";
import { Car } from "./Car";
import { Race } from "./race";

// Set Race
let raceName = "Le Mans";
let maxHoursPerDriver = 240;
let maxNumberOfChangedTyres = 56;
let raceDuration = 60;

let currentRace: Race = Race.getInstance(
  raceName,
  maxHoursPerDriver,
  maxNumberOfChangedTyres,
  raceDuration
);

let raceDriverTimeLimit = currentRace.getmaxHoursPerDriver();

// setDrivers
let driver1 = new Driver("Driver 1", raceDriverTimeLimit);
let driver2 = new Driver("Driver 2", raceDriverTimeLimit);
let driver3 = new Driver("Driver 3", raceDriverTimeLimit);
let driver4 = new Driver("Driver 4", raceDriverTimeLimit);

let currentDriver = driver1;

// setCars
let car1 = new Car(
  "Car 1",
  [driver1, driver2, driver3, driver4],
  currentDriver
);

// Migth delete this
car1.setLastServiceTimestamp();

// Upon Driver Change:
// Set the current driver
// TODO: BUT CHECK HOW MUCH RACE TIME THE DRIVER HAS LEFT FIRST?
// Set the last service timestamp, etc

// Upon Tyre Change:
// Set the new tyres set
// Set the last service timestamp, etc
// TODO: Update the number of tyre changes left !!!

//TODO: Create Expected Laps Count?

// Upon Fuel Burn:
// Set the fuel left

// Upon Stint Time:
// Set the stint time

// Upon Health Left:
// Set the health left

// Upon
