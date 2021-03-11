import mongoose from 'mongoose';

mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

async function database(uri: string) {
    try {
        await mongoose.connect(uri);
        console.log('Database conneciton successful');

    } catch (error) {
        console.log(`Database connection error ${error}`);
        throw new Error(error.message);

    }
}

export default database;