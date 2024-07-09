const profile = {
  name: "Alex",
  age: 20,
  coords: {
    lat: 0,
    lng: 15,
  },
  setAge(age: number): void {
    this.age = age;
  },
};

profile.setAge(45);

// derive value with destructuring syntax
const { age }: { age: number } = profile;
// or if we want more than one key-value with destructuring
// const { age, name }: { age: number, name: string } = profile

// what about another key-value inside the object?
const {
  coords: { lat, lng },
}: { coords: { lat: number; lng: number } } = profile;

console.log(age);
