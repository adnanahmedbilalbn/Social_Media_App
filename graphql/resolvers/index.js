const postsReolvers = require('./posts')
const usersReolvers = require('./users')

module.exports = {
    Query: {
        ...postsReolvers.Query
    },
    Mutation: {
        ...usersReolvers.Mutation
    }
}
