import { Query, Schema, model } from 'mongoose'
import { IUser } from '../interfaces/user.interface'

const userSchema = new Schema<IUser>({
  name: {
    type: String,
    required: [true, 'Please tell us your name'],
  },
  age: {
    type: Number,
    required: [true, 'Please tell us your age'],
  },
  email: {
    type: String,
    required: [true, 'Please tell us your email'],
    unique: true,
    lowercase: true,
  },
  photo: {
    type: String,
  },
  role: {
    type: String,
    enum: {
      values: ['admin', 'user'],
      message: 'Role is either : user or admin. Your given role is {VALUE}',
    },
    default: 'user',
  },
  userStatus: {
    type: String,
    enum: {
      values: ['active', 'inActive'],
      message:
        'Status is either : active or InActive. Your given status is {VALUE}',
    },
    default: 'active',
  },
})

// for filter with active user
// c4-> part-6 -> 35:00
userSchema.pre(/^find/, function (this: Query<IUser, Document>, next) {
  this.find({ userStatus: { $eq: 'active' } })
  next()
})

const User = model<IUser>('user', userSchema)

export default User
