import { MatchResult } from "./MatchResult";
import { dateStringToDate } from "./utils";

// ? DataReader to be using in MatchReader always has to have these structure (which CsvReader has right now)
interface DataReader {
  read(): void;
  data: string[][];
}

// ? using Tuples to declare a type of array which has a specific type for each member inside in a specific order
type MatchData = [Date, string, string, number, number, MatchResult, string];

export class MatchReader {
  matches: MatchData[] = [];
  // ? load DataReader when launch a new instance
  constructor(public reader: DataReader) {}
  load(): void {
    this.reader.read();
    // ? convert a row as a set of managable data types and store it in a match property when load() is called
    this.matches = this.reader.data.map((row: string[]): MatchData => {
      return [
        dateStringToDate(row[0]),
        row[1],
        row[2],
        parseInt(row[3]),
        parseInt(row[4]),
        row[5] as MatchResult,
        row[6],
      ];
    });
  }
}
