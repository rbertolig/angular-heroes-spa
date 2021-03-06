import { Injectable } from '@angular/core';

// definir una interfaz como plantilla del arreglo de datos tipo Heroe
export interface Heroe{
  nombre: string;
  bio: string;
  img: string;
  aparicion: string;
  casa: string;
  id: number;
}

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private heroes: Heroe[] = [
    {
      nombre: "Aquaman",
      bio: "El poder más reconocido de Aquaman es la capacidad telepática para comunicarse con la vida marina, la cual puede convocar a grandes distancias.",
      img: "assets/img/aquaman.png",
      aparicion: "1941-11-01",
      casa:"DC",
      id: 0
    },
    {
      nombre: "Batman",
      bio: "Los rasgos principales de Batman se resumen en «destreza física, habilidades deductivas y obsesión». La mayor parte de las características básicas de los cómics han variado por las diferentes interpretaciones que le han dado al personaje.",
      img: "assets/img/batman.png",
      aparicion: "1939-05-01",
      casa:"DC",
      id: 1
    },
    {
      nombre: "Daredevil",
      bio: "Al haber perdido la vista, los cuatro sentidos restantes de Daredevil fueron aumentados por la radiación a niveles superhumanos, en el accidente que tuvo cuando era niño. A pesar de su ceguera, puede \"ver\" a través de un \"sexto sentido\" que le sirve como un radar similar al de los murciélagos.",
      img: "assets/img/daredevil.png",
      aparicion: "1964-01-01",
      casa: "Marvel",
      id: 2
    },
    {
      nombre: "Hulk",
      bio: "Su principal poder es su capacidad de aumentar su fuerza hasta niveles prácticamente ilimitados a la vez que aumenta su furia. Dependiendo de qué personalidad de Hulk esté al mando en ese momento (el Hulk Banner es el más débil, pero lo compensa con su inteligencia).",
      img: "assets/img/hulk.png",
      aparicion: "1962-05-01",
      casa:"Marvel",
      id: 3
    },
    {
      nombre: "Linterna Verde",
      bio: "Poseedor del anillo de poder que posee la capacidad de crear manifestaciones de luz sólida mediante la utilización del pensamiento. Es alimentado por la Llama Verde (revisada por escritores posteriores como un poder místico llamado Starheart), una llama mágica contenida en dentro de un orbe (el orbe era en realidad un meteorito verde de metal que cayó a la Tierra, el cual encontró un fabricante de lámparas llamado Chang)",
      img: "assets/img/linterna-verde.png",
      aparicion: "1940-06-01",
      casa: "DC",
      id: 4
    },
    {
      nombre: "Spider-Man",
      bio: "Tras ser mordido por una araña radiactiva, obtuvo los siguientes poderes sobrehumanos, una gran fuerza, agilidad, poder trepar por paredes. La fuerza de Spider-Man le permite levantar 10 toneladas o más. Gracias a esta gran fuerza Spider-Man puede realizar saltos íncreibles. Un \"sentido arácnido\", que le permite saber si un peligro se cierne sobre él, antes de que suceda. En ocasiones este puede llevar a Spider-Man al origen del peligro.",
      img: "assets/img/spiderman.png",
      aparicion: "1962-08-01",
      casa: "Marvel",
      id: 5
    },
    {
      nombre: "Wolverine",
      bio: "En el universo ficticio de Marvel, Wolverine posee poderes regenerativos que pueden curar cualquier herida, por mortal que ésta sea, además ese mismo poder hace que sea inmune a cualquier enfermedad existente en la Tierra y algunas extraterrestres . Posee también una fuerza sobrehumana, que si bien no se compara con la de otros superhéroes como Hulk, sí sobrepasa la de cualquier humano.",
      img: "assets/img/wolverine.png",
      aparicion: "1974-11-01",
      casa: "Marvel",
      id: 6
    }
  ];

  constructor() {
      console.log('Servicio Listo para usar!!!');

  }

  getHeroes(){
    return this.heroes;
  }

  getHeroe(idx: number){
    // filtrat el primer elemento del array con id igual idx recibido
    const heroById = this.heroes.filter(heroe => heroe.id === idx );
    // retornar elemento unico, no el array para simplificar extraccion en html
    return heroById[0];
  }

 // implementar funcion de busqueda para el componente Navbar
 buscarHeroes(buscarTexto: string){
  //  inicializo una variable para almacenar el resultado de la busqueda
  let heroesArr: Heroe[] = [];
  // standartizar en minusculas
  buscarTexto = buscarTexto.toLowerCase();
  // para cada elemento del arreglo heroes
  for (let heroe of this.heroes ){
    // extraer campo del array para comparar con termino de busqueda
    let nombre = heroe.nombre.toLowerCase();
    // buscar termino de busqueda ( subcadena) dentro campo del array (cadena)
    // consiguiendo el indice de ubicacion de la subcadena dentro de la cadena de texto
    // si retorna 0 o mayor la subcadena existe dentro de la cadena
    if (nombre.indexOf(buscarTexto) >= 0){
      // si positivo empujar el elemento coincidente en el array de resultados
      heroesArr.push(heroe);
    }
  }
  return heroesArr;
 }

}
