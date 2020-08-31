import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  message$ = new BehaviorSubject('hello world');

  constructor() { }

}
