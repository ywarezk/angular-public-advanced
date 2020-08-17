// classify our async code.
// --------0---|--------->
// ----------X----------->
// Promise<string | number>

// Producer
function createData() {
	return 'hello world';
}

// Consumer
const message = createData();

// consumer ---------> producer
// producer ----------> consumer

const hello$: Promise<string> = new Promise((resolve, reject) => {
	// setTimeout(() => {
		resolve('hello world');
		// resolve('hello world2');
		
		// reject(new Error('something happened'));
	// }, 1000);
});
// Promise.resolve('hello world');

hello$.then(
	(msg: string) => {
		console.log(msg);
	},
	(err) => {
		console.log(err.message)
	}
)
console.log('after listener is attached');

