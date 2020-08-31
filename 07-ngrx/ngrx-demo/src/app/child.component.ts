import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MessageService } from './message.service';

@Component({
  selector: 'child',
  template: `

  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class NameComponent implements OnInit {
  constructor(private _messageService: MessageService) { }

  ngOnInit() {
    this._messageService.message$.next('changed from child');

  }
}
