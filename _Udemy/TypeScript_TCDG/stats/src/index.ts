import { CsvFileReader } from "./composition/CsvFileReader";
import { MatchReader } from "./composition/MatchReader";
import { Summary } from "./Summary";

const csvReader = new CsvFileReader("football.csv");
const matchReader = new MatchReader(csvReader);
matchReader.load();

// const summary = new Summary(
//   new WinAnalysis("Man United"),
//   new HtmlReport("ManUnitedReport")
// );

// summary.buildAndPrintReport(matchReader.matches);

Summary.winAnalysisWithHtmlReport("Man United", matchReader.matches);
