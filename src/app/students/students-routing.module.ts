import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNewStudentComponent } from './add-new-student/add-new-student.component';
import { StudentSubjectsComponent } from './student-subjects/student-subjects.component';
import { StudentsComponent } from './students.component';

const routes: Routes = [
  {
    path: '',
    component: StudentsComponent,
    children: [
      {
        path: 'add-new-student',
        component:AddNewStudentComponent
      },
      {
        path: 'student-subject',
        component: StudentSubjectsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsRoutingModule { }
