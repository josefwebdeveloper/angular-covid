import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private statesDataSubject = new BehaviorSubject(null);
  statesData$ = this.statesDataSubject.asObservable();

  constructor() {
  }

  setStatesData(data): void {
    console.log(data);
    this.statesDataSubject.next(data);
  }


}
