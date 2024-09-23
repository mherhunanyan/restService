import dotenv from 'dotenv';

dotenv.config();

export const { PORT, NODE_ENV, PRODUCTION_DB_URL } = {
    PORT: process.env.PORT || 3000,
    NODE_ENV: process.env.NODE_ENV,
    PRODUCTION_DB_URL: process.env.PRODUCTION_DB_URL,
};
