import { Schema, model } from 'mongoose'
import { ITour } from '../interfaces/tour.interface'

const tourSchema = new Schema<ITour>({
  name: {
    type: String,
    required: [true, 'Please provide a tour name'],
  },
  duration: {
    type: Number,
    required: [true, 'Please provide the tour duration'],
  },
  ratingAverage: {
    type: Number,
    default: 0,
  },
  ratingQuantity: {
    type: Number,
    default: 0,
  },
  price: {
    type: Number,
    required: [true, 'Please provide the tour price'],
  },
  imageCover: {
    type: String,
    required: [true, 'Please provide the tour cover image'],
  },
  images: {
    type: [String],
    required: [true, 'Please provide at least one tour image'],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  startDate: {
    type: [Date],
    required: [true, 'Please provide at least one start date'],
  },
  startLocation: {
    type: String,
    required: [true, 'Please provide the start location'],
  },
  locations: {
    type: [String],
    required: [true, 'Please provide at least one tour location'],
  },
  slug: {
    type: String,
    unique: true,
    required: [true, 'Please provide a unique slug for the tour'],
  },
})

const Tour = model<ITour>('tour', tourSchema)

export default Tour
