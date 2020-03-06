import {ApolloServer, PubSub} from 'apollo-server-express';
import express from 'express';
import {makeExecutableSchema} from 'graphql-tools';
import typeDefs from './typedefs/index';
import db from './context/index';
import resolvers from './resolvers/root';
import {getUser} from './utils';
import {applyMiddleware} from 'graphql-middleware';
require('dotenv').config();

const schema = applyMiddleware(
  makeExecutableSchema({
    typeDefs,
    resolvers,
    resolverValidationOptions: {
      requireResolversForResolveType: false
    }
  })
);

const pubsub = new PubSub();

const server = new ApolloServer({
  schema,
  context: req => ({
    ...req,
    pubsub,
    user: getUser(req),
    db
  })
});

const app = express();

server.applyMiddleware({app});

app.listen({port: 4000}, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);
