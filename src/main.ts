import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { HighlightDirective } from './directive/highlight.directive';
import { FormsModule } from '@angular/forms';
import { ComponentModule } from './component/component.module';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, FormsModule, ComponentModule],
  providers: [],
  template: `
   
    <app-highlight></app-highlight>
   
    <a target="_blank" href="https://angular.io/start">
      Learn more about Angular 
    </a>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
