import { ListaItem } from './Lista-item';
export class Lista {

  nombre: string;
  terminado: boolean;
  items: ListaItem[];


  constructor(nombre: string) {

    this.nombre = nombre;
    this.terminado = false;


  }

}
