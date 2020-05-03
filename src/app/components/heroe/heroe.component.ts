import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; // contiene datos de la ruta activa

// importar servicio que suministra la data
import { HeroesService } from '../../servicios/heroes.service';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent implements OnInit {

  heroe: any = {};

  constructor(  private activatedRoute: ActivatedRoute,
                private heroesService: HeroesService
    ) {
    // extraer el parametro id de la ruta activa '/heroe/:id'
    this.activatedRoute.params.subscribe(params => {
        // solicitar al servicio el elemento del array que coincide con el id requerido
        // como se estrae parametro de la URL llega como string y convierto a nummero con '+' ( unary operator)
        this.heroe = (this.heroesService.getHeroe(+params.id));
    });
  }

  ngOnInit(): void {
  }

}
