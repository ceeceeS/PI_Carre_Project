import { Car as db } from "./connector";

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
export const Car = {
  findById,
  findByOwner,
  create,
  find,
}
