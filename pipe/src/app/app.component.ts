import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  birthday = new Date(1990, 1, 1);
  toggle = true;
  get format() {
    return this.toggle ? 'shortDate' : 'fullDate';
  }

  toggleFormat() {
    this.toggle = !this.toggle;
  }

  title = 'pipe';

  power: number = 100;
}
