const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const ShopDirectoryHerokuAPI = require('./shop-directory-heroku-api');

const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => {
        return {
            shopDirectoryHerokuAPI: new ShopDirectoryHerokuAPI(),
        };
    },
});

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});