import { User } from '../models/index';
import { Car } from '../models/index';


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
//   getAllCars: () =>{
//       return Car.find();
//   },
  getAllCars: (_,{model,registrationNo}) =>{
    return Car.findselect(model,registrationNo);
},

// getAllCars: (_,{model}) =>{
//     return Car.findmodel({model});
// },
};
