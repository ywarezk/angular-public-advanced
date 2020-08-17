import { Component, OnInit, ViewEncapsulation } from '@angular/core';
// import './child1.component.scss';
// import './child1.scss';

@Component({
  selector: 'child1',
  template: `
    <p >
      child1
    </p>
  `,
  styles: [

  ],
  styleUrls: [
    'child1.scss'
  ],
  encapsulation: ViewEncapsulation.None
})
export class ChildComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}
