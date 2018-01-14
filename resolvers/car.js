import { User } from '../models/index';


export const Car = {
    owner(car){
       return User.findByName(car.id);
       
    },
 
};
