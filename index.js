import express from 'express';
import bodyParser from 'body-parser';
import { graphiqlExpress, graphqlExpress } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';
import mongoose, { mongo } from 'mongoose';
mongoose.Promise = global.Promise;
import cors from 'cors';
import "dotenv/config";
import { apolloUploadExpress } from 'apollo-upload-server';

import models from './models';
import auth from './auth';

import path from 'path';
import { fileLoader, mergeTypes, mergeResolvers } from 'merge-graphql-schemas';
const typeDefs = mergeTypes(fileLoader(path.join(__dirname, './types')));
const resolvers = mergeResolvers(fileLoader(path.join(__dirname, './resolvers')));

const schema = makeExecutableSchema({
    typeDefs,
    resolvers
});

const app = express();
app.use(cors({
    origin: ["http://localhost:3001"]
}));

app.use(auth.checkHeaders);

app.use('/graphql', bodyParser.json(), apolloUploadExpress(), graphqlExpress((req) => {
    return { 
        schema,
        context: {
            models,
            SECRET: process.env.SECRET,
            user: req.user
        }
    }
}));
app.get('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

mongoose.connect('mongodb://localhost:27017/instagram-clone')
    .then(() => {
        console.log("Conectado a mongo");
        app.listen(process.env.PORT, () => {
            console.log("Running GraphQL Server");
        });
});