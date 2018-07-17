import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-child',
  template: `<h3>{{hero.name}} says</h3><p>I, {{cname}} is at your service, {{masterName}}.</p>`
})
export class HeroChildComponent implements OnInit {

  @Input() hero: Hero;
  @Input('master') masterName: string;

  private _cname: string;

  @Input()
  set cname(cname: string) {
    this._cname = (cname && cname.trim()) || '<no name set>';
  }

  get cname(): string {
    return this._cname;
  }

  constructor() { }

  ngOnInit() {
  }

}
