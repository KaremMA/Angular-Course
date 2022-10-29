import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbMenuItem } from '@nebular/theme';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private router:Router
  ) { }

  items:NbMenuItem[] = [
    {
      title: "اضافة طالب",
      icon: 'people-outline',
      link: '/home/students/add-new-student'
    },
    {
      title: "مواد الطالب",
      icon: "book-open-outline",
      link: "/home/students/student-subject"
    }
  ]

  ngOnInit(): void {
  }

  AddNewEmployee(){

    //this.router.navigateByUrl("/home/employee/add-new-employee");
    this.router.navigate(['/home/employee/add-new-employee'])

    console.log(this.router);
    
  }

  UpdateEmployee(EmployeeID_PK:number, NatNumber:number){

    this.router.navigateByUrl('/home/employee/update-employee/' 
    + EmployeeID_PK
    + "/" + NatNumber)
  }

}
