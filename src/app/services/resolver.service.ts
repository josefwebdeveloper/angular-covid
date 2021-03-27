import {Injectable} from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
  Router,
} from '@angular/router';
import {of} from 'rxjs/internal/observable/of';
import {shareReplay} from 'rxjs/operators';
import {ApiService} from './api.service';
import {NgxSpinnerService} from 'ngx-spinner';

@Injectable({
  providedIn: 'root',
})
export class Resolver implements Resolve<any> {
  constructor(
    private router: Router,
    private apiService: ApiService,
    private spinner: NgxSpinnerService
  ) {
  }

  async resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.apiService.getCountryData().toPromise().then(res => {
      return res;
    })
      .catch((e) => {
        console.error(e);
      });
  }
}
