import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../../services/api.service';
import {Observable} from 'rxjs';
import {NgxSpinnerService} from 'ngx-spinner';
import {ActivatedRoute} from '@angular/router';
import {CountryCurrentResponce} from '../../../models/country-current-responce';
import {ResponceCurrentState} from '../../../models/responce-current-state';
import {UsStates} from '../../../shared/data.us.states';
import {DataService} from '../../../services/data.service';

@Component({
  selector: 'app-main-top',
  templateUrl: './main-top.component.html',
  styleUrls: ['./main-top.component.scss'],
})
export class MainTopComponent implements OnInit {
  countryData: CountryCurrentResponce;
  statesData: ResponceCurrentState[];

  constructor(private apiService: ApiService,
              private spinner: NgxSpinnerService,
              private route: ActivatedRoute,
              private dataService: DataService) {
  }

  ngOnInit(): void {
    this.getStatesData();
    this.countryData = this.route.snapshot.data.countryData.data.response[0];
    console.log(this.countryData);

  }

  getStatesData(): void {
    this.spinner.show();
    this.apiService.getStatesData().toPromise().then(res => {
      this.spinner.hide();
      if (res) {
        console.log(res);
        this.statesData = res.data.response;
        this.statesData = this.statesData.map(state => {
          state.total = state.positive + state.negative;
          state.state = UsStates.find(el => (el.abbreviation === state.state)).name;
          state.dateChecked = this.getDate(state.dateChecked);
          return state;
        });
        console.log(this.statesData);
        this.dataService.setStatesData(this.statesData);
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
