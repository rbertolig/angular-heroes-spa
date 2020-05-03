import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {

  buscarTexto = '';

  constructor( private router: Router) {
  }

  ngOnInit(): void {
  }

 // implementar funcion de busqueda del menu Navbar
  buscarHeroe(buscarTexto) {
    // si el cuadro de busqueda esta en blanco
    if ( buscarTexto === '' ){
          // instruye al Router que navegue a la ruta 'heroe' para cargar datos sin filtrar
          this.router.navigate(['/heroes']);
    } else {
      // recortar cadena de busqueda a 30 caracteres maximo por precaucion
      buscarTexto = buscarTexto.substring(0, 30);
      // instruye al Router que navegue a la ruta 'heroe'y le pasa el parametro con texto de busqueda para filtrar datos
      this.router.navigate(['/heroes'], { queryParams: { search: buscarTexto } });
    }
  }

}
