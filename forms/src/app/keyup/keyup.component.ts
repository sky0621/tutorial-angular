import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-keyup',
  templateUrl: './keyup.component.html',
  styleUrls: ['./keyup.component.css']
})
export class KeyupComponent implements OnInit {
  keyValues = '';

  constructor() { }

  ngOnInit() {
  }

  onKey(event: any) {
    this.keyValues += event.target.value + ' / ';
  }
}
