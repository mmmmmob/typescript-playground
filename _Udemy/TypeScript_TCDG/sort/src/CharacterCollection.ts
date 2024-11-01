export class CharacterCollection {
  constructor(public data: string) {}

  get length() {
    return this.data.length;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return (
      // toLowerCase to compare value of ASCII
      this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase()
    );
  }

  swap(leftIndex: number, rightIndex: number): void {
    const charArray = this.data.split("");
    const leftHand = charArray[leftIndex];
    charArray[leftIndex] = charArray[rightIndex];
    charArray[rightIndex] = leftHand;

    this.data = charArray.join("");
  }
}
