import express from 'express';
import bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'graphql-server-express';
import { makeExecutableSchema } from 'graphql-tools';
import mongoose from 'mongoose';
 // import typeDefs from './types'
 // import resolvers from './resolvers'
import models from './models/index'
import cors from 'cors';
import path from 'path';
import { fileLoader, mergeTypes, mergeResolvers } from 'merge-graphql-schemas';

const typeDefs = mergeTypes(fileLoader(path.join(__dirname, './types')));
const resolvers = mergeResolvers(fileLoader(path.join(__dirname, './resolvers')));

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});
/*var graphql = require ('graphql').graphql  
var query = `query IntrospectionQuery {
    __schema {
      types {
        ...FullType
      }
    }
  }

  fragment FullType on __Type {
    name
    kind
    fields(includeDeprecated: false) {
      name
    }
  }`;
graphql(schema, query).then( function(result) {  
  console.log(JSON.stringify(result,null," "));
});*/

const PORT = 3000;

const app = express();

app.use(cors({
  origin:["http://localhost:3001"]
}))

// bodyParser is needed just for POST.

app.use('/graphql', bodyParser.json(), graphqlExpress({
  schema,
context: {
    models
  }
  }));
app.get('/graphiql', graphiqlExpress({ endpointURL: '/graphql' })); // if you want GraphiQL enabled


// app.listen(PORT, () => console.log(
//   `GraphQL Server is now running on `
// ));
mongoose.connect('mongodb://localhost:27017/coucou', {useMongoClient: true}).then(
  () => {
    console.log('Connecting to MongoDB')
    app.listen(PORT, ()=>{
      console.log('Running GRAPHQL server...');
    });
  }
)