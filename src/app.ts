import fastify from 'fastify';
import fastifyStatic from 'fastify-static';
import path from 'path';
import pointOfView from 'point-of-view';
import pino from 'pino';
import pug from 'pug';
import indexRouter from './routes/indexRoutes';
import imagesApiRouter from './routes/api/images';

const PORT = 8080;
const logger = pino(pino.destination('./logs/test.log'));
const app = fastify({ logger });

app.register(fastifyStatic, { root: path.join(__dirname, '../static'), prefix: '/static/' })
app.register(pointOfView, { engine: { pug } })
app.register(indexRouter, { prefix: '/' });
app.register(imagesApiRouter, { prefix: '/api/images' });

app.listen(PORT, (err, address) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }

    console.log(`Server listening at ${address}`);
});
