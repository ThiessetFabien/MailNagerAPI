import * as mongoose from 'mongoose';
import 'dotenv/config';

export const databaseProviders = [
    {
        provide: 'DATABASE_CONNECTION',
        useFactory: async (): Promise<typeof mongoose> =>
        await mongoose.connect(
            `${process.env.DB_URL}/${process.env.DB_NAME}`,),
        },
    ]; 