// classify our async code.
// ----0----0---0----0---0---|-->
// ----------X----------->
// 0000--------------------->
// Observable<string>

// create the observable:
// call some service in angular
//     - HttpClient.get
//     - Router.events
//     - ActivatedRoute.paramsMap
// operators - of('hello world from observable'), interval(1000)
// do it yourself

import {Observable} from 'rxjs';

const hello$: Observable<string> = new Observable(
	(observer) => {
		console.log('observable function!');
		const intervalId = setInterval(() => {
			observer.next('hello1');
				
		}, 1000);
		// observer.next('hello1');
		// observer.next('hello2');
		// observer.next('hello3');
		
		// observer.error(new Error('something happened'));
		// observer.complete()
		
		return () => {
			clearInterval(intervalId);
		}
	}
)

hello$.subscribe(
	(msg: string) => {
		console.log(msg);
	},
	(err: Error) => {
		
	},
	() => {
		console.log('I am grute!')
	}
)

hello$.subscribe(
	() => {
		
	}
)
// console.log('after the next');

// Promise VS Observable
// observable we can call next multiple times

// Observable VS Promise
// Promise is always async
// Observable is sync or async
// The observable function is called for every listener (subscribe)
// Promise the async function is called once for all the listeners

// Closing the observable.
// - from the observable
//    - complete / error
// - unsubscribe



