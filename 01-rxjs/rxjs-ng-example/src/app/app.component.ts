import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'rxjs-ng-example';
  stamInput = new FormControl();

  private _sub: Subscription;

  private _stamArray = [];

  /**
   * Angular often produce observables we can use
   * here is a few examples
   */
  constructor(
    // private _http: HttpClient,
    private _router: Router,
    private _activatedRoutes: ActivatedRoute
  ) {
  }

  ngOnInit() {
    // send request to server - get back observable
    // this._http.get(...).subscribe(...)

    // get events from the router
    this._sub = this._router.events.subscribe(() => {
      this._stamArray.push(10);
    })

    // get route params
    // this._activatedRoutes.paramMap

    // get query params map
    // this._activatedRoutes.queryParamMap

    // Observable when the form control value change
    // this.stamInput.valueChanges
  }

  ngOnDestroy() {
    this._sub.unsubscribe();
  }
}
