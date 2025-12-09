import { Component } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
  standalone: false
})
export class SidebarComponent {

  constructor( private gifsService : GifsService ){
  }

  get historialEtiquetas(): string[] {
    return this.gifsService.historialEtiquetas;
  }
}
