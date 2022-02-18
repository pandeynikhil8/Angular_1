import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})
export class BasicComponent implements OnInit {

  name = "";
  t: any;
  constructor() { }

  ngOnInit(): void {
  }

  greet(): string {
    console.log("Hello World")
    return "Hello World";
  }

  onChange(): void {
    console.log(this.name)
    
  }
}
