//this includes the vehicle class as a module
const VehicleModule = require("./vehicleBaseClass")

class Car extends VehicleModule {
    constructor(make, model, year, color, mileage) {
        super(make, model, year, color, mileage);
        this.maxPassengers = 5;
        this.passenger = 0;
        this.numberOhWheels = 4;
        this.maxSpeed = 160;
        this.fuel = 10;
        this.scheduleService = false;
    }

    checkService() {
        if (this.mileage > 30000) {
            this.scheduleService = true
            return this.scheduleService;
        }
    }

    start() {
        if (this.fuel > 0) {
            console.log("engine has started.");
            return this.started = true
        } else {
            console.log("no fuel");
            return this.started = false;
        }
    }

    loadPassenger(num) {
        if (this.passenger < this.maxPassengers) {
        if ((num + this.passenger) <= this.maxPassengers) {
            this.passenger = num;
            return this.passenger;
        } else {
            console.log(this.model + "" + this.make + " not have enough seats for all of the passengers.");

        }
    } else {
        console.log(thismodel + "" + this.make + "is full"); 
    }

    }

}
//this shows how to call from this module...
let myV = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "blue", "30000");

myV.start()
myV.loadPassenger(5)
myV.stop()
myV.checkService()
console.log(myV)
