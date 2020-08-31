import { Component, OnInit, ChangeDetectionStrategy, Input, ChangeDetectorRef } from '@angular/core';
import { interval, Observable } from 'rxjs';

@Component({
  selector: 'grand',
  template: `
    <h1 (click)="h1Click()">Grand child {{counter$ | async}} {{log()}}</h1>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GrandComponent implements OnInit {
  @Input()
  messageObj = {message: 'hello'}

  counter = 0;


  counter$: Observable<number> = interval(1000);


  constructor(private _changeDetectorRef: ChangeDetectorRef) {

  }

  ngOnInit() {
    // setInterval(() => {
    //   console.log(`
    //     timer is now running yet cd is not working
    //     Really weird cause timers used to trigger cd.
    //     Now after we changed to OnPush the timer will not trigger CD!
    //   `)
    //   this.counter++;
    //   // this._changeDetectorRef.markForCheck();
    //   // this._changeDetectorRef.detectChanges();
    // }, 1000);

    // this.counter$.subscribe(() => {
    //   this.counter++;
    // })

  }

  h1Click() {
    console.log('events will trigger cd');
  }

  log() {
    console.log('CD: Grand');
  }
}
