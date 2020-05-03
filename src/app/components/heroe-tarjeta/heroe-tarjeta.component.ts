import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
})
export class HeroeTarjetaComponent implements OnInit {

  // definir propiedad como tipo @Input con el decorador
  // permite inyectar la propiedad en otros componentes
  @Input() heroe: any = {};
  // propiedad para conectar con componente 'Heroes' y recibir un indice
  @Input() index: number;

  // definimos @Outputs para emitir eventos desde este compoenente a otro
  @Output() heroeSeleccionado: EventEmitter<number>;

  constructor( private router: Router ) {
    // instanciar el tipo de evento que deseo emitir
    this.heroeSeleccionado = new EventEmitter();

  }

  ngOnInit(): void {
  }

  // metodo llamdo con click del boton 'ver mas' en el html
  // recibe parametro desde html para usarlo en la navegacion a una ruta
  verHeroe(){
  //   // instruye al Router que navegue a la ruta 'heroe'
  //   // le pasa indice del array, en este caso propiedad ( @Input index ) como parametro de la ruta
  //   this.router.navigate(['/heroe', this.index]);

  // activar el evento @Output con dato que deseo exportar
  this.heroeSeleccionado.emit( this.index );

  }

}
