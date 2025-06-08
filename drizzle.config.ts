import 'dotenv/config';

const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD } = process.env;

export default {
  schema: './src/db/schema',
  out: './drizzle/migrations',
  dialect: 'postgresql',
  dbCredentials: {
    host: PGHOST!,
    database: PGDATABASE!,
    user: PGUSER!,
    password: PGPASSWORD!
  }
};
