import { WinAnalysis } from "./analyzers/WinAnalysis";
import { MatchData } from "./MatchData";
import { HtmlReport } from "./reportTargets/HtmlReport";

export interface Analyzer {
  run(matches: MatchData[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}

export class Summary {
  // ? use static method to return value w/o creating instances
  static winAnalysisWithHtmlReport(team: string, data: MatchData[]) {
    const summary = new Summary(
      new WinAnalysis(team),
      new HtmlReport(`${team}Report`)
    );
    return summary.buildAndPrintReport(data);
  }

  constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}

  buildAndPrintReport(matches: MatchData[]): void {
    const output = this.analyzer.run(matches);
    this.outputTarget.print(output);
  }
}
