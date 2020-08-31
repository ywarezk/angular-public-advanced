import createApplication, { Request, Response, json, urlencoded } from 'express';
import {resolve} from 'path';

const app = createApplication();

app.use(json());
app.use(urlencoded());


// app.get()
// our server will get a post request
app.get('/', (req: Request, res: Response) => {
	// { hello: 'world' }
	// req.body

	// inspired by avitan ! CEERIO AVITAN
	res.cookie(
		'avitanData', JSON.stringify({ hello: 'world' }), {
		httpOnly: false
	})

	// /
	res.sendFile(resolve(__dirname, 'index.html'));
})

app.listen(3000, () => {
	console.log('now listening on port 3000')
});
