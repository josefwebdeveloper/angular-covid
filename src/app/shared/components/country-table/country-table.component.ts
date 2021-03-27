import {Component, Input, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {CountryCurrentResponce} from '../../../models/country-current-responce';


@Component({
  selector: 'app-country-table',
  templateUrl: './country-table.component.html',
  styleUrls: ['./country-table.component.scss']
})
export class CountryTableComponent implements OnInit {
  // displayedColumns = ['Cases*', 'TestsNegative', 'Pending', 'Hospitalized*\n Currently',
  //   'Outcomes\n Recovered', '\n Deaths', 'Total Test Results\n Positive + Negative'];
  displayedColumns = ['firstCol', 'TestsNegative', 'Pending', 'Currently', 'Recovered', 'Deaths', 'PosNeg'];
  dataSource: MatTableDataSource<CountryCurrentResponce>;
  @Input() countryData: CountryCurrentResponce;

  constructor() {
  }

  ngOnInit(): void {
    this.countryData.total = this.getTotal();
    this.dataSource = new MatTableDataSource([this.countryData]);
  }

  getTotal(): number {
    const result = this.countryData.positive + this.countryData.negative;
    return result;
  }

}
