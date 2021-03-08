import fastify from 'fastify';
import pointOfView from 'point-of-view';
import pino from 'pino';
import pug from 'pug';
import indexRouter from './routes/indexRoutes';

const PORT = 8080;
const logger = pino(pino.destination('./logs/test.log'));
const app = fastify({ logger });

app.register(pointOfView, { engine: { pug } })
app.register(indexRouter, { prefix: '/' });

app.listen(PORT, (err, address) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }

    console.log(`Server listening at ${address}`);
});
