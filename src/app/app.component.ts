import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet>
    <app-carros></app-carros>
  `
})
export class AppComponent {
  title = 'servico-loiane';
}
