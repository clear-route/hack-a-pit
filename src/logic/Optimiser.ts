// Carries out the logic of the simulation
class Optimiser {
    constructor() {
        this.simulation = new Simulation();
    }
    // Run the simulation
    run() {
        this.simulation.run();
    }


    //  a Race is created "Le Mans", 
    // Race rules are entered (?)
        // RaceTime for Driver
        // Number of tyre changes allowed by the race
    // The Race has a Car
        // The Car has a Driver(s)

    // A Driver is created with:
        // Name
        // Hours Raced so Far (?)
        // Health ininitialised at 100
        // etc

        

    


    let car1 = new Car("Car 1");
    car1.fuelLeft = 100;
    car1.lastServiceTimestamp = Date.now();
    car1.tyresSet = [new Tyre("Type 1", 0), new Tyre("Type 2", 0)];
    
}