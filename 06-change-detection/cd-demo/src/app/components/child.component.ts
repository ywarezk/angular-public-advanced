import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'child',
  template: `
    <h1>
      Child Component {{log()}}
    </h1>
  `
})
export class ChildComponent implements OnInit {
  log() {
    console.log('CD: ChildComponent');
  }

  ngOnInit() {
    // setTimeout(() => {
    //   console.log('timer in child is running');
    // }, 1000);
  }
}
