import { Driver } from "../logic/Driver"
import { Tyre } from "../logic/Tyre"


function stint_time(
    current_driver: Driver,
    current_tyre: Tyre,
    max_laps: number,
    optimal_time: number,
    driver_rate: number,
    tyre_rate: number,
    fuel_rate: number): number {

    let stint_time: number = 0;
    let driver_health: number = current_driver.getHealthLeft() / 100;
    let tyre_health: number = current_tyre.getHealthLeft() / 100;
    let base_time: number = optimal_time + (1 - driver_health) + (1 - tyre_health)

    let current_lap: number = 0;
    while (current_lap <= max_laps) {
        let time: number = base_time + driver_rate*current_lap + tyre_rate*current_lap + fuel_rate*(max_laps - current_lap);
        stint_time += time;
        current_lap += 1;
    }

    let driver_energy_loss: number = Math.ceil(((current_lap - 1) * driver_rate) * 100);
    let tyre_deg: number = Math.ceil(((current_lap - 1) * tyre_rate) * 100);
    current_driver.upHealthLeftBy(driver_energy_loss);
    current_tyre.reduceTyreHealthBy(tyre_deg)
    console.log(current_driver.getHealthLeft());
    console.log(current_tyre.getHealthLeft());

    return Math.ceil(stint_time);
}

let driver1: Driver = new Driver("driver1", 1);
let tyres1: Tyre = new Tyre("dry");

console.log(stint_time(driver1, tyres1, 12, 220, 0.05, 0.2, 0.1))



