import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MainRoutingModule} from './main-routing.module';
import {CountryTableComponent} from '../../shared/components/country-table/country-table.component';
import {MainTopComponent} from './main-top/main-top.component';
import {SharedModule} from '../../shared/shared.module';
import {MatSortModule} from '@angular/material/sort';
import {StateTableComponent} from '../../shared/components/state-table/state-table.component';
import { StateComponent } from './state/state.component';
import {FilterPipe} from '../../pipes/filter.pipe';
import {NgxChartsModule} from '@swimlane/ngx-charts';



@NgModule({
  declarations: [
    CountryTableComponent,
    MainTopComponent,
    StateTableComponent,
    StateComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule,
    MatSortModule,
    NgxChartsModule
  ]
})
export class MainModule { }
