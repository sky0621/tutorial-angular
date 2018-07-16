import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];

  selectedHero: Hero

  // HeroServiceをシングルトンインスタンスとして設定
  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    // ヒーローデータ取得をウォッチし、取得されたら this.heroes にセット
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }
}
