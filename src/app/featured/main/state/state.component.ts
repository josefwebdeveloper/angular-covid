import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {switchMap} from 'rxjs/operators';
import {ResponceCurrentState} from '../../../models/responce-current-state';
import {Subscription} from 'rxjs';
import {DataService} from '../../../services/data.service';
import {UsStates} from '../../../shared/data.us.states';
import {ApiService} from '../../../services/api.service';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.scss']
})
export class StateComponent implements OnInit, OnDestroy {
  stateData: ResponceCurrentState;
  statesData: ResponceCurrentState[];
  private routeSub: Subscription;

  constructor(private route: ActivatedRoute,
              private spinner: NgxSpinnerService,
              private apiService: ApiService) {
  }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      if (params) {
        console.log(params); //log the entire params object
        console.log(params['id']); //log the value of id
        this.getStatesData(params['id']);
        this.getStatesDaily();
      }
    });
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
        console.log(this.statesData);
        this.stateData = this.statesData.find(st => st.state === selectedId);

      }
    }).catch((e) => {
      console.error(e);
    });
  }

  getStatesDaily(): void {
    // this.spinner.show();
    this.apiService.getStatesData().toPromise().then(res => {
      // this.spinner.hide();
      if (res) {
        console.log(res);
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
