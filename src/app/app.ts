import { RouterOutlet } from '@angular/router';
import { Header } from './layout/header/header';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header],
  templateUrl: './app.html',
  styles: [],
})
export class App {
  protected readonly title = signal('Modern Commerce');
}
