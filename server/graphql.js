const {ApolloServer,} = require("apollo-server-express")
const {resolvers, typeDefs} = require('./schema')

module.exports = new ApolloServer({typeDefs, resolvers})
