import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/@Services/Students/student.service';
import { NgxSpinnerService } from "ngx-spinner";
import { ColDef } from 'ag-grid-community';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NbToastrService } from '@nebular/theme';

@Component({
  selector: 'app-add-new-student',
  templateUrl: './add-new-student.component.html',
  styleUrls: ['./add-new-student.component.scss']
})
export class AddNewStudentComponent implements OnInit {

  constructor(
    private toastrService: NbToastrService
  ) { }

  // fullname
  // roull number
  // address
  // program
  // college
  // phone number


  StudentForm = new FormGroup({

    fullname: new FormControl('', Validators.required),
    roullNumber: new FormControl('', Validators.required),
    address: new  FormControl(''),
    program: new FormControl('', Validators.required),
    college: new FormControl('', Validators.required),
    phoneNumber: new FormControl('')
  })



  ngOnInit(): void {
    
  }

  onSubmit(){

    // toastrService

    if(this.StudentForm.invalid){

      this.toastrService.warning("تنبية", "الرجاء تعبئة جميع الحقول");
      return;
    }
    

    console.log(this.StudentForm.getRawValue());
    this.toastrService.success("تمت العملية", "تمت عملية حفظ الطالب");
    
  }



}
