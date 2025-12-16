import { Component } from '@angular/core';
import { GifsService } from '../../services/gifs';
import { Gif } from '../../interfaces/gif-interface';

@Component({
  selector: 'gifs-homepage',
  standalone: false,
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePageComponent {
  constructor(private gifsService : GifsService ){}

  get gifs() : Gif[]{
    return this.gifsService.listadoGifs;
  }
}
