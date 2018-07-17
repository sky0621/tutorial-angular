import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  heroes: Hero[];

  // HeroServiceをシングルトンインスタンスとして設定
  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    // ヒーローデータ取得をウォッチし、取得されたら this.heroes にセット
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes.slice(0, 4));
  }
}
