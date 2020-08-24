/**
--+---+----+---+----+---+---------------> fromEvent
-----------------------------------+--->  debounceTime

 <input
   (throttling)="userTyped($event)"
   type="text" />
 */

import { Directive, Output, EventEmitter, ElementRef, OnInit, HostListener } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';

@Directive({
  selector: '[throttling]'
})
export class ThrottlingDirective implements OnInit {
  @Output('throttling')
  throttling: EventEmitter<string> = new EventEmitter();

  constructor(private _element: ElementRef) { }

  ngOnInit() {
    fromEvent<InputEvent>(this._element.nativeElement, 'input').pipe(
      debounceTime(1000),
      map((event) => {
        return (<any>event.target).value;
      })
    ).subscribe(this.throttling)
  }

  @HostListener('input')
  onUserTyped() {

  }

  // @HostListener('keyup', ['$event'])
  // public onKeyUp(event: any) {
  //   const eventStream = fromEvent(event.target, 'keyup')
  //     .pipe(
  //       map(() => event.target.value),
  //       debounceTime(1000)),
  //       distinctUntilChanged()
  //     )
  //   .subscribe(
  //     input => this.valueEmitter.emit(input)
  //   )
  // }

}
