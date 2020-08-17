/**
Promise
---------0-|------->
---------X------->

Promise -> Observable
from(promise) -> Observable


Observable -> Promise
---0-0-0--0----0----0----0-|-------->
obs.toPromise()

obs.pipe(
	first(),
	// take(5)
)
 */