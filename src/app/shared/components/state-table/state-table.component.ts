import {Component, Input, OnInit} from '@angular/core';
import {ResponceCurrentState} from '../../../models/responce-current-state';
import {MatTableDataSource} from '@angular/material/table';
import {Router} from '@angular/router';

@Component({
  selector: 'app-state-table',
  templateUrl: './state-table.component.html',
  styleUrls: ['./state-table.component.scss']
})
export class StateTableComponent implements OnInit {
  displayedColumns = ['firstCol', 'negative', 'Pending', 'CurrentlyHosp', 'CumulativeHosp', 'CurrentlyICU', 'CumulativeICU',
    'CurrentlyVent', 'CumulativeVent', 'Recovered', 'Deaths', 'PositiveNegative'
  ];
  dataSource: MatTableDataSource<ResponceCurrentState>;
  @Input() stateData: ResponceCurrentState;

  constructor(
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource([this.stateData]);
  }

  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }


  navigateToState(): void {
    const url = '/covid';
    this.router.navigate([url, this.stateData.state]);
  }


}
