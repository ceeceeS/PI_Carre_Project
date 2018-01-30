import { User } from '../models/index';


export const Car = {
    owner(owner){
       return User.findByName(owner);
       
    },
 
};
