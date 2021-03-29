import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ResponceCurrentState} from '../../../models/responce-current-state';
import { Subscription} from 'rxjs';
import {UsStates} from '../../../shared/data.us.states';
import {ApiService} from '../../../services/api.service';
import {NgxSpinnerService} from 'ngx-spinner';
import {StateInfo} from '../../../models/states-info';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.scss']
})
export class StateComponent implements OnInit, OnDestroy {
  stateData: ResponceCurrentState;
  statesData: ResponceCurrentState[];
  private routeSub: Subscription;
  stateSub: Subscription;
  stateInfo: StateInfo;

  constructor(private route: ActivatedRoute,
              private spinner: NgxSpinnerService,
              private apiService: ApiService) {
  }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      if (params) {

        this.getStateData(params['id']);
      }
    });
  }

  getStateData(selectedId): void {
    this.getStatesData(selectedId);
    this.getStateInfo(selectedId);
  }

  getStatesData(selectedId): void {
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
        this.stateData = this.statesData.find(st => st.state === selectedId);

      }
    }).catch((e) => {
      console.error(e);
    });
  }

  getStateInfo(selectedId): void {
    // this.spinner.show();
    this.apiService.getStatesInfo().toPromise().then(res => {
      // this.spinner.hide();
      if (res) {
        let statesInfo = res.data.response;
        statesInfo = statesInfo.map(state => {
          state.state = UsStates.find(el => (el.abbreviation === state.state)).name;
          return state;
        });
        this.stateInfo = statesInfo.find(st => st.state === selectedId);


      }
    }).catch((e) => {
      console.error(e);
    });
  }


  getDate(inputData): any {
    const data = new Date(inputData);
    return data.toLocaleDateString('en-US');
  }

  ngOnDestroy(): void {
    this.routeSub.unsubscribe();
  }

}
