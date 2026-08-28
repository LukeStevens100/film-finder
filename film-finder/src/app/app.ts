import { Component, signal } from '@angular/core';
import { Taskbar } from './common-components/taskbar/taskbar';
import { Footer } from './common-components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [Taskbar, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('film-finder');
  username = "placeholder";
}
