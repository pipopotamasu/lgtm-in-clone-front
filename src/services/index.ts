import auth from './auth';
import post from './post';

export const $api = {
  auth,
  post,
} as Readonly<{ auth: typeof auth; post: typeof post }>;
