import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.scss']
})
export class AComponent implements OnInit {

  @Input("list")  listOfNumber = []; 

  @Output() ListCount: EventEmitter<any> = new EventEmitter<any>();
  @Output() ListAvg: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  ShowNumbers(){

    console.log(this.listOfNumber);
    
  }

  ReturnListCount(){
    
    this.ListCount.emit(this.listOfNumber.length)
  }

  GetAvg(){
    var sum = 0;

    for(var i = 0; i < this.listOfNumber.length; i++)
    sum += this.listOfNumber[i];
    
    this.ListAvg.emit(sum / this.listOfNumber.length);

  }

}
