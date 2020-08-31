import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'recieve',
  template: `
    <h1>
    I got: {{message$ | async}}
    </h1>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecieveComponent {
  message$: Observable<string> = this._store.pipe(
    map((state: any) => state.message.hello)
  );

  constructor(private _store: Store) {

  }
}
