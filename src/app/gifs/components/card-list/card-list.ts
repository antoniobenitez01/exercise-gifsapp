import { Component, Input } from '@angular/core';
import { Gif } from '../../interfaces/gif-interface';

@Component({
  selector: 'gifs-card-list',
  standalone: false,
  templateUrl: './card-list.html',
  styleUrl: './card-list.css',
})
export class CardListComponent {
  @Input()
  public listadoGifs : Gif[] = [];
}
