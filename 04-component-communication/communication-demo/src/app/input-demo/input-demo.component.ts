/**
<input-demo [message]="someData" [age]="someAge" [complexObj]="{foo: 'bar'}" ></input-demo>
 */

import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'input-demo',
  template: `
    <h1>
    {{message}}
    </h1>
  `
})
export class InputDemoComponent implements OnInit, OnChanges {
  @Input('message')
  message: string;

  @Input('complexObj')
  complexObj: {foo: string};

  @Input('age')
  set age(newAge: number) {
    this._age = newAge;
  }

  get age() {
    return this._age;
  }

  private _age: number;

  // input will not be populated
  constructor() { }

  /**
   * will jump multiple times when one of the @Input is changed
   * ===
   *
   * @param changes
   */
  ngOnChanges(changes: SimpleChanges) {

  }

  // the input variabls will be populated
  ngOnInit() {

  }
}
