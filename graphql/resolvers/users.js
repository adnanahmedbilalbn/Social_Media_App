const User = require('../../models/User')

module.exports = {
    Mutation:{
        register(_, args, context, info){
            // TODO Validate user data
            //TODO make sure user does'nt exists
            // TODO hash password and create an Auth Token
        }
    }
}