const app = require('express')();
const graphql = require('./graphql');
const assets = require('./assets');

const { PORT = 8082 } = process.env;

graphql.applyMiddleware({ app, path: '/graphql' });
app.use(assets).listen(PORT);

console.log(`Running a GraphQL API server at localhost:${PORT}/graphql`);
