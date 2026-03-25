import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ParentComponent } from "./parent/parent";
import { ChildComponent } from "./parent/child/child";

@Component({
  selector: 'app-root',
  imports: [ParentComponent, ChildComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('angularHomework5');
}
