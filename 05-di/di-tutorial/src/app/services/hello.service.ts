import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelloService {
  // static isCreated = false;

  greeting = 'hello world from service';

  // constructor(private _http: HttpClient) {

  // }
}
