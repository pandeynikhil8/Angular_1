import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})
export class BasicComponent implements OnInit {

  name = "";
  constructor() { }
  t:any;
  ngOnInit(): void {
  }

  greet():string{
    return "Hello World";
  }

  onChange(event:any):void{
    this.t= event;
    console.log(event.value)
  }
}
