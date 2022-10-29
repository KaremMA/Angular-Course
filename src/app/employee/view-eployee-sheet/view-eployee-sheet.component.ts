import { Component, OnInit } from '@angular/core';
import { EmployeeSheetsService } from 'src/app/@Services/Employee/employee-sheets.service';

@Component({
  selector: 'app-view-eployee-sheet',
  templateUrl: './view-eployee-sheet.component.html',
  styleUrls: ['./view-eployee-sheet.component.scss']
})
export class ViewEployeeSheetComponent implements OnInit {
 
 


  constructor(
    private employee:EmployeeSheetsService
  ) { }

  EmployeeData:any = [];

  ngOnInit(): void {

    this.employee.getEmployeeSheets()
    .subscribe({
      next: (res) =>{

        this.EmployeeData = res;
        console.log(res);
        

      },
      error: (err) =>{

        console.log(err);
      }
    })
  }

}
