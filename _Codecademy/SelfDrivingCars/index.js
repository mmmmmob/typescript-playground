"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const computer_vision_1 = require("./computer-vision");
// CLASS
class Car {
    constructor(props) {
        this.steeringControl = undefined;
        this.isRunning = props.isRunning;
        this.steeringControl = props.steeringControl;
    }
    respond(events) {
        if (!this.isRunning) {
            console.log("The car is off.");
        }
        else {
            Object.keys(events).forEach((eventKey) => {
                if (!eventKey) {
                    return;
                }
                else if (eventKey === "ObstacleLeft") {
                    this.steeringControl.turn("right");
                }
                else if (eventKey === "ObstacleRight") {
                    this.steeringControl.turn("left");
                }
            });
        }
    }
}
class SteeringControl {
    execute(command) {
        console.log(`Executing ${command}`);
    }
    turn(direction) {
        this.execute(`turn ${direction}`);
    }
}
// EXECUTE
let steering = new SteeringControl();
let autonomousCar = new Car({ isRunning: true, steeringControl: steering });
autonomousCar.respond((0, computer_vision_1.getObstacleEvents)());
