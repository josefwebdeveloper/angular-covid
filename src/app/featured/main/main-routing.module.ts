import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {MainTopComponent} from './main-top/main-top.component';
import {StateComponent} from './state/state.component';

const routes: Routes = [
  { path: '', component: MainTopComponent },
  { path: ':id', component: StateComponent }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class MainRoutingModule {
}
