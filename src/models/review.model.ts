import { Schema, model } from 'mongoose'

import { IReview } from '../interfaces/review.interface'

const reviewSchema = new Schema<IReview>({
  review: {
    type: String,
    required: [true, 'Please provide a review'],
  },
  rating: {
    type: Number,
    required: [true, 'Please provide a rating'],
    min: 1,
    max: 5,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  tour: {
    type: Schema.Types.ObjectId,
    ref: 'tours', // Assuming your tour model is named 'Tour'
    required: [true, 'Please provide the associated tour'],
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users', // Assuming your user model is named 'User'
    required: [true, 'Please provide the associated user'],
  },
})

const Review = model<IReview>('review', reviewSchema)

export default Review
