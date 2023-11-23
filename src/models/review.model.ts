import { Schema, model } from 'mongoose'

import { IReview } from '../interfaces/review.interface'

const reviewSchema = new Schema<IReview>(
  {
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
      ref: 'tours',
      required: [true, 'Please provide the associated tour'],
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'users',
      required: [true, 'Please provide the associated user'],
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
)

reviewSchema.index({ tour: 1, user: 1 }, { unique: true })

reviewSchema.virtual('users', {
  ref: 'user',
  foreignField: '_id',
  localField: 'user',
})

const Review = model<IReview>('review', reviewSchema)

export default Review
