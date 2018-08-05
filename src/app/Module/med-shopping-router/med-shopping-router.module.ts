import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../../home/home.component';

const pageRoutes: Routes = [
{path: '', redirectTo: '/home', pathMatch: 'full'},
{path: 'home', component: HomeComponent}
]

@NgModule({
  imports: [
    CommonModule,    
    RouterModule.forRoot(pageRoutes)
  ],
  exports:[
    RouterModule
  ],
  declarations: []
})
export class MedShoppingRouterModule { }
