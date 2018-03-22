import express from 'express';
import bodyParser from 'body-parser';
import { graphiqlExpress, graphqlExpress } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';
import mongoose, { mongo } from 'mongoose';
mongoose.Promise = global.Promise;

import models from './models';

import path from 'path';
import { fileLoader, mergeTypes, mergeResolvers } from 'merge-graphql-schemas';
const typeDefs = mergeTypes(fileLoader(path.join(__dirname, './types')));
const resolvers = mergeResolvers(fileLoader(path.join(__dirname, './resolvers')));

const schema = makeExecutableSchema({
    typeDefs,
    resolvers
});

const PORT = 3000;

const app = express();

app.use('/graphql', bodyParser.json(), graphqlExpress({ 
    schema,
    context: {
        models,
        user: {
            _id: 1,
            username: "bob"
        }
    }
}));
app.get('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

mongoose.connect('mongodb://localhost:27017/instagram-clone')
    .then(() => {
        console.log("Conectado a mongo");
        app.listen(PORT, () => {
            console.log("Running GraphQL Server");
        });
});