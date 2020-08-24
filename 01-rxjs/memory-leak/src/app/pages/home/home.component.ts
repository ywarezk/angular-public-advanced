import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterEventsService } from '../../router-events.service';
import { BehaviorSubject, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  template: `
    <h1>
      List of router events
    </h1>
    <ul>
      <li *ngFor="let item of events">
        {{ item }}
      </li>
    </ul>
  `
})
export class HomeComponent implements OnInit, OnDestroy {
  events: any[] = [];

  private _sub: Subscription;

  constructor(private _routerEvents: RouterEventsService) { }

  ngOnInit() {
    this._sub = this._routerEvents.routerEvents.subscribe((e) => {
      this.events.push(e);
    })
  }

  ngOnDestroy() {
    this._sub.unsubscribe();
  }
}
