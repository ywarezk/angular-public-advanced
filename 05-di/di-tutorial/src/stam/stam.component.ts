import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'brain-stam',
  template: `
    <h1>
    I'm a stam component {{message}}
    </h1>
  `
})
export class StamComponent implements OnInit {
  constructor(@Inject('hello') public message: string) { }

  ngOnInit() { }
}
