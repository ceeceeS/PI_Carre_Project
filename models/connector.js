// import mongoose from 'mongoose';

// const userSchema = mongoose.Schema({
//   _id: String,
//   displayName:  String,
//   email: String,
//   firstName: String,
//   lastName: String,
//   birthday: String
// })

// const userModel = mongoose.model('User', userSchema)

// export default userModel;
import mongoose from 'mongoose';

const CarSchema = new mongoose.Schema({
  model: String,
  registrationNo: String,
  carColor : String,
  insurancePrice : Number,
  kilometer : Number,
  manufactureYear: Number,
  owner: { type: String, ref: 'User' },
});

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
  salary: Number,
  household: Number,
});
export const User = mongoose.model('User', UserSchema);
export const Car = mongoose.model('Car', CarSchema);