import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import {MessageService} from './message.service';

@Component({
  selector: 'app-root',
  template: `
    <h1>
    {{messageService.message$ | async}}
    </h1>

    <todo></todo>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  constructor(public messageService : MessageService) {

  }

  ngOnInit() {
    this.messageService.message$.subscribe(() => {
      // will not trigger cd
      // this.cd.detectChanges()
    })
  }
}
