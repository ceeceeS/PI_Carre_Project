import { User as db } from './connector';

const find = () =>{
	return db.find();
};
const findById = (id) => {
  return db.findById(id);
};

const findByName = (id) => {
  return db.find({_id : id});
};

const create = (user) => {
  return db.create(user);
};

export const User = {
  findById,
  findByName,
  create,
  find,
};
