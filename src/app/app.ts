import { Component, signal } from '@angular/core';
import { GifsModule } from './gifs/gifs-module';
import { SharedModule } from './shared/shared-module';

@Component({
  selector: 'app-root',
  imports: [GifsModule, SharedModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('gifs-app');
}
