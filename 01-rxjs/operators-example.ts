/**
 * ----------0----0----00-----0---->
 * ---------------------0-----0---->
 * -------------------dogs---dogs---->
 * operators help us solve data stream problems
 * operators are functions that help us manipulate data stream.
 */
 
import { interval } from 'rxjs';
import { filter, debounceTime, tap } from 'rxjs/operators';

// interval(1000).subscribe((num: number) => {
// 	console.log(num);
// });

interval(1000).pipe(
	filter((num: number) => num % 2 === 0),
	tap((zogi: number) => console.log(zogi)),
	debounceTime(3000),
	tap((zogi: number) => console.log(zogi)),
).subscribe((num: number) => {
	console.log(num);
})
 

 
