import { Component, OnInit, OnDestroy } from '@angular/core';
import { HeroesService, Heroe } from '../../servicios/heroes.service';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
})
export class HeroesComponent implements OnInit, OnDestroy {
  // mis propiedades de la clase
  heroes: Heroe[] = [];
  miTxtBuscar = '';
  sinResultadosDeBusqueda = false;

  // Propiedad para suscribirnos a monitoreo de eventos del Router
  // permitira recargar la misma ruta cuando cambien los datos
  // ver modulo de rutas para ajustes ellos al Router y a esta ruta alli
  navigationSubscription;

  // el contructor recibira el Servicio que implementamos como parametro al instanciar la clase
  // el Modulo Router para navegar las rutas y monitorear eventos de navegacion
  // y ActivatedRoute para extraer parametros de la URL en la Ruta actual
  constructor(  private heroesService: HeroesService,
                private route: ActivatedRoute,
                private router: Router ) {

    // suscribirnos a los eventos del Router aqui
    // al final hacemos unsubscribe en 'ngOnDestroy' para optimizar uso de memoria
    this.navigationSubscription = this.router.events.subscribe((event: any) => {
      // si el evento capturado es 'NavigationEnd' ( pagina cargada ) reiniciamos este componente con nuevos datos
      if (event instanceof NavigationEnd ) {
        // este es el metodo que hace la magia de actualizar los datos que renderiza el componente
           this.actualizarContenidoDePagina();
        }
    });
  }

  // Metodo para reiniciar arreglo de datos segun contenido filtrado o sin filtrar al cargar la pagina
  private actualizarContenidoDePagina() {
    // obtener valor del parametro 'search' inyectado a la url por el componente Navbar
    // con texto de filtrado. Si existe lo asignamos 'this.miTxtBuscar'
    this.route.queryParams.subscribe( params => this.miTxtBuscar = params.search );
      // sino existe el parametro de busqueda en la URL o esta en blanco
    if ((!this.miTxtBuscar) || (this.miTxtBuscar === '')) {
      // cargar todos los datos sin filtrar
      this.heroes = this.heroesService.getHeroes();
      // desactivar h5 que informa no hay resultados usando un *ngIf en el html
      this.sinResultadosDeBusqueda = false;
    } else {
      // obtener resultado de la busqueda llamando funcion en servicio de datos
      const searchResults = this.heroesService. buscarHeroes( this.miTxtBuscar );
      // cargar la propiedad 'heroes' con datos filtrados
      this.heroes = searchResults;
      // si no se encontraron coincidencias
      // desactivar h5 que informa no hay resultados usando un *ngIf en el html
      this.sinResultadosDeBusqueda = ((!searchResults) || (searchResults.length === 0 ));
    }
  }

  // corre cuando este cargada la aplicacion
  // llamamos metodo de incicializacion del contenido
  ngOnInit(): void {
      this.actualizarContenidoDePagina();
  }

  // metodo llamdo con click del boton 'ver mas' en el html
  // recibe parametro desde html para usarlo en la navegacion a una ruta
  verHeroe(i: number){
    // instruye al Router que navegue a la ruta 'heroe'
    // le pasa indice (i) del array (en este caso el 'id') como parametro de la ruta
    this.router.navigate(['/heroe', i]);

  }

  // prevenir desperdicio de memoria liberando la suscripcion al evento de navegacion
  // cuando se renderice el componente, sino continuaria ejecutando nuestro Metodo
  // actualizarContenidoDePagina() con cada evento 'navigationEnd'
  ngOnDestroy() {
    if (this.navigationSubscription) {
       this.navigationSubscription.unsubscribe();
    }
  }

}
