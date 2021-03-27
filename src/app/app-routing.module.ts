import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PreloadModulesStrategy} from './services/preload-modules.strategy';
import {Resolver} from './services/resolver.service';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/covid' },
  // { path: 'customers/:id', data: { preload: true }, loadChildren: () => import('./customer/customer.module').then(m => m.CustomerModule) },
  { path: 'covid', resolve: {countryData: Resolver}, loadChildren: () => import('./featured/main/main.module').then(m => m.MainModule) },
  // { path: 'orders', data: { preload: true }, loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule) },
  // { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
  { path: '**', pathMatch: 'full', redirectTo: '/covid' } // catch any unfound routes and redirect to home page
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadModulesStrategy, relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
  providers: [PreloadModulesStrategy]

})
export class AppRoutingModule { }
