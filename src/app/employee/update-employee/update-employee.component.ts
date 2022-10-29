import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.scss']
})
export class UpdateEmployeeComponent implements OnInit {

  EmployeeID_PK:any = 0;
  natNumber:any     = 0;

  constructor(
    private ActiveRoute:ActivatedRoute
  ) { 

    // this.ActiveRoute.paramMap.subscribe({
    //   next: (v) => {
    //     console.log(v);
        
    //     this.EmployeeID_PK = v.get("EmployeeID_PK");
    //     this.natNumber = v.get("NatNumber");
    //   }
    // });


    this.ActiveRoute.queryParams
    .subscribe({
      next: (v) => {

        console.log(v);
        
      }
    })
  }

  ngOnInit(): void {


    // setTimeout(() => {

    //   console.log("EmployeeID => " + this.EmployeeID_PK);
    //   console.log("NatNumber => " + this.natNumber);

    // }, 4000);

    
  }

}
