import fs from "fs";

// ? this reader is now a generic reader without any references of MatchReader and can be reuse with any .csv
export class CsvFileReader {
  data: string[][] = [];
  constructor(public filename: string) {}
  read(): void {
    this.data = fs
      .readFileSync(this.filename, { encoding: "utf-8" })
      .split("\n")
      .map((row: string): string[] => {
        return row.split(",");
      });
  }
}
