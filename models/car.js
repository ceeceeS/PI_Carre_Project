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

export const Car = {
  findById,
  findByOwner,
  create
}
