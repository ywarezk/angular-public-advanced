import { Component, OnInit, AfterViewInit, AfterViewChecked, AfterContentChecked, DoCheck } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>CD {{ log() }} {{ title.msg }} {{ randomNum() }} {{ counter }}</h1>

    <child></child>
  `,
})
export class AppComponent implements OnInit, AfterViewInit {
  title = {msg: 'hello'};
  counter = 0;

  log() {
    console.log('CD: AppComponent');
    // this.title = 'sfdssfd'; // not good
  }

  ngOnInit() {
    // setTimeout(() => {
    //   console.log('timer is now running');
    //   this.title = 'world';
    // }, 1000);

    // setInterval(() => {
    //   this.counter++
    // }, 1000);
  }

  randomNum(): number {
    // return Math.random();
    return 0;
  }

  ngAfterViewInit() {
    // setTimeout(() => {
      // this.title = 'world';
    // });
    // this.title = {msg: 'asdfa'};
    this.title['msg'] = 'dfgsdfg';

  }
}

// setTimeout(() => {
//   console.log('timer is now running');
// }, 1000);
