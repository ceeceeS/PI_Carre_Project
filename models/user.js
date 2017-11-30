import { User as db } from './connector';

const find = () =>{
	return db.find();
};
const findById = (id) => {
  return db.findById(id);
};

const create = (user) => {
  return db.create(user);
};

export const User = {
  findById,
  create,
  find,
};
