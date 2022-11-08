import * as path from 'path';
import * as dotenv from 'dotenv';

dotenv.config();

export const appConfig = {
    appName: process.env.APP_NAME || 'nestjs',

    environment: process.env.APP_ENV || 'production',

    baseUrl: process.env.APP_URL || 'http://localhost:3000',

    host: process.env.SERVER_HOST ? process.env.SERVER_HOST : '0.0.0.0',

    port: process.env.SERVER_PORT ? parseInt(process.env.SERVER_PORT) : 3000,

    secret: process.env.APP_SECRET,

    rootDir: path.join(__dirname, '../../'),
};
