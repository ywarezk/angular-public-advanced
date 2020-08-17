import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <child1></child1>
    <child1></child1>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'foo';
}
