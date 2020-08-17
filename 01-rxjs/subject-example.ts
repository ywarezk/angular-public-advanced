/**
 * ----0----0---0---0----00--0-0---->
 * one datastream for many listeners.
 * subject does not wrap a function
 */
 
import { Subject, BehaviorSubject } from 'rxjs';

// const hello$: Subject<string> = new Subject();
const hello$: BehaviorSubject<string> = new BehaviorSubject('hello0');

hello$.next('hello1');
hello$.next('hello2');
// hello$.error(new Error('something happened'));
// hello$.complete();

hello$.subscribe(
	(msg) => {
		console.log(msg); //hello2
	},
	(err) => {
		
	},
	() => {
		
	}
)

hello$.value;


