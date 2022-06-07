import { createServer, Factory, Model, Response } from 'miragejs';
import faker from 'faker';

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

    factories: {
        user: Factory.extend({
          name() {
            return faker.name.findName();
          },
          email() {
            return faker.internet.email().toLowerCase();
          },
          createdAt() {
            return faker.date.recent(10);
          },
        })
      },
  
      seeds(server) {
        server.createList('user', 200);
      },

    routes() {
      this.namespace = 'api';
      this.timing = 750; // delay 750ms

      this.get('/users', function (schema, request) {
        const { page = 1, per_page = 10 } = request.queryParams;

        const total = schema.all('user').length;

        const pageStart = (Number(page) - 1) * Number(per_page);
        const pageEnd = pageStart + Number(per_page);

        const users = this.serialize(schema.all('user'))
          .users.slice(pageStart, pageEnd);
          
          return new Response(
            200,
            { 'x-total-count': String(total) },
            { users }
          );

      });
      this.post('/users');
      this.get('/users/:id');

      // Change the namespace to empty to not conflict with Next's Root API
      this.namespace = '';
      // Make that if the call is not found in the mirage to be passed to the Root API of Next
      this.passthrough();
    }
  });

  return server;
}