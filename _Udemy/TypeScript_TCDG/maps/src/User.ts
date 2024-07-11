import { faker } from "@faker-js/faker";

// ! export != export default (TS usually doesn't use export default)
// export -> /import { }/ in another file
// export default -> /import ~~/ in another file with any alias
export class User {
  name: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.name.fullName();
    // object declaration above does not init the object, we have to manually create object under the constructor function
    this.location = {
      // use parseFloat() to convert string to number
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }
}
