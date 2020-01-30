const useradminResolvers = require('./userAdminResolvers');
const brandResolvers  = require('./brandResolvers');
const categoryResolvers = require("./categoryResolvers");
const productResolvers = require('./productResolvers');

module.exports = {
    Query:{
        ...useradminResolvers.Query

    },
    Mutation:{
        ...useradminResolvers.Mutation,
        ...brandResolvers.Mutation,
        ...categoryResolvers.Mutation,
        ...productResolvers.Mutation
    }
}