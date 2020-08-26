import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'brain-child',
  template: `
    <h1>Child {{hello}}</h1>
  `,
  providers: [
    // HelloService,
    {
      provide: 'hello',
      useValue: 'hello from child component'
    }
  ]
})
export class ChildComponent {
  constructor(@Inject('hello') hello: string) {}
}
