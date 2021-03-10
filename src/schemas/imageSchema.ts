import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const imageSchema = new Schema(
    {
        path: { type: String }
    },
    {
        timestamps: true
    }
)

const image = mongoose.model<IImageDocument>('Image', imageSchema);

interface IImageDocument extends mongoose.Document {
    _id: mongoose.Schema.Types.ObjectId;
    path: string
}

export default image;