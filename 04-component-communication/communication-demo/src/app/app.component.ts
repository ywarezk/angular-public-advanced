import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>
      Component Communication
    </h1>

    <trv-demo></trv-demo>
  `,
})
export class AppComponent {
  title = 'communication-demo';
}
