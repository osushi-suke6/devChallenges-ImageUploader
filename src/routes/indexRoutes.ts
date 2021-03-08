import { FastifyPluginAsync } from 'fastify';

const router: FastifyPluginAsync = async (app) => {
    app.get('/', async (_req, reply) => {
        reply.view('./views/index.pug');
    });
}

export default router;