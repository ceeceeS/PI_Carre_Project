import { User as db } from './connector';


//import { Car as db2 } from './connector';
const find = () =>{
	return db.find();
};
const findById = (id) => {
  return db.findById(id);
};

const findByName = (id) => {
  return db.find({id});
};

const create = (user) => {
  return db.create(user);
};

const SelectCarOpt = (color) => {
return db.aggregate([
     {
         $lookup : 
         {"from" : "cars",
         "localField":"_id",
         "foreignField" : "owner",
         "as" : "cars"
        }
     },
       {$match : {"cars.carColor" : color}}
     ])
}





// db.users.aggregate([
//   { $lookup:
//      {
//        from: "cars",
//        pipeline: [
//         {$match: {color:"Red"}}
//       ],
//       as: "stockdata"
//      }
//    }
//   ]
// );







export const User = {
  findById,
  findByName,
  create,
  find,
  SelectCarOpt,
};
