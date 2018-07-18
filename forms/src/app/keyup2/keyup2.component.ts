import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-keyup2',
  templateUrl: './keyup2.component.html',
  styleUrls: ['./keyup2.component.css']
})
export class Keyup2Component implements OnInit {
  keyValues = '';

  constructor() { }

  ngOnInit() {
  }

  onKey(value: string) {
    this.keyValues += value + ' / ';
  }
}
