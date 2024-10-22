import { getObstacleEvents } from "./computer-vision";

// INTERFACES
interface AutonomousCar {
  isRunning?: boolean;
  respond: (events: Events) => void;
}

interface AutonomousCarProps {
  isRunning?: boolean;
  steeringControl: Steering;
}

interface Events {
  [obstacles: string]: boolean;
}

interface Control {
  execute: (command: string) => void;
}

interface Steering extends Control {
  turn: (direction: string) => void;
}

// CLASS
class Car implements AutonomousCar {
  isRunning;
  steeringControl = undefined;
  constructor(props: AutonomousCarProps) {
    this.isRunning = props.isRunning;
    this.steeringControl = props.steeringControl;
  }
  respond(events: Events) {
    if (!this.isRunning) {
      console.log("The car is off.");
    } else {
      Object.keys(events).forEach((eventKey) => {
        if (!eventKey) {
          return;
        } else if (eventKey === "ObstacleLeft") {
          this.steeringControl.turn("right");
        } else if (eventKey === "ObstacleRight") {
          this.steeringControl.turn("left");
        }
      });
    }
  }
}

class SteeringControl implements Steering {
  execute(command: string) {
    console.log(`Executing ${command}`);
  }
  turn(direction: string) {
    this.execute(`turn ${direction}`);
  }
}

// EXECUTE
let steering = new SteeringControl();
let autonomousCar = new Car({ isRunning: true, steeringControl: steering });
autonomousCar.respond(getObstacleEvents());
