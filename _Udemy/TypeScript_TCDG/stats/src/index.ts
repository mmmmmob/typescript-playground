import { WinAnalysis } from "./analyzers/WinAnalysis";
import { CsvFileReader } from "./composition/CsvFileReader";
import { MatchReader } from "./composition/MatchReader";
import { ConsoleReport } from "./reportTargets/ConsoleReport";
import { Summary } from "./Summary";

const csvReader = new CsvFileReader("football.csv");
const matchReader = new MatchReader(csvReader);
matchReader.load();

const summary = new Summary(new WinAnalysis("Man United"), new ConsoleReport());

summary.buildAndPrintReport(matchReader.matches);
