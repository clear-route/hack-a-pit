import { Driver } from "./Driver";

/* 
Returns a new Driver for the car, updates all previous drivers' health.
params: lastStintLength: number, currentDriver: Driver, driversList: Driver[]
returns: Driver to be used next
 */
export function swapDriver(
  lastStintLength: number,
  currentDriver: Driver,
  driversList: Driver[]
): Driver {
  driversList.forEach((element) => {
    while (element !== currentDriver) {
      element.upHealthLeftBy(lastStintLength / 10); //TODO: Refine Logic: health goes up as per rested time (lastStintLength of latest stint runtime)
    }
  });

  let driverWithHighestHealth: Driver = driversList.reduce((prev, current) =>
    prev.getHealthLeft() > current.getHealthLeft() ? prev : current
  );

  return driverWithHighestHealth;
}
