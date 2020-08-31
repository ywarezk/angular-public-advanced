import createApplication, { Request, Response, json, urlencoded } from 'express';
import cheerio from 'cheerio';
import { promises } from 'fs';

const app = createApplication();

// --> request post --> body
// Content-Type: application/json
app.use(json());
app.use(urlencoded());


// app.get()
// our server will get a post request
app.post('/', async (req : Request, res: Response) => {
  // { hello: 'world' }
  // req.body

  res.cookie(
    'avitanData', JSON.stringify({ hello: 'world' }) , {
      httpOnly: false
    }
  )

  res.sendFile('index.html');

  // const contentOfThefile = await promises.readFile('index.html');
  // const $ = cheerio.load(contentOfThefile);
  // $('head').html(
  //   $('head').html() + `
  //     <script>
  //       ....
  //     </script>
  //   `
  // );
  // res.setHeader({
  //   'Avitan': JSON.stringify({ hello: 'world' })
  // }).send($.html());
})

app.listen(3000, () => {
  console.log('now listening on port 3000')
});
