/**
 * classify your async code
 * is error possible?
 */

import { catchError } from 'rxjs/operators';
import {of} from 'rxjs';
 
// fallback
// gracefully alert

declare var http: any;

http.get('...').pipe(
	catchError((err) => {
		// throw new Error()
		return of([])
	}),
	map(),
	catchError((err) => {
		// throw new Error()
		return of([])
	}),
	deobunceTime(),	
	op3,
)
.subscribe(
	() => null,
	(err: Error) => {
		
	}
)


declare var httpPromise: Promise<Response>;

// httpPromise
// 	.then((res: Response) => {
// 		return res.json();
// 	}),
// 	catch(() => {
		
// 	}),
	
// 	.then((stamJson) => {
		
// 	})