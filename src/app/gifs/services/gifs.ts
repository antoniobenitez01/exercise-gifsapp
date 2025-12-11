import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GifsService {

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
    if(etiqueta.trim() != ""){

      //LISTA DE ETIQUETAS SIDEBAR
      console.log(etiqueta);
      this._historialEtiquetas = this._historialEtiquetas.filter((word) => word.toLowerCase() != etiqueta.toLowerCase());
      if(this._historialEtiquetas.length >= this.max){
        this._historialEtiquetas.pop();
      }
      this._historialEtiquetas.unshift(etiqueta);
      console.log("ARRAY = ",this.historialEtiquetas);

      // HTTP CLIENT API
      const params = new HttpParams()
        .set('api_key',this.apiKey)
        .set('q',etiqueta)
        .set('limit',20)

      this.http.get(`${ this.serviceurl }/search`,{ params })
      .subscribe( resp => {
        console.log(resp);
      })

    }
  }
}
