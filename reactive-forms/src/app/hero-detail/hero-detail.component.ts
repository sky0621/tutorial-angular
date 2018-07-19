import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { states, Address, Hero } from '../data-model';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnChanges {

  @Input() hero: Hero;

  heroForm: FormGroup;
  states = states;

  constructor(private fb: FormBuilder, private heroService: HeroService) { this.createForm(); }

  createForm() {
    this.heroForm = this.fb.group({
      name: ['', Validators.required],
      address: this.fb.group(new Address()),
      power: '',
      sidekick: ''
    });
  }

  rebuildForm() {
    this.heroForm.reset({
      name: this.hero.name,
      address: this.hero.addresses[0] || new Address(),
    });
  }

  ngOnChanges() {
    this.rebuildForm();
  }

  onSubmit() {
    this.hero = this.prepareSaveHero();
    this.heroService.updateHero(this.hero).subscribe();
    this.rebuildForm();
  }

  prepareSaveHero(): Hero {
    const heroFormValue = this.heroForm.value;

    const saveHero: Hero = {
      id: this.hero.id,
      name: heroFormValue.name as string,
      addresses: [new Address()],
    };
    return saveHero;
  }

  revert() {
    this.rebuildForm();
  }
}
