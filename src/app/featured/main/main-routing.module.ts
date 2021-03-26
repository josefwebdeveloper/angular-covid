import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {MainTopComponent} from './main-top/main-top.component';

const routes: Routes = [
  { path: '', component: MainTopComponent }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class MainRoutingModule {
}
