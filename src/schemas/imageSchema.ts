import path from 'path';
import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const imageSchema = new Schema(
    {
        directory: { type: String },
        extension: { type: String }
    },
    {
        timestamps: true
    }
);

imageSchema
    .virtual('path')
    .get(function (this: IImageDocument) {
        return path.join(this.directory, `${this._id.toString()}.${this.extension}`);
    })

const image = mongoose.model<IImageDocument>('Image', imageSchema);

interface IImageDocument extends mongoose.Document {
    _id: mongoose.Schema.Types.ObjectId;
    directory: string,
    extension: string,
    path: string
}

export default image;