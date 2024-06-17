import { Car } from "./Car";
import { Driver } from "./Driver";
import { Tyre } from "./Tyre";

/* 
Returns a new Driver for the car, updates all previous drivers' health.
params: lastStintLength: number, currentDriver: Driver, driversList: Driver[]
returns: Driver to be used next
 */
function swapDriver(
  lastStintLength: number,
  currentDriver: Driver,
  driversList: Driver[]
): Driver {
  driversList.forEach((element) => {
    while (element !== currentDriver) {
      element.upHealthBy(lastStintLength / 10); //TODO: Refine Logic: health goes up as per rested time (lastStintLength of latest stint runtime)
    }
  });

  let driverWithHighestHealth: Driver = driversList.reduce((prev, current) =>
    prev.getHealthLeft() > current.getHealthLeft() ? prev : current
  );

  return driverWithHighestHealth;
}

function burnFuel(lapsCount: number, fuelBurnRate: number, car: Car) {
  car.burnFuelBy(lapsCount * fuelBurnRate);
}

function degradeTyres(lapsCount: number, tyreDegRate: number, tyreSet: Tyre[]) {
  tyreSet.forEach((element) => {
    element.reduceTyreHealthBy(lapsCount * tyreDegRate);
  });
}

export { swapDriver, burnFuel, degradeTyres };
