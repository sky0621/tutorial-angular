import { Directive, OnInit, OnDestroy } from '@angular/core';

@Directive({
  selector: '[appMyspy]'
})
export class MyspyDirective implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit() {
    console.log("ngOnInit")
  }

  ngOnDestroy() {
    console.log("ngOnDestroy")
  }
}
