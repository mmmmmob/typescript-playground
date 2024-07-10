interface Reportable {
  /*
  name: string;
  year: Date;
  isBroken: boolean;
  */
  // Reportable interface only check if the object passed in satisfied the rule or not?
  summary(): string; // function that expect to return a string
}

// this object satisfied the Vehicle interface rules
const oldCivic = {
  // we can insert more value into the object and it's still satisfied the interface rule
  name: "Civic",
  year: new Date(),
  isBroken: true,
  summary(): string {
    return `
    Name: ${this.name}
    Year: ${this.year}
    Broken?: ${this.isBroken}
    `;
  },
};

const printSummary = (item: Reportable): void => {
  console.log(item.summary());
};

printSummary(oldCivic);
