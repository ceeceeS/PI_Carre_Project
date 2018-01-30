import { Car as db } from "./connector";
//import { User as db2 } from "./connector";

const findById = (id) => {
  return db.findById(id);
}

const findByOwner = (owner) => {
  return db.find({ owner });
}

const create = (car) => {
  return db.create(car);
}
const find = () =>{
	return db.find();
};

const findselect = (model,registrationNo)=>{
return db.find({model,registrationNo});
}



// db.users.aggregate([
//   {
//      $lookup:
//         {
//           from: "cars",
//           pipeline: [
//              { $match: { carColor: "Black" } }, 
//              { $project: { _id: 0 }},
             
//           ],
//           as: "cars_doc"
//         }
//    }
// ])


// db.users.aggregate([
//   {
//      $lookup:
//         {
//           from: "cars",
//           let: { user_id: "$_id"},
//           pipeline: [
//              { $match:
//                 { $expr:
//                    { $and:
//                       [
//                         { $eq: [ "$owner",  "$$user_id" ] },
//                         { $eq: [ "$carColor", "Red" ] }
//                       ]
//                    }
//                 }
//              },
          
//           ],
//           as: "cardata"
//         }
//    }
// ])






// db.cars.aggregate([
//   {$match:{carColor:"Black"}},
//   {
    
//      $lookup:
//         {
//           from: "users",
//           localField: "owner", 
//           foreignField: "_id",
//           as: "cardata"
//         }
//    }
// ])




// db.users.aggregate([
//   {
//     $lookup:
//       {
//         from: "cars",
//         localField: "_id",
//         foreignField: "owner",
//         as: "cars_doc"
//       }
//  }
// ])

// { $project: { _id: 0, date: { name: "$name", date: "$date" } } },
//              { $replaceRoot: { newRoot: "$date" } }






export const Car = {
  findById,
  findByOwner,
  create,
  find,
  findselect,
}
