import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutModule } from '@angular/cdk/layout';

import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';

import { 
  MatToolbarModule, 
  MatButtonModule, 
  MatSidenavModule, 
  MatIconModule, 
  MatListModule,
  MatCardModule,  
  MatFormFieldModule,
  MatInputModule,
  MatOptionModule,
  MatCheckboxModule,
  MatSelectModule,
  MatDividerModule,
  MatTableModule,
  MatPaginatorModule,
  MatGridListModule,
  MatMenuModule,
  MatSortModule,
  MatDialogModule,
  MatTooltipModule,
  MatStepperModule,
  MatDatepickerModule,
  MatAutocompleteModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    LayoutModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,    
    MatSidenavModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatCheckboxModule,
    MatSelectModule,
    MatListModule,
    MatDividerModule,
    MatTableModule,
    MatPaginatorModule,
    MatMenuModule,
    MatGridListModule,
    MatSortModule,
    MatDialogModule,
    MatTooltipModule,
    MatStepperModule,
    MatDatepickerModule,
    CdkTableModule,
    CdkTreeModule,
    MatAutocompleteModule
  ],
  declarations: []
})
export class MedMaterialModule { }
