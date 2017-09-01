import { Component, OnInit } from '@angular/core';
// Importando un servicio
import { HeroesService, Heroe} from "../../services/heroes.service";
// redireccion
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  heroes: Heroe[] = [];

  constructor(private _heroesService: HeroesService, private router: Router) { }

  ngOnInit() {
    this.heroes = this._heroesService.getHeroes();
    console.log(this.heroes);
  }

  verHeroe(index: number){
    this.router.navigate(['/heroe', index]);
  }

}
