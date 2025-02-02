import { CsvFileReader } from "./composition/CsvFileReader";
import { MatchReader } from "./composition/MatchReader";
import { MatchResult } from "./MatchResult";

const csvReader = new CsvFileReader("football.csv");
const matchReader = new MatchReader(csvReader);

matchReader.load();
let manUnitedWins = 0;

for (let match of matchReader.matches) {
  if (match[1] === "Man United" && match[5] === MatchResult.HomeWin) {
    manUnitedWins++;
  } else if (match[2] === "Man United" && match[5] === MatchResult.AwayWin) {
    manUnitedWins++;
  }
}

console.log(`Manchester United win: ${manUnitedWins} games`);
