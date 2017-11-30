import { User } from '../models/index';

export const Query = {
  testString: () => {
      return 'new string!!!';
  },
  getAllUsers: () => {
      return User.find();
  },
  getUser: (_, { id }) => {
      return User.findById(id);
  },
};
