const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./config/db');
const {ApolloServer} = require('apollo-server-express');
const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');


const PORT = 4000;
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cors());

connectDB();

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context:({req}) => ({req})

});



server.applyMiddleware({app});

app.listen(PORT,() => {
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
})

