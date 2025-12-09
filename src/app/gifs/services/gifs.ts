import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private _historialEtiquetas: string[] = [];

  get historialEtiquetas(): string[] {
    return [...this._historialEtiquetas];
  }

  buscarEtiqueta(etiqueta: string){
    this._historialEtiquetas.unshift(etiqueta);
    console.log(this._historialEtiquetas);
  }
}
