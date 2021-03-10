import fastify, { FastifyInstance } from 'fastify';
import fastifyMultipart from 'fastify-multipart';
import fastifyStatic from 'fastify-static';
import path from 'path';
import pointOfView from 'point-of-view';
import pino from 'pino';
import pug from 'pug';
import database from './database';
import indexRouter from './routes/indexRoutes';
import imagesApiRouter from './routes/api/images';

const PORT = 8080;
const logger = pino(pino.destination('./logs/test.log'));
const app = fastify({ logger });

app.register(fastifyMultipart);
app.register(fastifyStatic, { root: path.join(__dirname, '../static'), prefix: '/static/' })
app.register(pointOfView, { engine: { pug } })
app.register(indexRouter, { prefix: '/' });
app.register(imagesApiRouter, { prefix: '/api/images' });

boot(app);

async function boot(app: FastifyInstance) {
    try {
        await database('mongodb://127.0.0.1:27017/imageUploader');
        const address = await app.listen(PORT);
        console.log(`Server listening at ${address}`);

    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}
