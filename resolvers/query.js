import { User } from '../models/index';
import { Car } from '../models/index';


export const Query = {
  testString: () => {
      return 'new string!!!';
  },
  getAllCarsByUser: () => {
      return User.find();
  },
  getUser: (_, { id }) => {
      return User.findById(id);
  },
  getAllCars: () =>{
      return Car.find();
  },
  getAllUsers:(_, {color})=>
  {
      return User.SelectCarOpt(color);
  },
  
  getModelCar: (_,{model,registrationNo}) =>{
    return Car.findselect(model,registrationNo);
},

// getAllCars: (_,{model}) =>{
//     return Car.findmodel({model});
// },
};
