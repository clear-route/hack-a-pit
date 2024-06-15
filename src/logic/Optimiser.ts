import { Driver } from "./Driver";
import { Car } from "./Car";
import { Race } from "./race";

// Carries out the logic of the simulation

// // The simulation
// constructor() {
//   this.simulation = new Simulation();
// }
// // Run the simulation
// run() {
//   this.simulation.run();
// }

// Set Race
let currentRace: Race = Race.getInstance("Le Mans", 240, 56);

let maxHoursPerDriver = currentRace.getmaxHoursPerDriver();

// setDrivers
let driver1 = new Driver("Driver 1", maxHoursPerDriver);
let driver2 = new Driver("Driver 2", maxHoursPerDriver);
let driver3 = new Driver("Driver 3", maxHoursPerDriver);
let driver4 = new Driver("Driver 4", maxHoursPerDriver);

// setCars
let car1 = new Car("Car 1", [driver1, driver2, driver3, driver4], driver1);

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
