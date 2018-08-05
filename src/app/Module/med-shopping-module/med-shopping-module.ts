import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { MedMaterialModule } from '../med-material/med-material.module';
import { MedShoppingRouterModule } from '../med-shopping-router/med-shopping-router.module';

import { AuthInterceptor } from '../Helper/auth-interceptor';
import { OnlyLoggedInUser } from '../med-shopping-guards/LoggedInGuards';

@NgModule({
    imports: [
      CommonModule
    ],
    exports: [
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        NgxSpinnerModule,
        MedMaterialModule,
        MedShoppingRouterModule
    ],
    providers: [{
        provide: HTTP_INTERCEPTORS,
        useClass: AuthInterceptor,
        multi: true
      },
      OnlyLoggedInUser],
    declarations: []
  })
  export class MedShoppingModule { }
  