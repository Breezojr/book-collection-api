import { DataSourceOptions as BaseConnectionOptions } from 'typeorm';
import { DEFAULT_CONNECTION } from './constants';
import * as dotenv from 'dotenv';

dotenv.config();

export const getConnections = (): BaseConnectionOptions[] => [
    {
        name: DEFAULT_CONNECTION,
        type: process.env.DB_CONNECTION as 'postgres' | 'oracle',
        host: process.env.DB_HOST,
        port: parseInt(process.env.DB_PORT, 10),
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        extra: {
            connectString: process.env.DB_CONNECTION_STRING,
        },
        database: process.env.DB_DATABASE,
        entities: [__dirname + '/../**/*.model.{js,ts}'],
        synchronize: process.env.DB_SYNCHRONIZE === 'true',
       
        logging: process.env.DB_LOGGING === 'true',

    },
];

export const getDefaultConnection = (): BaseConnectionOptions =>
    getConnections().find((i) => i.name === DEFAULT_CONNECTION);
