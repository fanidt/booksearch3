// import the gql tagged template function
const { gql } = require("apollo-server-express");

const typeDefs = gql`
  
  type User {
    _id: ID
    username: String!
    email: String!
    password: String!
    bookCount: Int
    savedBooks: [Book]
  }

  type Query {
    me: User
  }

  input saveBookInput {
    bookId: ID
    description: String
    authors: [String]
    link: String
    title: String
    image: String
  }

  type Book {
    _id: ID
    bookId: ID
    description: String
    authors: [String]
    link: String
    title: String
    image: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, password: String!, email: String!): Auth
    saveBook(body: saveBookInput): User
    removeBook(bookId: String!): User
  }
`;

// export the typeDefs
module.exports = typeDefs;
