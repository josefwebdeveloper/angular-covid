export interface UsDailyRes {
  date: number;
  states: number;
  positive?: number;
  negative?: number;
  pending?: number;
  hospitalizedCurrently?: number;
  hospitalizedCumulative?: number;
  inIcuCurrently?: number;
  inIcuCumulative?: number;
  onVentilatorCurrently?: number;
  onVentilatorCumulative?: number;
  dateChecked: string;
  death?: number;
  hospitalized?: number;
  totalTestResults: number;
  lastModified: string;
  recovered?: any;
  total: number;
  posNeg: number;
  deathIncrease: number;
  hospitalizedIncrease: number;
  negativeIncrease: number;
  positiveIncrease: number;
  totalTestResultsIncrease: number;
  hash: string;
}

export interface Data {
  response: Response[];
  statusText: string;
}

export interface RootObject {
  data: Data;
}

export interface Data {
  response: Response[];
  statusText: string;
}

export interface RootObject {
  data: Data;
}

