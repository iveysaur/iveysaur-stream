import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about';
import { MainPageComponent } from './main-page';

const appRoutes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'about', component: AboutComponent }
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
