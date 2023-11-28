import { Component } from '@angular/core';
import { Hero } from '../hero'
import { HEROES } from '../mock-heroes';
import { NgFor } from '@angular/common';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  // standalone: true,
  // imports: [NgFor],
})
export class HeroesComponent {
  // hero : Hero = {
  //   id : 1,
  //   name : 'Wolverine'
  // };

  constructor (
    private heroService : HeroService, // injecting HeroService
    private messageService: MessageService // injecting  MessageService
  ) {}

  heroes:Hero[] = [];


  ngOnInit(): void {
    this.getHeroes();
  }


  // selectedHero?: Hero;

  // onSelect(hero: Hero): void {
  //   this.selectedHero = hero;
  //   this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);

  // }

  getHeroes(): void {
    // this.heroes = this.heroService.getHeroes(); // for synchronous data
    this.heroService.getHeroes().subscribe(data => this.heroes = data); // for asynchronous data
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero.id).subscribe();
  }
}
