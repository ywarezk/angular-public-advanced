import { createAction, props } from '@ngrx/store';

// Action
// { type: '[message] Set Hello', payload: 'new message' }

// this.stamService.hello.next()
export const helloAction = createAction(
  '[message] Set Hello',
  props<{ newHello: string}>()
)
