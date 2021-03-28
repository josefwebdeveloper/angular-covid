export interface ResponceCurrentState {
  date: number;
  state: string;
  positive: number;
  probableCases?: number;
  negative?: number;
  pending?: number;
  totalTestResultsSource: string;
  totalTestResults: number;
  hospitalizedCurrently?: number;
  hospitalizedCumulative?: number;
  inIcuCurrently?: number;
  inIcuCumulative?: number;
  onVentilatorCurrently?: number;
  onVentilatorCumulative?: number;
  recovered?: number;
  lastUpdateEt: string;
  dateModified?: Date;
  checkTimeEt: string;
  death: number;
  hospitalized?: number;
  hospitalizedDischarged?: number;
  dateChecked?: Date;
  totalTestsViral?: number;
  positiveTestsViral?: number;
  negativeTestsViral?: number;
  positiveCasesViral?: number;
  deathConfirmed?: number;
  deathProbable?: number;
  totalTestEncountersViral?: number;
  totalTestsPeopleViral?: number;
  totalTestsAntibody?: number;
  positiveTestsAntibody?: number;
  negativeTestsAntibody?: number;
  totalTestsPeopleAntibody?: number;
  positiveTestsPeopleAntibody?: number;
  negativeTestsPeopleAntibody?: number;
  totalTestsPeopleAntigen?: number;
  positiveTestsPeopleAntigen?: number;
  totalTestsAntigen?: number;
  positiveTestsAntigen?: number;
  fips: string;
  positiveIncrease: number;
  negativeIncrease: number;
  total: number;
  totalTestResultsIncrease: number;
  posNeg: number;
  dataQualityGrade?: any;
  deathIncrease: number;
  hospitalizedIncrease: number;
  hash: string;
  commercialScore: number;
  negativeRegularScore: number;
  negativeScore: number;
  positiveScore: number;
  score: number;
  grade: string;
}

export interface Data {
  response: Response[];
  statusText: string;
}

export interface RootObject {
  data: Data;
}
