import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../../services/api.service';
import {Observable} from 'rxjs';
import {NgxSpinnerService} from 'ngx-spinner';
import {ActivatedRoute} from '@angular/router';
import {CountryCurrentResponce} from '../../../models/country-current-responce';

@Component({
  selector: 'app-main-top',
  templateUrl: './main-top.component.html',
  styleUrls: ['./main-top.component.scss'],
})
export class MainTopComponent implements OnInit {
  countryData: CountryCurrentResponce;

  constructor(private apiService: ApiService,
              private spinner: NgxSpinnerService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.getStatesData();
    this.countryData = this.route.snapshot.data.countryData.data.response[0];
    console.log(this.countryData);
    this.getDate();

  }

  getStatesData(): void {
    this.spinner.show();
    this.apiService.getStatesData().toPromise().then(res => {
      this.spinner.hide();
      if (res) {
        console.log(res);
      }
    }).catch((e) => {
      console.error(e);
    });
  }

  getDate(): any {
    const data = new Date(this.countryData.dateChecked);
    return data.toLocaleDateString('en-US');
  }

}
