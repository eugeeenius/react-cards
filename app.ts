import express, {Application, Request, Response, NextFunction} from 'express';
import config, {IConfig} from 'config';
import mongoose from 'mongoose';

const app: Application = express();
const PORT: IConfig = config.get('port') || 5000;

app.use('/api/auth', require('./routes/auth.routes'));

async function start() {
    try {
        await mongoose.connect(config.get('mongoUri'));
        app.listen(PORT, () => console.log(`App has benn started on port: ${PORT}`));
    } catch (e) {
        console.log('Server error', e.message);
        process.exit(1);
    }
}
