import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../../home/home.component';
import { LoginComponent } from '../../login/login.component';

const pageRoutes: Routes = [
{path: '', redirectTo: '/home', pathMatch: 'full'},
{path: 'home', component: HomeComponent},
{path: 'login', component: LoginComponent}
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
