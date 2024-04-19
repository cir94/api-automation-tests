import 'dotenv/config';

export const envs = {
    apiTestingUrl: new URL(process.env.API_URL)
}