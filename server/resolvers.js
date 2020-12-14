const resolvers = {
    Query: {
        tiles: async (_source, _params, { dataSources }) => {
            return dataSources.shopDirectoryHerokuAPI.getTiles();
        },
    },
};

module.exports = resolvers;