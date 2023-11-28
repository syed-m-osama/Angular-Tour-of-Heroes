import { Component, Input } from '@angular/core';
import { Hero } from '../hero';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../hero.service';
import { Location } from '@angular/common';
import { Observable, tap, catchError } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent {

  @Input() hero?: Hero;
  http: any;

  constructor(
  private route: ActivatedRoute,
  private heroService: HeroService,
  private location: Location
  ) {}

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (this.hero) {
      this.heroService.updateHero(this.hero)
        .subscribe(() => this.goBack());
    }
  }

//   httpOptions = {
//     headers: new HttpHeaders({ 'Content-Type': 'application/json' })
//   };

//   /** PUT: update the hero on the server */
// updateHero(hero: Hero): Observable<any> {
//   return this.http.put(this.heroesUrl, hero, this.httpOptions).pipe(
//     tap(_ => this.log(`updated hero id=${hero.id}`)),
//     catchError(this.handleError<any>('updateHero'))
//   );
// }

  heroesUrl(heroesUrl: any, hero: Hero, httpOptions: { headers: HttpHeaders; }) {
    throw new Error('Method not implemented.');
  }
  log(arg0: string): void {
    throw new Error('Method not implemented.');
  }
  handleError<T>(arg0: string): (err: any, caught: Observable<unknown>) => import("rxjs").ObservableInput<any> {
    throw new Error('Method not implemented.');
  }

}
