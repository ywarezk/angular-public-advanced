import { Component, OnInit, AfterViewInit, AfterViewChecked, AfterContentChecked, DoCheck, ApplicationRef, NgZone, ComponentRef, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>CD {{ log() }} {{ title.msg }} {{ randomNum() }} {{ counter }}</h1>

    <child></child>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit, AfterViewInit {
  title = {msg: 'hello'};
  counter = 0;

  constructor(
    private applicationRef: ApplicationRef,
    private ngZone: NgZone,
    changeDetectorRef: ChangeDetectorRef // when to trigger cd for AppComponent
    // applicationRef.tick() ---> ChangeDetectorRef the component is dirty
    // on push component will be dirty in certain condition
  ) {

  }

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

    // const plugin = $('.jquery-plugin').autocomplete()
    // plugin.on('something happened', () => {
    //   // this.title = ...
    //   // this.ngZone.run(() => {
    //   //   this.title = '...'
    //   // })

    //   // this.applicationRef.tick()
    // })

    // this.ngZone.runOutsideAngular(() => {
    //   // subscribe to websocket that emits often
    //   // this.http.get


    // })

    // // plugin.on('something happened', () => {
    // //   // this.title = ...
    // //   this.ngZone.run(() => {
    // //     this.title = '...'
    // //   })
    // // })
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
  // change detection did not run when setTimeout was outside the component
//   console.log('timer is now running');
// }, 1000);
