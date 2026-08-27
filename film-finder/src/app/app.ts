import { Component, signal } from '@angular/core';
import { Taskbar } from './common-components/taskbar/taskbar';

@Component({
  selector: 'app-root',
  imports: [Taskbar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('film-finder');
  username = "placeholder";
}
