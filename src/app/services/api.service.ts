import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl = environment.baseURL;

  constructor(private http: HttpClient) {
  }

  getCountryData(): Observable<any> {
    return this.http.get(this.baseUrl + 'covid/us/current');
  }
  getStatesData(): Observable<any> {
    return this.http.get(this.baseUrl + 'covid/states/current');
  }
  getStatesDaily(): Observable<any> {
    return this.http.get(this.baseUrl + 'covid/states/daily');
  }
}
