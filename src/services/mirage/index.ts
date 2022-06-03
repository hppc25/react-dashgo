import { createServer, Model } from 'miragejs';

type User = {
  name: string;
  email: string;
  created_at: string;
}

export function makeServer() {
  const server = createServer({
    models: {
      user: Model.extend<Partial<User>>({}),
    },
    routes() {
      this.namespace = 'api';
      this.timing = 750; // delay 750ms

      this.get('/users');
      this.post('/users');

      // Change the namespace to empty to not conflict with Next's Root API
      this.namespace = '';
      // Make that if the call is not found in the mirage to be passed to the Root API of Next
      this.passthrough();
    }
  });

  return server;
}