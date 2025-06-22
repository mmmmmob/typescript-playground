class ArrayOfNumber {
  constructor(public collection: number[]) {}
  get(index: number): number {
    return this.collection[index];
  }
}

class ArrayOfString {
  constructor(public collection: string[]) {}
  get(index: number): string {
    return this.collection[index];
  }
}

// ? recreate as generics class
class ArrayOfAnything<T> {
  constructor(public collection: T[]) {}
  get(index: number): T {
    return this.collection[index];
  }
}

const example = new ArrayOfAnything<string>(["a", "b", "c"]);
console.log(example.get(3)); // 'c'
