import { Component, OnInit } from '@angular/core';
import { RouterEventsService } from '../../router-events.service';
import { BehaviorSubject } from 'rxjs';

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
export class HomeComponent implements OnInit {
  events: any[] = [];

  constructor(private _routerEvents: RouterEventsService) { }

  ngOnInit() {
    this._routerEvents.routerEvents.subscribe((e) => {
      this.events.push(e);
    })
  }
}
