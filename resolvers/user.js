import { Car } from '../models/index';

export const User = {
  cars(model) {
    return Car.findByOwner(model.id);
  },
};
