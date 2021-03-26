import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../../services/api.service';
import {Observable} from 'rxjs';
import {NgxSpinnerService} from 'ngx-spinner';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-main-top',
  templateUrl: './main-top.component.html',
  styleUrls: ['./main-top.component.scss'],
})
export class MainTopComponent implements OnInit {
  countryData: any;

  constructor(private apiService: ApiService,
              private spinner: NgxSpinnerService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    // this.getCountryData();
    this.countryData = this.route.snapshot.data.countryData.data.response[0];
    console.log(this.countryData);
  }

  getCountryData(): void {
    this.spinner.show();
    this.apiService.getCountryData().toPromise().then(res => {
      this.spinner.hide();
      if (res) {
        console.log(res);
      }
    }).catch((e) => {
      console.error(e);
    });
  }

}
