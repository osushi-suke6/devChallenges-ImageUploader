import { FastifyPluginAsync } from 'fastify';

const router: FastifyPluginAsync = async (app) => {
    app.get('/', async (_req, reply) => {
        reply.view('./views/index.pug');
    });

    app.get('/test', async (_req, reply) => {
        reply.view('./views/test.pug');
    });
}

export default router;