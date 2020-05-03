import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { AboutComponent } from './components/about/about.component';
import { HeroeComponent } from './components/heroe/heroe.component';


const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  // runGuardsAndResolvers: 'always' permite suscribirnos al
  // monitoreo de eventos en el componente de esta ruta
  { path: 'heroes', component: HeroesComponent, runGuardsAndResolvers: 'always' },
  { path: 'about', component: AboutComponent },
  { path: 'heroe/:id', component: HeroeComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home' },

];

@NgModule({
  declarations: [],
  // {onSameUrlNavigation: 'reload'} hace posible recargar la misma ruta ( pagina web )
  // cuando se inyecten parametros en la url
  imports: [RouterModule.forRoot(APP_ROUTES, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

