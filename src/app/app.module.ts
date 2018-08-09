import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MedShoppingModule } from './Module/med-shopping-module/med-shopping-module';

import { AppComponent } from './app.component';
import { MedNavComponent } from './med-nav/med-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { HomeComponent } from './home/home.component';
import { CarouselComponentComponent } from './carousel-component/carousel-component.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    MedNavComponent,
    HomeComponent,
    CarouselComponentComponent,
    FooterComponentComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MedShoppingModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
