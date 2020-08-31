import { Component, OnInit, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
// import {} from '';

@Component({
  selector: 'child',
  template: `
    <h1>
      Child Component {{log()}}
    </h1>

    <grand></grand>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent implements OnInit {
  log() {
    console.log('CD: ChildComponent');
  }

  constructor(private _changeDetectorRef: ChangeDetectorRef) {

  }

  ngOnInit() {
    // setTimeout(() => {
    //   console.log('timer in child is running');
    // }, 1000);
  }
}
