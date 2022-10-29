import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.module';
import { StudentsComponent } from './students.component';
import { AddNewStudentComponent } from './add-new-student/add-new-student.component';
import { StudentSubjectsComponent } from './student-subjects/student-subjects.component';
import { NbButtonModule, NbCardModule, NbInputModule } from '@nebular/theme';
import { NgxSpinnerModule } from "ngx-spinner";
import { AgGridModule } from 'ag-grid-angular';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    StudentsComponent,
    AddNewStudentComponent,
    StudentSubjectsComponent
  ],
  imports: [
    CommonModule,
    StudentsRoutingModule,
    NbCardModule,
    NgxSpinnerModule, 
    AgGridModule,
    NbInputModule,
    NbButtonModule,
    ReactiveFormsModule
  ]
})
export class StudentsModule { }
