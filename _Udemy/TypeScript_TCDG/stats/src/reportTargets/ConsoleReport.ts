import { OutputTarget } from "../Summary";

export class ConsoleReport implements OutputTarget {
  constructor(public report: string) {}
  print() {
    console.log(this.report);
  }
}
