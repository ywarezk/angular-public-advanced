import { createReducer, on } from '@ngrx/store';
import { helloAction } from './message.actions';

export const messageReducer = createReducer(
  {
    hello: 'initial hello string message'
  },
  on(helloAction, (state, action) => {
    return {
      ...state,
      hello: action.newHello
    }
  })
)
