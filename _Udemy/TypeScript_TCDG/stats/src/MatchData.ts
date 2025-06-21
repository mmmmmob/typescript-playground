import { MatchResult } from "./MatchResult";

// ? using Tuples to declare a type of array which has a specific type for each member inside in a specific order
export type MatchData = [
  Date,
  string,
  string,
  number,
  number,
  MatchResult,
  string
];
