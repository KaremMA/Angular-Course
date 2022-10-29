import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNewEmployeeComponent } from './add-new-employee/add-new-employee.component';
import { EmployeeComponent } from './employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { ViewEployeeSheetComponent } from './view-eployee-sheet/view-eployee-sheet.component';

const routes: Routes = [
  {
    path: '',
    component: EmployeeComponent,
    children: [
      {
        path: 'add-new-employee',
        component: AddNewEmployeeComponent
      },
      {
        path: 'view-eployee-sheet',
        component: ViewEployeeSheetComponent
      },
      {
        path: 'update-employee/:EmployeeID_PK/:NatNumber',
        component: UpdateEmployeeComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
