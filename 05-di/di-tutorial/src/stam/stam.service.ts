import { Injectable, Inject, InjectionToken } from '@angular/core';
import { HttpClient} from '@angular/common/http';

// this.stamService.someUrl = 'https://....'

// { provide: ..., useValue: ''}

interface StamConfig {
  someUrl: string;
  ruslan: number[];
  avitan: boolean[];
}

export const CONFIG_STAM_SERVICE = new InjectionToken<string>('config for the StamService for the server url');


@Injectable({
  providedIn: 'root'
})
export class StamService {
  // someUrl = 'https://....';

  constructor(
    private _http: HttpClient,
    @Inject(CONFIG_STAM_SERVICE) private someUrl: string
  ) { }

  getTodo() {
    return this._http.get(`${this.someUrl}/api/todo`);
  }

}
