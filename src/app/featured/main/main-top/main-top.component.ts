import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../../services/api.service';
import {Observable} from 'rxjs';
import {NgxSpinnerService} from 'ngx-spinner';
import {ActivatedRoute} from '@angular/router';
import {CountryCurrentResponce} from '../../../models/country-current-responce';
import {ResponceCurrentState} from '../../../models/responce-current-state';
import {UsStates} from '../../../shared/data.us.states';
import {DataService} from '../../../services/data.service';
import {MatDialog} from '@angular/material/dialog';
import {DialogGraphComponent} from '../../../shared/components/dialog-graph/dialog-graph.component';
import {UsDailyRes} from '../../../models/us-daily';
import {Series} from '../../../models/seruis';

@Component({
  selector: 'app-main-top',
  templateUrl: './main-top.component.html',
  styleUrls: ['./main-top.component.scss'],
})
export class MainTopComponent implements OnInit {
  countryData: CountryCurrentResponce;
  statesData: ResponceCurrentState[];
  usDaily: UsDailyRes[];
  usDailyForChart;
  value = '';

  constructor(private apiService: ApiService,
              private spinner: NgxSpinnerService,
              private route: ActivatedRoute,
              public dialog: MatDialog,
              private dataService: DataService) {
  }

  ngOnInit(): void {
    this.getStatesData();
    this.getUsDaily();
    this.countryData = this.route.snapshot.data.countryData.data.response[0];

  }

  openDialog(): void {
    this.dialog.open(DialogGraphComponent, {
      restoreFocus: false,
      data: {
        usDailyForChart: this.usDailyForChart
      },

    });
  }

  getStatesData(): void {
    this.spinner.show();
    this.apiService.getStatesData().toPromise().then(res => {
      this.spinner.hide();
      if (res) {
        this.statesData = res.data.response;
        this.statesData = this.statesData.map(state => {
          state.total = state.positive + state.negative;
          state.state = UsStates.find(el => (el.abbreviation === state.state)).name;
          state.dateChecked = this.getDate(state.dateChecked);
          return state;
        });
        this.dataService.setStatesData(this.statesData);
      }
    }).catch((e) => {
      console.error(e);
    });
  }

  getUsDaily(): void {
    // this.spinner.show();
    this.apiService.getUsDaily().toPromise().then(res => {
      // this.spinner.hide();
      if (res) {
        this.usDaily = res.data.response;
        const negative = [];
        const positive = [];
        this.usDaily.forEach(el => {
          el.negative && el.dateChecked ? negative.push({value: el.negative, name: el.dateChecked}) : null;
          el.positive && el.dateChecked ? positive.push({value: el.positive, name: el.dateChecked}) : null;
        });
        this.usDailyForChart = [{name: 'negative', series: negative}, {name: 'positive', series: positive}];
      }
    }).catch((e) => {
      console.error(e);
    });
  }

  getDate(inputData): any {
    if (inputData) {
      const data = new Date(inputData);
      return data.toLocaleDateString('en-US');
    } else {
      const data = new Date(this.countryData.dateChecked);
      return data.toLocaleDateString('en-US');
    }
  }


}
