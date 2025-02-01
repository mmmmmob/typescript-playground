import fs from "fs";
import { MatchResult } from "./MatchResult";

// ? create abstract class with generic type to be reusable with different type of return type
export abstract class CsvFileReader<T> {
  data: T[] = [];
  constructor(public filename: string) {}
  abstract mapRow(row: string[]): T;
  read(): void {
    this.data = fs
      .readFileSync(this.filename, { encoding: "utf-8" })
      .split("\n")
      .map((row: string): string[] => {
        return row.split(",");
      })
      // convert a row as a set of managable data types
      .map(this.mapRow);
  }
}
