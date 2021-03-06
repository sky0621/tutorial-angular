import { Component, OnInit } from '@angular/core';
import { HEROES } from '../hero';

@Component({
  selector: 'app-hero-parent',
  template: `
    <h2>{{master}} controls {{heroes.length}} heroes</h2>
    <app-hero-child *ngFor="let hero of heroes" [master]="master" [hero]="hero" [cname]="hero.name"></app-hero-child>`
})
export class HeroParentComponent implements OnInit {
  heroes = HEROES;
  master = 'Master';

  constructor() { }

  ngOnInit() {
  }

}
