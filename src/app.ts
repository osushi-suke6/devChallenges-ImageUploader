import fastify from 'fastify';
import pino from 'pino';

const PORT = 8080;
const logger = pino(pino.destination('./logs/test.log'));
const app = fastify({ logger });


app.get('/', (req, reply) => {
    req.log.info('Does not have request information');
    reply.send('Hello, fastify');
});

app.listen(PORT, (err, address) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }

    console.log(`Server listening at ${address}`);
});
