import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { helloAction } from './ngrx/message/message.actions';

@Component({
  selector: 'send',
  template: `
    <form [formGroup]="sendForm" (ngSubmit)="send()">
      <input type="text" formControlName="message" />
      <button>
        Submit
      </button>
    </form>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class SendComponent {
  sendForm = this._formBuilder.group({
    message: ''
  });

  constructor(
    private _formBuilder: FormBuilder,
    private _store: Store
  ) {}

  send() {
    console.log(this.sendForm.value);
    this._store.dispatch(
      helloAction({ newHello: this.sendForm.controls.message.value})
    )

    // this._store.dispatch(
    //   startSendingRequest()
    // )
  }
}
