import 'zone.js';

// <root>
console.log(Zone.current.name);

// <angular>
const angularRoom = Zone.current.fork({
	name: 'angular',
	onHasTask: () => {
		console.log('something async happened');
	}
});

// run code from angular room
angularRoom.run(() => {
	setTimeout(() => {
		console.log('timer is running');
	}, 1000)
})