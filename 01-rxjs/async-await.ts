
declare var ajax: Promise<Response>;

/**
 * @returns {Promise<number>}
 */
async function hello() {
	try {
		const res = await ajax;
		const dataFromServer = await res.json()	
	} catch(err) {
		
	}
	
	return 10;
}

hello().then((num: number) => {
	
})