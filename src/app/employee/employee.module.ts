import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee.component';
import { AddNewEmployeeComponent } from './add-new-employee/add-new-employee.component';
import { ViewEployeeSheetComponent } from './view-eployee-sheet/view-eployee-sheet.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';


@NgModule({
  declarations: [
    EmployeeComponent,
    AddNewEmployeeComponent,
    ViewEployeeSheetComponent,
    UpdateEmployeeComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule
  ]
})
export class EmployeeModule { }
