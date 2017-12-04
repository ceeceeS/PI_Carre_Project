//Import schema definition
import SchemaDefinition from './schemaDefinition.graphql';

// Import query
import Query from './query.graphql';
import Mutation from './mutation.graphql';

// Import types
import User from './user.graphql';
import Car from './car.graphql';

export default [SchemaDefinition, Query, Mutation, User, Car];


/*export default `
  type User {
  _id: String
  displayName: String
  email: String
  firstName: String
  lastName: String
  birthday: String
  cars: [ Car ]
}

input InputUser {
  displayName: String!
  email: String!
  firstName: String!
  lastName: String!
  birthday: String!
}
type Car {
  _id: String
  model: String
  registrationNo: String
  owner: User
}

input InputCar {
  model: String!
  registrationNo: String!
  owner: String!
}
type Query {
  getUser(id: String!): User
  getAllUsers: [User]
  testString: String
}

type Mutation {
  createUser(user: InputUser!): User
  createCar(car: InputCar!): Car
}


`;
*/