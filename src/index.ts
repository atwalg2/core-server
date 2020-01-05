import fastify from 'fastify';
import cors from 'cors';
import { getHello, postHello } from './hello/hello';
import { getHelloOpts } from './hello/options';

const app = fastify({ logger: true });
app.use(cors())

app.get('/hello', getHelloOpts, getHello);
app.post('/hello',  getHelloOpts, postHello);

(async () => {
	await app.listen(1337)
		.catch(err => {
			app.log.error(err);
			process.exit(1);
		});
})();
