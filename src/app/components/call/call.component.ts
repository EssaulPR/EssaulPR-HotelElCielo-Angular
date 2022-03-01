import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-call',
  templateUrl: './call.component.html',
  styleUrls: ['./call.component.css']
})
export class CallComponent implements OnInit {
  number: string = '';


  constructor() { }

  ngOnInit(): void {
    this.number = '833 216 1068';
  }

}
