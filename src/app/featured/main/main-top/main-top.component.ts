import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../../services/api.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-main-top',
  templateUrl: './main-top.component.html',
  styleUrls: ['./main-top.component.scss']
})
export class MainTopComponent implements OnInit {
  country: Observable<any>;

  constructor(private apiService: ApiService) {
  }

  ngOnInit(): void {
    this.getCountryData();
  }

  getCountryData(): void {
    this.apiService.getCountryData().toPromise().then(res => {
      if (res) {
        console.log(res);
      }
    }).catch((e) => {
      console.error(e);
    });
  }

}
