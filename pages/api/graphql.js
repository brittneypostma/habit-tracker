import { ApolloServer, gql } from 'apollo-server-micro';

const typeDefs = gql`
  type Query {
    sayHello: String
  }
`;

const resolvers = {
  Query: {
    sayHello: () => {
      return 'Hello Level Up!';
    }
  }
};

const apolloServer = new ApolloServer({ typeDefs, resolvers });

export const config = {
  api: {
    bodyParser: false
  }
};

export default apolloServer.createHandler({ path: '/api/graphql' });


// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// export default (req, res) => {
//   res.status(200).json({
//     test: 'Hello'
//   })
// }
// Long way
// export default (req, res) => {
//   res.setHeader('Content-Type', 'application/json')
//   res.statusCode = 200
//   res.end(JSON.stringify({
//     test: "Hello"
//   }))
// }
