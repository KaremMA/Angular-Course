import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'students',
        loadChildren: () => import("../students/students.module").then(m => m.StudentsModule)
      },
      {
        path: 'employee',
        loadChildren: () => import("../employee/employee.module").then(m => m.EmployeeModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
