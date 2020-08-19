import { Component, OnInit, ViewEncapsulation, ComponentRef } from '@angular/core';

@Component({
  selector: 'child1',
  template: `
    <div class="child1">
      <p >
        child1 {{hello}}
      </p>
    </div>
  `,
  styles: [
    `
    .hello {
      border: 1px solid black;
    }
    `
  ],
  styleUrls: [
    'child1.component.scss'
  ],
  encapsulation: ViewEncapsulation.None
})
export class ChildComponent implements OnInit {
  hello = 'world';

  constructor() { }

  ngOnInit() {
  }
}
