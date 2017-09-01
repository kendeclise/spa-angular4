import { Component } from '@angular/core';
// Importación necesaria para la recepción de parámetros
import { ActivatedRoute } from '@angular/router';
// Importando un servicio
import { HeroesService, Heroe} from "../../services/heroes.service";

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent   {

  heroe: any = {};
  casa: string;

  constructor(private activatedRoute: ActivatedRoute, _heroesService: HeroesService) {
    this.activatedRoute.params.subscribe( params => {
      this.heroe = _heroesService.getHeroe(params['id']);
      console.log(this.heroe);
      this.casa = (this.heroe.casa === 'DC') ? 'assets/img/logodc.png' : 'assets/img/marvellogo.png';
      console.log(this.casa);
    });
  }

}
