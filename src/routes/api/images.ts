import dayjs from 'dayjs';
import fs from 'fs';
import { pipeline } from 'stream';
import path from 'path';
import util from 'util';
import { FastifyPluginAsync } from 'fastify';


const router: FastifyPluginAsync = async (app) => {
    app.get('/', async (_req, reply) => {
        reply.send('test');
    });

    app.post('/', async (req, reply) => {
        // fileSizelimit に達してもエラーを throw しない不具合発生中
        const multipartOptions = {
            throwFileSizeLimit: true,
            limits: {
                files: 1,
                fileSize: 1
            }
        };

        try {
            const data = await req.file(multipartOptions);
            if (!data.mimetype.match(/^image\//)) reply.code(400).send('The file is not an image file.');

            await uploadFile(data.file);

            reply.code(200).send('Image file was sent.');

        } catch (error) {
            console.log(error);

            reply.code(500).send();
        }
    });
}

const pump = util.promisify(pipeline);

async function uploadFile(file: NodeJS.ReadableStream) {
    try {
        const date = dayjs().format('YYYYMMDD');
        const dir = `./uploads/${date}`;
        const filename = dayjs().unix().toString();

        if (!fs.existsSync(dir)) fs.mkdirSync(dir);

        await pump(file, fs.createWriteStream(path.join(dir, filename)));

    } catch (error) {
        throw new Error(error.message);
    }
}

export default router;