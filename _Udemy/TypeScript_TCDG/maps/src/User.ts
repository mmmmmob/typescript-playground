import { faker } from "@faker-js/faker";
import { Mappable } from "./CustomMap";

// ! export != export default (TS usually doesn't use export default)
// export -> /import { }/ in another file
// export default -> /import ~~/ in another file with any alias
export class User implements Mappable {
  // /implements/ helps us directly show an error at the source of where to correct it
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  color: string;

  constructor() {
    this.name = faker.name.fullName();
    // object declaration above does not init the object, we have to manually create object under the constructor function
    this.location = {
      // use parseFloat() to convert string to number
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  markerContent(): string {
    return `<h2>Customer: ${this.name}</h2>`;
  }
}
