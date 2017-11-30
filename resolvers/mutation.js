import { User, Car } from '../models/index';

export const Mutation = {
    createUser: (_, { user }) => {
        return User.create(user);
    },
    createCar: (_, { car }) => {
        return Car.create(car);
    },
};
