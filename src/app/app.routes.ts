import { RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {AboutComponent} from "./components/about/about.component";
import {HeroesComponent} from "./components/heroes/heroes.component";
import { HeroeComponent } from './components/heroe/heroe.component';

const APP_ROUTES: Routes = [
  // Aqui van todas las rutas
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'heroes', component: HeroesComponent},
  {path: 'heroe/:id', component: HeroeComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'} // si no se encuentra la ruta de arriba, redirecciona a esta
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
// export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES , {useHash: true} );
