import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!-- <template-demo></template-demo> -->

    <!-- <reactive-form></reactive-form> -->

    <brain-dynamic-form></brain-dynamic-form>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'forms-demo';
}
