import { Component, OnInit, ViewEncapsulation } from '@angular/core';
// import './child1.component.scss';

@Component({
  selector: 'child2',
  template: `
    <p>
      child1
    </p>
  `,
  styles: [

  ],
  styleUrls: [
    'child2.component.scss'
  ],
  encapsulation: ViewEncapsulation.None
})
export class Child2Component implements OnInit {
  constructor() { }

  ngOnInit() { }
}
