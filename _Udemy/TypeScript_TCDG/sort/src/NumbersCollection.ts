import { Sorter } from "./Sorter";

export class NumberCollection extends Sorter {
  constructor(public data: number[]) {
    super();
  }

  // use get keyword == don't have to call it as a method
  get length(): number {
    return this.data.length;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex] > this.data[rightIndex];
  }

  swap(leftIndex: number, rightIndex: number): void {
    const leftHand = this.data[leftIndex];
    this.data[leftIndex] = this.data[rightIndex];
    this.data[rightIndex] = leftHand;
  }
}
