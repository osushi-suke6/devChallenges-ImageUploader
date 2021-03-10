import dayjs from 'dayjs';
import fs from 'fs';
import { pipeline } from 'stream';
import path from 'path';
import util from 'util';
import { FastifyPluginAsync } from 'fastify';
import mongoose from 'mongoose';
import Image from '../../schemas/imageSchema';

const router: FastifyPluginAsync = async (app) => {
    app.get<{ Params: IParams }>('/:id', async (req, reply) => {
        const id = req.params.id;

        if (mongoose.Types.ObjectId.isValid(id)) {
            const image = await Image.findById(id);
            console.log(image);
            if (image) {
                console.log(image.path);
                reply.code(200).sendFile(image.path);
                return;
            }
        }

        reply.code(400).send('Invalid id');
    });

    app.post('/', async (req, reply) => {
        try {
            const data = await req.file();
            if (!data.mimetype.match(/^image\//)) reply.code(400).send('The file is not an image file.');

            const extension = data.mimetype.split('/')[1];
            await uploadFile(data.file, extension);

            reply.code(201).send('Uploaded your image file.');

        } catch (error) {
            console.log(error);

            reply.code(500).send();
        }
    });
}

const pump = util.promisify(pipeline);

async function uploadFile(file: NodeJS.ReadableStream, extension: string) {
    try {
        const date = dayjs().format('YYYYMMDD');
        const dir = `/uploads/${date}`;
        const image = await Image.create({ directory: dir, extension: extension });
        const filename = `${image._id.toString()}.${extension}`;
        const filePath = path.join(dir, filename);

        if (!fs.existsSync(path.join('public', dir))) fs.mkdirSync(path.join('public', dir));

        await pump(file, fs.createWriteStream(path.join('public', filePath)));

    } catch (error) {
        throw new Error(error.message);
    }
}

interface IParams {
    id: string
}

export default router;