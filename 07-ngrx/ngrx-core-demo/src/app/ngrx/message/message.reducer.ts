import { createReducer, on, State } from '@ngrx/store';
import { helloAction } from './message.actions';

export const messageReducer = createReducer(
  {
    hello: 'initial hello string message',
    yuval: {
      hello: {
        tasks: [
          {title: 'hello'}
        ]
      }
    }
  },
  on(helloAction, (state, action) => {
    return {
      ...state,
      hello: action.newHello
    }
  }),
  /*
  // on(yuvalAction, (state, action) => {
  //   state.yuval['hello']...
  //   return {
  //     ...state,
  //     yuval: action.newObj,
  //     yuvalClass: new Yuval()
  //   }
  // })
  */
)

// class Yuval {

// }
