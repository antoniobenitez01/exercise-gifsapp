import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../interfaces/gif-interface';

@Injectable({
  providedIn: 'root',
})
export class GifsService {

  public listadoGifs : Gif[] = [];

  private http = inject(HttpClient);
  private _historialEtiquetas: string[] = [];
  private max : number = 10;
  private apiKey: string = "sF6QzkJxpS2Oy5WlPRqHHuZkIw7u22Lr";
  private serviceurl: string = "https://api.giphy.com/v1/gifs";
  private gifs : string[] = [];

  get historialEtiquetas(): string[] {
    return [...this._historialEtiquetas];
  }

  buscarEtiqueta(etiqueta: string){

    //* VALIDACIÓN ETIQUETA VACÍA
    let etiquetaLocal : string = etiqueta.trim();
    if(etiquetaLocal.length == 0){
      return;
    }

    //*LISTA DE ETIQUETAS SIDEBAR
    //console.log(etiquetaLocal); // DEBUG
    this._historialEtiquetas = this._historialEtiquetas.filter((word) => word.toLowerCase() != etiquetaLocal.toLowerCase());
    if(this._historialEtiquetas.length >= this.max){
      this._historialEtiquetas.pop();
    }
    this._historialEtiquetas.unshift(etiquetaLocal);
    //console.log("ARRAY = ",this.historialEtiquetas); // DEBUG

    //* HTTP CLIENT API
    const params = new HttpParams()
      .set('api_key',this.apiKey)
      .set('q',etiquetaLocal)
      .set('limit',20)

    this.http.get<SearchResponse>(`${ this.serviceurl }/search`,{ params })
    .subscribe( resp => {
      this.listadoGifs = resp.data;
    })
  }
}
