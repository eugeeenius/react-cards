import express, {Application, Request, Response, NextFunction} from 'express';
import config, {IConfig} from 'config';

const app: Application = express();

const PORT: IConfig = config.get('port') || 5000;

app.listen(PORT, () => console.log('running'));